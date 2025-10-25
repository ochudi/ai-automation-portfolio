"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AboutItem {
  title: string
  content: string
}

const aboutItems: AboutItem[] = [
  {
    title: "Personal Motivation",
    content:
      `I’m excited by how AI automation merges creativity and engineering to eliminate inefficiency. I’m driven by the challenge of transforming manual or repetitive processes into self-running systems that save time, reduce errors, and create measurable value. Building automations that learn, adapt, and deliver consistent impact is what motivates me most.`,
  },
  {
    title: "Problem-Solving Approach",
    content:
      `In a previous project, Airtable’s query limits made campaign domain-matching unreliable. I built a custom JavaScript logic for accurate matching, introduced caching and checkpoint recovery for stability, and optimized execution time by over 70%. I focus on designing solutions that are resilient, efficient, and scalable, not just functional.`,
  },
  {
    title: "Career Goals",
    content:
      `In the next 2–3 years, I aim to advance as an AI Automation Architect, building robust, intelligent systems that merge data science, backend development, and LLM integration. I want to deepen my expertise in AI orchestration tools like n8n and LangChain, contribute to research, and lead projects that redefine productivity through intelligent automation.`,
  },
]

export function AboutSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-center text-muted-foreground mb-6 text-lg">
          I’m Chukwudi Peter Ofoma, a full-stack developer and researcher specializing in AI-driven automation systems. I design intelligent workflows that connect APIs, LLMs, and backend logic to streamline complex tasks, enhance decision-making, and scale operations efficiently.
        </p>
        <p className="text-center text-muted-foreground mb-12 text-sm">{String.fromCharCode(0x2500).repeat(20)}</p>

        <div className="space-y-4">
          {aboutItems.map((item, index) => (
            <div key={index} className="glass rounded-lg overflow-hidden transition-all duration-300">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-left">{item.title}</h3>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-4 border-t border-border/50 animate-fade-in-up">
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
