import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { getProjectBySlug, projects } from "@/lib/projects"
import { getProjectMedia } from "@/lib/project-media.server"
import { ProjectPlayer } from "@/components/ProjectPlayer"
import { ProjectGallery } from "@/components/ProjectGallery"

interface Props {
  params: Promise<{ slug: string }> | { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await Promise.resolve(params as { slug: string })
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const media = getProjectMedia(slug)
  const demoSrc =
    project.video ||
    (media && (media as { videos?: string[] }).videos?.[0]) ||
    ""

  return (
    <main className="min-h-screen px-6 lg:px-10 py-12 sm:py-20">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Back to work
        </Link>

        <header className="border-b hairline pb-10 mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
            Case study {project.year ? `· ${project.year}` : ""}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            {project.title}
          </h1>
          {project.metric && (
            <p className="mt-8 font-serif italic text-2xl sm:text-3xl text-muted-foreground">
              {project.metric}
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8 space-y-10">
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                Overview
              </h2>
              <p className="text-lg leading-relaxed">{project.description}</p>
              {project.content && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.content}
                </p>
              )}
            </section>

            {media.images && media.images.length > 0 && (
              <section>
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  Screenshots
                </h2>
                <ProjectGallery images={media.images} />
              </section>
            )}

            {media.docs && media.docs.length > 0 && (
              <section>
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  Documentation
                </h2>
                <ul className="space-y-2">
                  {media.docs.map((d) => (
                    <li key={d}>
                      <a
                        href={d}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                      >
                        {d.split("/").pop()}
                        <ArrowUpRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-8 lg:border-l hairline lg:pl-10">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Stack
              </h2>
              <ul className="flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border hairline rounded-full text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {demoSrc && (
              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Demo
                </h2>
                <ProjectPlayer src={demoSrc} title={project.title} />
              </div>
            )}
          </aside>
        </div>

        <div className="mt-20 pt-10 border-t hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Want to discuss a similar system?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Get in touch
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </article>
    </main>
  )
}
