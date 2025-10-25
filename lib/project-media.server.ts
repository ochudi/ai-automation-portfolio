// Server-only helper: scan public/projects/{slug} for images and docs
import fs from "fs"
import path from "path"

export function getProjectMedia(slug: string) {
  try {
    const projectDir = path.join(process.cwd(), "public", "projects", slug)
    const demoDir = path.join(process.cwd(), "public", "demo", slug)

    const images: string[] = []
    const videos: string[] = []
    const docs: string[] = []

    // helper to scan a directory and push files with the given urlPrefix
    function scanDir(dirPath: string, urlPrefix: string) {
      if (!fs.existsSync(dirPath)) return
      const entries = fs.readdirSync(dirPath)
      entries
        .filter((f) => f.match(/\.(jpe?g|png|webp|avif|gif)$/i))
        .sort()
        .forEach((f) => images.push(`/${urlPrefix}/${slug}/${f}`))
      entries
        .filter((f) => f.match(/\.(mp4|webm|ogg|mov)$/i))
        .sort()
        .forEach((f) => videos.push(`/${urlPrefix}/${slug}/${f}`))
      entries
        .filter((f) => f.match(/\.(pdf|html|md|txt)$/i))
        .sort()
        .forEach((f) => docs.push(`/${urlPrefix}/${slug}/${f}`))
    }

    // prefer project assets but also include demo assets (useful when demos are stored under /public/demo)
    scanDir(projectDir, "projects")
    scanDir(demoDir, "demo")

    return { images, docs, videos }
  } catch (e) {
    return { images: [], docs: [], videos: [] }
  }
}
