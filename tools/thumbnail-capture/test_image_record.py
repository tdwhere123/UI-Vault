"""SYNTHETIC TEST DATA ONLY. All outputs go to temporary directories, never real covers."""
import copy
import json
import tempfile
import unittest
from pathlib import Path
from PIL import Image
from image_record import process


class CaptureProcessingTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="synthetic-thumbnail-test-")
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.repo = self.base / "repo"
        self.repo.mkdir()
        self.scratch = self.base / "scratch"
        self.shot = self.base / "SYNTHETIC-NOT-A-REAL-COVER.png"
        Image.new("RGB", (1200, 800), (30, 80, 150)).save(self.shot)
        self.spec = {"id": "synthetic:only-test", "screenshot": str(self.shot),
                     "rect": [100, 100, 1000, 600],
                     "viewport": {"width": 1200, "height": 800},
                     "actions": ["SYNTHETIC TEST ONLY"], "render_state": "SYNTHETIC",
                     "screenshot_status": "captured_render_confirmed"}

    def test_size_budget_auditable_crop_and_evidence(self):
        r = process(self.repo, self.scratch, self.spec)
        out = self.repo / r["path"]
        with Image.open(out) as image:
            self.assertEqual(image.size, (680, 440))
            self.assertEqual(image.format, "WEBP")
        self.assertLess(out.stat().st_size, 250000)
        box = r["fitted_crop_box"]
        self.assertAlmostEqual((box[2]-box[0])/(box[3]-box[1]), 680/440)
        self.assertEqual(r["requested_rect"], [100, 100, 1000, 600])
        raw = list((self.scratch / "raw-evidence").iterdir())
        self.assertEqual(raw[0].read_bytes(), self.shot.read_bytes())
        self.assertNotIn(str(self.base), json.dumps(r))
        self.assertEqual(r["interaction_acceptance"], "not_tested")
        self.assertEqual(r["compression_status"], "passed")

    def test_contain_preserves_whole_region_with_neutral_padding(self):
        r = process(self.repo, self.scratch, dict(self.spec, fit="contain", background=[255, 255, 255]))
        self.assertEqual(r["fitted_crop_box"], [100, 100, 1100, 700])
        self.assertEqual(r["placement"]["content_size"], [680, 408])
        self.assertEqual(r["placement"]["offset"], [0, 16])
        with Image.open(self.repo/r["path"]) as image:
            self.assertGreater(min(image.getpixel((340, 0))), 245)
            self.assertLess(image.getpixel((340, 220))[0], 50)
        self.assertLess(r["bytes"], 250000)

    def test_unknown_css_viewport_kept_separate_from_screenshot_pixels(self):
        r = process(self.repo, self.scratch, dict(self.spec, viewport={"width": None, "height": None, "status": "unknown"}))
        self.assertEqual(r["viewport"]["status"], "unknown")
        self.assertEqual(r["source_dimensions"], [1200, 800])

    def test_duplicate_id_and_overwrite_rejected(self):
        r = process(self.repo, self.scratch, self.spec)
        original = (self.repo/r["path"]).read_bytes()
        with self.assertRaises(FileExistsError):
            process(self.repo, self.scratch, self.spec)
        self.assertEqual((self.repo/r["path"]).read_bytes(), original)

    def test_preexisting_cover_rejected(self):
        out = self.repo/"apps/atlas-sample/thumbnails/synthetic--only-test.webp"
        out.parent.mkdir(parents=True)
        out.write_bytes(b"existing")
        with self.assertRaises(FileExistsError):
            process(self.repo, self.scratch, self.spec)
        self.assertEqual(out.read_bytes(), b"existing")

    def test_invalid_ids_rejected(self):
        for identity in ("../escape", "safe:../../escape", "safe:/escape", "safe:a/b", "safe:a:b"):
            with self.subTest(identity=identity), self.assertRaises(ValueError):
                process(self.repo, self.scratch, dict(self.spec, id=identity))

    def test_invalid_rectangles_rejected(self):
        for rect in ([-1, 0, 10, 10], [0, 0, 1300, 800], [0, 0, 0, 1], [0, 0, True, 2]):
            with self.subTest(rect=rect), self.assertRaises(ValueError):
                process(self.repo, self.scratch, dict(self.spec, rect=rect))
        self.assertEqual(list(self.repo.rglob("*.webp")), [])

    def test_failure_is_not_success_and_no_cover(self):
        spec = dict(self.spec, screenshot_status="failed", failure_reason="SYNTHETIC unsupported renderer")
        r = process(self.repo, self.scratch, spec)
        self.assertEqual(r["status"], "failed")
        self.assertEqual(r["compression_status"], "not_attempted")
        self.assertIsNone(r["path"])
        self.assertEqual(list(self.repo.rglob("*.webp")), [])

    def test_unconfirmed_and_evidence_inside_repo_rejected(self):
        with self.assertRaises(ValueError):
            process(self.repo, self.scratch, dict(self.spec, screenshot_status="captured"))
        with self.assertRaises(ValueError):
            process(self.repo, self.repo/"evidence", self.spec)

    def test_target_symlink_escape_rejected(self):
        (self.repo/"apps").symlink_to(self.base/"outside", target_is_directory=True)
        with self.assertRaises(ValueError):
            process(self.repo, self.scratch, self.spec)


if __name__ == "__main__":
    unittest.main(verbosity=2)
