import { getProjectBySlug, projects } from "@/lib/projects"
import { getProjectMedia } from "@/lib/project-media.server"
import { ProjectPlayer } from "@/components/ProjectPlayer"
import { ProjectGallery } from "@/components/ProjectGallery"
import { ProjectDebugClient } from "@/components/ProjectDebugClient"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: Props) {
  // Next may provide params as a Promise in some versions/configs; unwrap safely
  // await params to ensure we have the actual object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resolvedParams = (await (params as any)) as { slug: string }
  const slug = resolvedParams?.slug

  const project = getProjectBySlug(slug)
  const media = getProjectMedia(slug)
  // prefer explicit project.video (external embed) else use first local video found in public/projects/{slug}
  const demoSrc = project?.video || (media && (media as any).videos && (media as any).videos[0]) || ""

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <p className="mt-4 text-sm text-muted-foreground">Requested slug: <code className="bg-black/5 px-2 py-1 rounded">{String(slug)}</code></p>
          <p className="mt-2 text-sm text-muted-foreground">Decoded: <code className="bg-black/5 px-2 py-1 rounded">{slug ? decodeURIComponent(String(slug)) : ""}</code></p>
          <div className="mt-4 text-left">
            <p className="font-semibold mb-2">Available slugs</p>
            <ul className="list-disc pl-5 text-sm">
              {projects.map((p) => (
                <li key={p.slug}>
                  <a href={`/projects/${p.slug}`} className="text-primary underline">
                    {p.slug}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-left text-sm">
            <p className="font-semibold">Server params object</p>
            <pre className="bg-black/5 p-2 rounded">{JSON.stringify(resolvedParams ?? params, null, 2)}</pre>
          </div>

          {/* client debug: show browser URL */}
          <div className="mt-6">
            {/* lazy load client debug to avoid hydration mismatch */}
            <script dangerouslySetInnerHTML={{ __html: "" }} />
            {/* @ts-ignore */}
            <ProjectDebugClient />
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <a href="/" className="text-sm text-muted-foreground underline mb-4 inline-block">
          ← Back
        </a>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p className="leading-relaxed mb-6">{project.content}</p>

            <h3 className="font-semibold mb-2">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((t) => (
                <span key={t} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="font-semibold mb-2">Screenshots</h3>
            <div className="mb-6">
              {/* ProjectGallery is a client component that handles thumbnails and modal */}
              <ProjectGallery images={media.images} />
            </div>

            {media.docs && media.docs.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Documentation</h3>
                <ul className="list-disc pl-5">
                  {media.docs.map((d) => (
                    <li key={d}>
                      <a href={d} target="_blank" rel="noreferrer" className="text-primary underline">
                        {d.split("/").pop()}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Demo</h3>
            <ProjectPlayer src={demoSrc} title={project.title} />

            {demoSrc ? (
              <p className="text-sm text-muted-foreground mt-3">You can load the demo above or open it in a new tab.</p>
            ) : (
              <p className="text-sm text-muted-foreground mt-3">No video demo provided. Use the screenshots and documentation for reference.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
