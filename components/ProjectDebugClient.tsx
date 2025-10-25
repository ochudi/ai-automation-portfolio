"use client"

import { useEffect, useState } from "react"

export function ProjectDebugClient() {
  const [path, setPath] = useState<string | null>(null)

  useEffect(() => {
    setPath(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="mt-4 text-sm">
      <p className="font-medium">Client-side URL</p>
      <pre className="bg-black/5 p-2 rounded">{path}</pre>
    </div>
  )
}
