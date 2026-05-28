"use client"

import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectGallery({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null)
      if (e.key === "ArrowLeft")
        setOpenIndex((v) => (v === null ? null : (v - 1 + images.length) % images.length))
      if (e.key === "ArrowRight")
        setOpenIndex((v) => (v === null ? null : (v + 1) % images.length))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [openIndex, images.length])

  if (!images || images.length === 0) {
    return (
      <div className="w-full border hairline rounded-md p-8 text-center">
        <p className="text-sm text-muted-foreground">No screenshots available.</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i)}
            className="group overflow-hidden rounded-md border hairline bg-muted aspect-4/3 focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
            aria-label={`Open screenshot ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setOpenIndex((v) =>
                v === null ? null : (v - 1 + images.length) % images.length
              )
            }}
            className="absolute left-4 sm:left-8 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setOpenIndex((v) => (v === null ? null : (v + 1) % images.length))
            }}
            className="absolute right-4 sm:right-8 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[openIndex]}
            alt={`Screenshot ${openIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
