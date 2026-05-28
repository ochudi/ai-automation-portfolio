"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"

export function ProjectsSection() {
  return (
    <section id="work" className="px-6 lg:px-10 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §01 — Selected Work
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              A small set of systems I&apos;ve shipped — each replacing manual
              operational work with something{" "}
              <em className="italic">self-running</em>.
            </h2>
          </div>
        </header>

        <ol className="divide-y hairline border-t hairline">
          {projects.map((project, i) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-12 gap-4 sm:gap-6 py-8 sm:py-10 items-baseline transition-colors hover:bg-muted/40 -mx-3 px-3 rounded-md"
              >
                <div className="col-span-12 sm:col-span-1 font-mono text-sm text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="col-span-12 sm:col-span-5">
                  <h3 className="font-serif text-2xl sm:text-3xl leading-tight tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

                <div className="col-span-7 sm:col-span-3">
                  {project.metric ? (
                    <p className="font-serif italic text-xl sm:text-2xl">
                      {project.metric}
                    </p>
                  ) : (
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Case study
                    </p>
                  )}
                </div>

                <div className="col-span-4 sm:col-span-2 flex flex-wrap gap-1.5 justify-start sm:justify-start">
                  {project.tools.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border hairline rounded-full text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
