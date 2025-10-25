"use client"

import { useState } from "react"

export function ProjectGallery({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!images || images.length === 0) {
    return (
      <div className="w-full rounded bg-muted p-6 text-center">
        <p className="text-sm text-muted-foreground">No screenshots available.</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i)}
            className="overflow-hidden rounded-lg bg-black/5 hover:scale-105 transform transition"
            aria-label={`Open screenshot ${i + 1}`}
          >
            <img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-40 object-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <div className="max-w-[95vw] max-h-[95vh] w-full">
            <div className="relative">
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-2 right-2 z-60 bg-white/90 dark:bg-black/60 text-black dark:text-white rounded-full p-2"
                aria-label="Close image"
              >
                ✕
              </button>

              <img
                src={images[openIndex]}
                alt={`Screenshot ${openIndex + 1}`}
                className="w-full h-[75vh] object-contain bg-black"
              />

              <div className="flex justify-between mt-2 gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenIndex((v) => (v === null ? null : (v - 1 + images.length) % images.length))
                  }}
                  className="px-3 py-1 bg-white/90 dark:bg-black/60 text-black dark:text-white rounded"
                >
                  Prev
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenIndex((v) => (v === null ? null : (v + 1) % images.length))
                  }}
                  className="px-3 py-1 bg-white/90 dark:bg-black/60 text-black dark:text-white rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
