import { Card } from '@/registry/bases/radix/dusk/ui/card'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { ArrowUp, ChevronDown, CloudDownload, HardDriveDownload, Mic2, MonitorDown, Plus } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                    <span className="text-foreground">Context before every reply.</span> <br /> Grounded in real account history.
                </h2>
                <div className="**:data-[slot=card]:bg-background mt-8 grid gap-x-3 gap-y-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                    <div className="row-span-2 grid grid-cols-subgrid gap-4">
                        <Card className="aspect-9/12 relative overflow-hidden">
                            <AIInputIllustration />
                            <Image
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiMyMmQzZWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwOTA5MGIiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icyI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIyZDNlZSIgc3RvcC1vcGFjaXR5PSIuMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iIzA5MDkwYiIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MjAiIHJ4PSI2MDAiIHJ5PSI1MDAiIGZpbGw9InVybCgjZykiIG9wYWNpdHk9Ii42Ii8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI3MpIiBzdHJva2Utd2lkdGg9IjIiPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSI4MCIgcnk9IjcwIiB0cmFuc2Zvcm09InJvdGF0ZSgwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjEyNSIgcnk9IjkyIiB0cmFuc2Zvcm09InJvdGF0ZSg1IDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjE3MCIgcnk9IjExNCIgdHJhbnNmb3JtPSJyb3RhdGUoMTAgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iMjE1IiByeT0iMTM2IiB0cmFuc2Zvcm09InJvdGF0ZSgxNSA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSIyNjAiIHJ5PSIxNTgiIHRyYW5zZm9ybT0icm90YXRlKDIwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjMwNSIgcnk9IjE4MCIgdHJhbnNmb3JtPSJyb3RhdGUoMjUgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iMzUwIiByeT0iMjAyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSIzOTUiIHJ5PSIyMjQiIHRyYW5zZm9ybT0icm90YXRlKDM1IDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjQ0MCIgcnk9IjI0NiIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iNDg1IiByeT0iMjY4IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSI1MzAiIHJ5PSIyOTAiIHRyYW5zZm9ybT0icm90YXRlKDUwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjU3NSIgcnk9IjMxMiIgdHJhbnNmb3JtPSJyb3RhdGUoNTUgNjAwIDQxMCkiLz48L2c+PC9zdmc+"
                                alt="abstract background"
                                width={670}
                                height={670}
                                className="absolute inset-0 size-full object-cover"
                            />
                        </Card>

                        <p className="text-muted-foreground text-balance">
                            <span className="text-foreground">Seamless handoffs. </span> Ownership changes without resetting the relationship.
                        </p>
                    </div>

                    <div className="row-span-2 grid grid-cols-subgrid gap-4">
                        <Card className="aspect-9/12 bg-zinc-200! relative overflow-hidden">
                            <DynamicIslandIllustration />
                        </Card>

                        <p className="text-muted-foreground text-balance">
                            <span className="text-foreground">Proactive alerts. </span> Surface renewals and quiet accounts before they slip.
                        </p>
                    </div>

                    <div className="row-span-2 grid grid-cols-subgrid gap-4">
                        <Card className="aspect-9/12 relative overflow-hidden">
                            <DownloadIllustration />

                            <img
                                alt="Static illustrative replacement; original video not included"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiM2MzY2ZjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwOTA5MGIiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icyI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzYzNjZmMSIgc3RvcC1vcGFjaXR5PSIuMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iIzA5MDkwYiIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MjAiIHJ4PSI2MDAiIHJ5PSI1MDAiIGZpbGw9InVybCgjZykiIG9wYWNpdHk9Ii42Ii8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI3MpIiBzdHJva2Utd2lkdGg9IjIiPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSI4MCIgcnk9IjcwIiB0cmFuc2Zvcm09InJvdGF0ZSgwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjEyNSIgcnk9IjkyIiB0cmFuc2Zvcm09InJvdGF0ZSg1IDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjE3MCIgcnk9IjExNCIgdHJhbnNmb3JtPSJyb3RhdGUoMTAgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iMjE1IiByeT0iMTM2IiB0cmFuc2Zvcm09InJvdGF0ZSgxNSA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSIyNjAiIHJ5PSIxNTgiIHRyYW5zZm9ybT0icm90YXRlKDIwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjMwNSIgcnk9IjE4MCIgdHJhbnNmb3JtPSJyb3RhdGUoMjUgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iMzUwIiByeT0iMjAyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSIzOTUiIHJ5PSIyMjQiIHRyYW5zZm9ybT0icm90YXRlKDM1IDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjQ0MCIgcnk9IjI0NiIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iNDg1IiByeT0iMjY4IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSI1MzAiIHJ5PSIyOTAiIHRyYW5zZm9ybT0icm90YXRlKDUwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjU3NSIgcnk9IjMxMiIgdHJhbnNmb3JtPSJyb3RhdGUoNTUgNjAwIDQxMCkiLz48L2c+PC9zdmc+"
                                className="absolute inset-0 size-full object-cover"
                                width="2700"
                                height="1440"
                            />
                        </Card>

                        <p className="text-muted-foreground text-balance">
                            <span className="text-foreground">Shared timeline. </span> Sales, success, and support work from one account view.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function DownloadIllustration() {
    return (
        <div className="z-1 absolute inset-0 m-auto size-fit scale-95">
            <Button
                variant="secondary"
                asChild
                className="bg-background/25 inset-ring inset-ring-foreground/25 ml-1 backdrop-blur"
                size="sm"
            >
                <div>
                    <HardDriveDownload className="opacity-75" />
                    <span className="border-r pr-2">Download</span>
                    <ChevronDown className="opacity-50" />
                </div>
            </Button>

            <div className="mt-3 min-w-52 rounded-2xl bg-white p-1 shadow-xl shadow-black/25 ring ring-black/10 *:cursor-pointer">
                <div className="peer flex gap-2 rounded-xl px-3 py-1.5 hover:bg-black/5">
                    <MonitorDown className="size-4 translate-y-0.5 text-black" />
                    <div className="space-y-0.5">
                        <div className="text-xs font-medium text-black">Computer</div>
                        <div className="text-xs text-black/50">16.1MB left</div>
                    </div>
                </div>

                <div className="not-peer-hover:bg-black/5 flex gap-2 rounded-xl px-3 py-1.5">
                    <CloudDownload className="size-4 translate-y-0.5 text-black" />
                    <div className="space-y-0.5">
                        <div className="text-xs font-medium text-black">Cloud</div>
                        <div className="text-xs text-black/50">Unlimited</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AIInputIllustration() {
    return (
        <div
            aria-hidden
            className="z-1 absolute inset-8 m-auto h-fit scale-95"
        >
            <div className="bg-card ring-foreground/15 mt-auto h-fit rounded-3xl p-3 shadow-xl shadow-black/25 ring">
                <div className="text-muted-foreground p-2 pb-3 text-sm">Ask Tailark what you need...</div>
                <div className="flex justify-between gap-3">
                    <div className="flex items-center gap-1">
                        <div className="hover:bg-muted flex size-7 cursor-pointer rounded-full *:m-auto *:size-4">
                            <Plus />
                        </div>
                        <div className="hover:bg-muted flex size-7 cursor-pointer rounded-full *:m-auto *:size-4">
                            <Mic2 />
                        </div>
                    </div>

                    <div className="bg-foreground text-background flex size-7 cursor-pointer rounded-full *:m-auto *:size-4 hover:brightness-110">
                        <ArrowUp />
                    </div>
                </div>
            </div>
        </div>
    )
}

function DynamicIslandIllustration() {
    return (
        <div
            aria-hidden
            className="z-1 bg-black/2.5 absolute inset-x-8 bottom-0 mx-auto mt-auto h-2/3 w-10/12 origin-bottom scale-95 rounded-t-[4rem] border border-black/5 px-4 pt-4"
        >
            <div className="h-full overflow-hidden rounded-t-[3rem] bg-white p-3 shadow-lg shadow-black/15 ring ring-black/10">
                <div className="relative">
                    <Image
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiM2MzY2ZjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwOTA5MGIiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icyI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzYzNjZmMSIgc3RvcC1vcGFjaXR5PSIuMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iIzA5MDkwYiIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MjAiIHJ4PSI2MDAiIHJ5PSI1MDAiIGZpbGw9InVybCgjZykiIG9wYWNpdHk9Ii42Ii8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI3MpIiBzdHJva2Utd2lkdGg9IjIiPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSI4MCIgcnk9IjcwIiB0cmFuc2Zvcm09InJvdGF0ZSgwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjEyNSIgcnk9IjkyIiB0cmFuc2Zvcm09InJvdGF0ZSg1IDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjE3MCIgcnk9IjExNCIgdHJhbnNmb3JtPSJyb3RhdGUoMTAgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iMjE1IiByeT0iMTM2IiB0cmFuc2Zvcm09InJvdGF0ZSgxNSA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSIyNjAiIHJ5PSIxNTgiIHRyYW5zZm9ybT0icm90YXRlKDIwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjMwNSIgcnk9IjE4MCIgdHJhbnNmb3JtPSJyb3RhdGUoMjUgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iMzUwIiByeT0iMjAyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSIzOTUiIHJ5PSIyMjQiIHRyYW5zZm9ybT0icm90YXRlKDM1IDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjQ0MCIgcnk9IjI0NiIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iNDg1IiByeT0iMjY4IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSI1MzAiIHJ5PSIyOTAiIHRyYW5zZm9ybT0icm90YXRlKDUwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjU3NSIgcnk9IjMxMiIgdHJhbnNmb3JtPSJyb3RhdGUoNTUgNjAwIDQxMCkiLz48L2c+PC9zdmc+"
                        alt="Théo Balick"
                        width={500}
                        height={500}
                        className="absolute inset-0 top-0 size-full object-cover opacity-45 blur-xl contrast-200"
                    />
                    <div className="shadow-black/6.5 relative rounded-[2.25rem] bg-white p-2 shadow-xl ring ring-black/10">
                        <div className="flex gap-2">
                            <div className="size-18 relative overflow-hidden rounded-[1.75rem] shadow-md before:absolute before:inset-0 before:rounded-[1.75rem] before:border before:border-black/20">
                                <Image
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEyMDAgODAwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiM2MzY2ZjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwOTA5MGIiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icyI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzYzNjZmMSIgc3RvcC1vcGFjaXR5PSIuMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iIzA5MDkwYiIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MjAiIHJ4PSI2MDAiIHJ5PSI1MDAiIGZpbGw9InVybCgjZykiIG9wYWNpdHk9Ii42Ii8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI3MpIiBzdHJva2Utd2lkdGg9IjIiPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSI4MCIgcnk9IjcwIiB0cmFuc2Zvcm09InJvdGF0ZSgwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjEyNSIgcnk9IjkyIiB0cmFuc2Zvcm09InJvdGF0ZSg1IDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjE3MCIgcnk9IjExNCIgdHJhbnNmb3JtPSJyb3RhdGUoMTAgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iMjE1IiByeT0iMTM2IiB0cmFuc2Zvcm09InJvdGF0ZSgxNSA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSIyNjAiIHJ5PSIxNTgiIHRyYW5zZm9ybT0icm90YXRlKDIwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjMwNSIgcnk9IjE4MCIgdHJhbnNmb3JtPSJyb3RhdGUoMjUgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iMzUwIiByeT0iMjAyIiB0cmFuc2Zvcm09InJvdGF0ZSgzMCA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSIzOTUiIHJ5PSIyMjQiIHRyYW5zZm9ybT0icm90YXRlKDM1IDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjQ0MCIgcnk9IjI0NiIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNjAwIDQxMCkiLz48ZWxsaXBzZSBjeD0iNjAwIiBjeT0iNDEwIiByeD0iNDg1IiByeT0iMjY4IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2MDAgNDEwKSIvPjxlbGxpcHNlIGN4PSI2MDAiIGN5PSI0MTAiIHJ4PSI1MzAiIHJ5PSIyOTAiIHRyYW5zZm9ybT0icm90YXRlKDUwIDYwMCA0MTApIi8+PGVsbGlwc2UgY3g9IjYwMCIgY3k9IjQxMCIgcng9IjU3NSIgcnk9IjMxMiIgdHJhbnNmb3JtPSJyb3RhdGUoNTUgNjAwIDQxMCkiLz48L2c+PC9zdmc+"
                                    alt="Théo Balick"
                                    width={136}
                                    height={136}
                                />
                            </div>
                            <div className="py-1 pr-4">
                                <div className="text-sm font-medium text-black">Théo Balick</div>
                                <div className="mt-1.5 flex items-center gap-3">
                                    <div>
                                        <div className="text-xs text-black/50">Expenses</div>
                                        <div className="mt-0.5 text-sm font-semibold text-black">$32.65k</div>
                                    </div>
                                    <div className="bg-border h-7 w-px" />
                                    <div>
                                        <div className="text-xs text-black/50">Income</div>
                                        <div className="mt-0.5 text-sm font-semibold text-black">$2.65k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
