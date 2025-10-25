"use client"

import { useEffect, useRef, useMemo } from "react"
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion"

export function AnimatedPortrait({ alt = "Chukwudi Peter Ofoma" }: { alt?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [10, -10])
  const rotateY = useTransform(x, [-50, 50], [-10, 10])

  // generate a star-like path of offsets in px (randomized seed per mount)
  const { pathX, pathY, duration } = useMemo(() => {
    const points = 9
    const outer = 18 // px
    const inner = 6 // px
    const seed = Math.random() * 1000
    const pxs: number[] = []
    const pys: number[] = []
    for (let i = 0; i < points; i++) {
      const angle = (i * Math.PI * 2) / points + (seed % 1)
      const r = i % 2 === 0 ? outer : inner
      const jitter = (Math.random() - 0.5) * 4
      pxs.push(Math.cos(angle) * (r + jitter))
      pys.push(Math.sin(angle) * (r + jitter))
    }
    // close loop by repeating first
    pxs.push(pxs[0])
    pys.push(pys[0])
    return { pathX: pxs, pathY: pys, duration: 10 + Math.random() * 6 }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const py = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      x.set(px * 20)
      y.set(py * 20)
    }

    el.addEventListener("mousemove", handleMove)
    return () => el.removeEventListener("mousemove", handleMove)
  }, [x, y])

  const shouldReduce = useReducedMotion()

  return (
    // make the portrait fluid: it will size to the parent container's width
    <div ref={ref} className="w-full h-full max-w-full aspect-square">
      {/* outer mover follows a slow star-path */}
      <motion.div
        animate={shouldReduce ? {} : { x: pathX, y: pathY }}
        transition={shouldReduce ? {} : { duration, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full flex items-center justify-center"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="w-full h-full rounded-full overflow-hidden shadow-2xl bg-linear-to-br from-primary/20 to-accent/10 border-2 border-border"
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <img
            src="/image/chudi.png"
            alt={alt}
            className="w-full h-full object-cover object-center"
            draggable={false}
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
