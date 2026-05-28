"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const facts = [
  { label: "Languages", value: "TypeScript · Python · Rust · Java" },
  { label: "Automation", value: "Make · n8n · Apify · LLM orchestration" },
  { label: "Backend", value: "Node · APIs · OCR · ETL pipelines" },
  { label: "Workflow", value: "OpenAI · LangChain · Airtable · Sheets" },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 lg:px-10 py-24 sm:py-32 bg-muted">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §02 — About
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              I&apos;m a full-stack engineer building <em className="italic">quiet,</em>{" "}
              reliable AI systems — the kind people don&apos;t notice until they
              stop working.
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-md border hairline bg-background">
              <Image
                src="/image/chudi.png"
                alt="Chukwudi Peter Ofoma"
                fill
                sizes="(min-width: 1024px) 320px, 80vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Chukwudi Peter Ofoma
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-lg sm:text-xl leading-relaxed">
              I design and ship automations that connect APIs, LLMs, and
              backend logic into systems that run themselves. My work tends
              to live where engineering, operations, and product meet — turning
              brittle, manual processes into resilient pipelines.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              I care about reliability, observability, and the small details
              that decide whether a system survives its first month in
              production. I&apos;ve led projects that cut execution time by
              70%+, saved teams 20+ hours a week, and 3×&apos;d output
              throughput — but the parts I&apos;m proudest of are the ones no
              one ever has to think about.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Outside of building, I&apos;m researching AI orchestration with
              tools like n8n and LangChain, and writing about what works (and
              what doesn&apos;t) when LLMs meet production constraints.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-6 mt-6 border-t hairline">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                    {f.label}
                  </dt>
                  <dd className="text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
