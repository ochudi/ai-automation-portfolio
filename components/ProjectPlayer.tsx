"use client"

import { useState } from "react"

export function ProjectPlayer({ src, title }: { src: string; title: string }) {
  const [mounted, setMounted] = useState(false)

  if (!src) return null

  const isVideoFile = (s: string) => /\.(mp4|webm|ogg|mov)(\?|$)/i.test(s) || s.startsWith("/")

  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      {!mounted ? (
        <div className="p-6 flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="font-semibold">Video demo available</p>
            <p className="text-sm text-muted-foreground">Click to load the video (lazy)</p>
          </div>
          <button
            onClick={() => setMounted(true)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            aria-label={`Load video for ${title}`}
          >
            Load Video
          </button>
        </div>
      ) : (
        <div className="aspect-video w-full">
          {isVideoFile(src) ? (
            <video
              src={src}
              controls
              className="w-full h-full bg-black"
            />
          ) : (
            <iframe
              src={src}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
            />
          )}
        </div>
      )}
    </div>
  )
}
