// Offline text-story edition: external media dispatch is not provided.
// Modified from TimelineJS 3.9.13, MPL-2.0. Original platform dispatch removed.
export function lookupMediaType(media) {
  if (media && media.url) throw new Error('This local text story does not accept media URLs');
  return false;
}
