"use client"

import { motion } from "framer-motion"

interface Group {
  label: string
  items: string[]
}

const groups: Group[] = [
  {
    label: "Automation",
    items: ["Make", "n8n", "Apify", "LangChain", "OpenAI", "Telegram bots"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Rust", "Java", "SQL"],
  },
  {
    label: "Backend",
    items: ["Node.js", "REST / Webhooks", "OCR", "ETL", "PDF.co", "Sheets API"],
  },
  {
    label: "Data & Storage",
    items: ["Airtable", "PostgreSQL", "Notion", "Google Workspace"],
  },
  {
    label: "Design & Product",
    items: ["Figma", "Framer", "Notion", "Pencil"],
  },
]

export function SkillsSection() {
  return (
    <section id="stack" className="px-6 lg:px-10 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §03 — Stack
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              The tools I reach for when shipping{" "}
              <em className="italic">production</em> automations.
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground pb-3 border-b hairline mb-4">
                {g.label}
              </h3>
              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-base sm:text-lg tracking-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
