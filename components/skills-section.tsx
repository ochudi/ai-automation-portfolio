"use client"

import { useEffect, useRef } from "react"

interface Skill {
  name: string
  category: string
}

const skills: Skill[] = [
  { name: "Make", category: "Automation" },
  { name: "n8n", category: "Automation" },
  { name: "Apify", category: "Automation" },
  { name: "LLMs", category: "Automation" },

  { name: "Pencil", category: "Software" },
  { name: "Notion", category: "Software" },
  { name: "Figma", category: "Software" },
  { name: "Framer", category: "Software" },

  { name: "Python", category: "Programming" },
  { name: "TypeScript", category: "Programming" },
  { name: "Rust", category: "Programming" },
  { name: "Java", category: "Programming" },
]

const categories = ["Automation", "Software", "Programming"]

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const items = container.querySelectorAll(".skill-item")
      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const element = item as HTMLElement
        element.style.setProperty("--mouse-x", `${x}px`)
        element.style.setProperty("--mouse-y", `${y}px`)
      })
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Skills & Expertise</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Technologies and tools I use to build intelligent automation solutions
        </p>

        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item glass rounded-lg p-4 text-center hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-110 cursor-pointer group"
            >
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{skill.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
