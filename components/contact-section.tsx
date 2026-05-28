"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const links = [
  { label: "Email", href: "mailto:ofoma.chudi@gmail.com", value: "ofoma.chudi@gmail.com", isEmail: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ochudi/", value: "in/ochudi" },
  { label: "GitHub", href: "https://github.com/ochudi", value: "@ochudi" },
  { label: "X", href: "https://x.com/mrofoma", value: "@mrofoma" },
]

export function ContactSection() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [subject, setSubject] = useState("Inquiry from website")
  const [message, setMessage] = useState(
    "Hi Chudi,\n\nI'd like to discuss a project opportunity. Please let me know a good time to connect.\n\nThanks,"
  )

  function openDialog(e: React.MouseEvent) {
    e.preventDefault()
    dialogRef.current?.showModal()
  }

  function closeDialog() {
    dialogRef.current?.close()
  }

  function handleConfirm() {
    const mailto = `mailto:ofoma.chudi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`
    closeDialog()
    setTimeout(() => {
      window.location.href = mailto
    }, 160)
  }

  return (
    <section id="contact" className="px-6 lg:px-10 py-24 sm:py-32 bg-muted">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              §04 — Contact
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              If you&apos;re building something where automation is the{" "}
              <em className="italic">edge</em> — let&apos;s talk.
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.a
            href="mailto:ofoma.chudi@gmail.com"
            onClick={openDialog}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 group block"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Write to me
            </p>
            <div className="font-serif text-[clamp(2rem,6vw,4.5rem)] leading-none tracking-tight underline decoration-1 underline-offset-[0.18em] decoration-border group-hover:decoration-foreground transition-colors break-all">
              ofoma.chudi
              <span className="text-muted-foreground">@gmail.com</span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground inline-flex items-center gap-1.5">
              Click to compose
              <ArrowUpRight size={14} />
            </p>
          </motion.a>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 lg:border-l hairline lg:pl-10 space-y-5"
          >
            {links.slice(1).map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-1 border-b hairline"
                >
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {l.label}
                    </span>
                    <span className="font-serif text-xl">{l.value}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}

            <li className="pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Response time
              </p>
              <p className="text-sm mt-1">Usually within 24 hours · GMT+1</p>
            </li>
          </motion.ul>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="rounded-md p-6 bg-background text-foreground backdrop:bg-black/60 max-w-md w-full m-auto border hairline shadow-xl"
      >
        <h3 className="font-serif text-2xl">Send an email</h3>
        <p className="text-sm text-muted-foreground mt-1">
          You&apos;ll be redirected to your mail client. Confirm to continue.
        </p>

        <div className="mt-5 space-y-3">
          <label className="block text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">
            Subject
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-md border hairline px-3 py-2 bg-background focus:outline-none focus:border-foreground transition-colors"
          />

          <label className="block text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full rounded-md border hairline px-3 py-2 bg-background focus:outline-none focus:border-foreground transition-colors"
          />
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={closeDialog}
            className="px-4 py-2 text-sm rounded-full border hairline hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="px-4 py-2 text-sm rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Open mail client
          </button>
        </div>
      </dialog>
    </section>
  )
}
