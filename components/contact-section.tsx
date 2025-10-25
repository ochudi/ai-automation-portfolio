"use client"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog"
import { Button } from "./ui/button"

export function ContactSection() {
  const [open, setOpen] = useState(false)
  const [subject, setSubject] = useState("Inquiry from website")
  const [message, setMessage] = useState(
    "Hi Chudi,\n\nI'd like to discuss a project opportunity. Please let me know a good time to connect.\n\nThanks,"
  )

  function handleConfirm() {
    const mailto = `mailto:ofoma.chudi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`
    // close dialog then open mail client
    setOpen(false)
    setTimeout(() => {
      window.location.href = mailto
    }, 160)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Research & Contact</h2>
        <p className="text-center text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
          If you'd like to explore my work or reach out, the links below provide direct access to my code,
          professional profile, and email. I'm open to conversations about automation, product, and engineering.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.36 }}
          className="glass rounded-lg p-8"
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="https://github.com/ochudi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              className="group rounded-lg p-5 flex flex-col items-start gap-3 transition-all duration-300 transform bg-background/50 border border-border hover:scale-105 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-muted/10 text-foreground group-hover:text-primary transition-colors">
                <Github />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">GitHub</h3>
                <p className="text-sm text-muted-foreground">Browse projects, code samples, and automation repos.</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ochudi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="group rounded-lg p-5 flex flex-col items-start gap-3 transition-all duration-300 transform bg-background/50 border border-border hover:scale-105 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-muted/10 text-foreground group-hover:text-primary transition-colors">
                <Linkedin />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Professional profile, case studies, and recommendations.</p>
              </div>
            </a>

            {/* Email opens a themed confirmation modal instead of default alert */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <a
                  href="#"
                  aria-label="Send email to Chudi"
                  className="group rounded-lg p-5 flex flex-col items-start gap-3 transition-all duration-300 transform bg-background/50 border border-border hover:scale-105 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-muted/10 text-foreground group-hover:text-primary transition-colors">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Email</h3>
                    <p className="text-sm text-muted-foreground">ofoma.chudi@gmail.com — for direct enquiries and collaborations.</p>
                  </div>
                </a>
              </DialogTrigger>

              <DialogContent>
                <DialogTitle>Send an email</DialogTitle>
                <DialogDescription>
                  You'll be redirected to your mail client to finish and send the message. Confirm to continue.
                </DialogDescription>

                <div className="mt-4 space-y-3">
                  <label className="block text-sm font-medium">Subject</label>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 bg-background"
                  />

                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full rounded-md border px-3 py-2 bg-background"
                  />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button onClick={handleConfirm}>Confirm & Open Mail</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">I prefer initial conversations over email or LinkedIn messages. For technical deep-dives, GitHub
          contains code samples and documentation.</p>
        </motion.div>
      </div>
    </section>
  )
}
