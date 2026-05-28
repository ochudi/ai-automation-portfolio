"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-10 pt-32 pb-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-10">
            <span className="relative inline-flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
            Available for engagements · 2026
          </div>

          <h1 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight">
            Chudi <em className="italic font-serif">Ofoma</em>
          </h1>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl leading-snug text-foreground max-w-2xl">
                I design and build{" "}
                <span className="font-serif italic">AI automation systems</span>{" "}
                that replace repetitive operational work — invoices, leads,
                reports, content.
              </p>
              <p className="mt-5 text-base text-muted-foreground max-w-xl leading-relaxed">
                Full-stack engineer working across LLMs, workflow orchestration,
                and backend systems. Shipped automations that cut processing
                time by 70%+ and saved teams 20+ hours a week.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  View selected work
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 border hairline text-sm font-medium rounded-full hover:bg-muted transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9 lg:pt-3">
              <dl className="grid grid-cols-2 lg:grid-cols-1 gap-y-6 gap-x-6 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground mb-1">
                    Role
                  </dt>
                  <dd>AI Automation Engineer</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground mb-1">
                    Based
                  </dt>
                  <dd>Lagos, Nigeria · Remote-friendly</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground mb-1">
                    Focus
                  </dt>
                  <dd>LLM orchestration, backend systems, workflow automation</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground mb-1">
                    Open to
                  </dt>
                  <dd>Full-time · Founding engineer · Contract</dd>
                </div>
              </dl>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
