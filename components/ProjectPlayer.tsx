"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function ProjectPlayer({ src, title }: { src: string; title: string }) {
  const [mounted, setMounted] = useState(false)

  if (!src) return null

  const isVideoFile = (s: string) =>
    /\.(mp4|webm|ogg|mov)(\?|$)/i.test(s) || s.startsWith("/")

  return (
    <div className="w-full rounded-md overflow-hidden border hairline bg-muted">
      {!mounted ? (
        <button
          type="button"
          onClick={() => setMounted(true)}
          aria-label={`Load video for ${title}`}
          className="w-full aspect-video flex flex-col items-center justify-center gap-3 hover:bg-muted/70 transition-colors"
        >
          <div className="w-12 h-12 rounded-full border hairline flex items-center justify-center">
            <Play size={18} />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Load demo
          </span>
        </button>
      ) : (
        <div className="aspect-video w-full">
          {isVideoFile(src) ? (
            <video src={src} controls className="w-full h-full bg-black" />
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
