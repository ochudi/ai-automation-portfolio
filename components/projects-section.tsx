"use client"

import Link from "next/link"
import { ExternalLink, Play } from "lucide-react"

import { projects } from "@/lib/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Showcasing automation solutions that drive real business impact
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              aria-label={`Open project ${project.title}`}
              className="block"
            >
              <div className="glass rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <span className="inline-flex items-center gap-2 text-primary transition-colors font-semibold">
                    Learn More
                    <ExternalLink size={16} />
                  </span>
                  {project.video && (
                    <a
                      href={project.video}
                      rel="noopener noreferrer"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Open video demo for ${project.title}`}
                      className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors font-semibold"
                    >
                      <Play size={16} />
                      Video
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
