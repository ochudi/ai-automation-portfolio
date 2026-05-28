"use client"

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ochudi/" },
  { label: "GitHub", href: "https://github.com/ochudi" },
  { label: "X", href: "https://x.com/mrofoma" },
  { label: "Email", href: "mailto:ofoma.chudi@gmail.com" },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 lg:px-10 py-12 border-t hairline">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-lg">Chudi Ofoma</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
            © {year} · Lagos, Nigeria
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
