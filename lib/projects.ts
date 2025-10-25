export interface Project {
  slug: string
  title: string
  description: string
  tools: string[]
  video?: string // external video demo (loom or similar)
  content?: string
}

export const projects: Project[] = [
  {
    slug: "invoice-inbox-automation",
    title: "Invoice Inbox Automation",
    description:
      "Automated invoice processing system that extracts data, validates information, and routes to appropriate departments. Reduced processing time by 85%.",
    tools: ["Python", "OCR", "API Integration", "Airtable"],
    video: "",
    content:
      "A full-stack automation pipeline that ingests invoices, runs OCR, normalizes line items, validates totals, and routes for approval. Built with reliability and observability in mind.",
  },
  {
    slug: "reporting-dashboard-automation",
    title: "Reporting & Dashboard Automation",
    description:
      "Real-time dashboard that aggregates data from multiple sources and generates automated reports. Saves 20+ hours per week of manual reporting.",
    tools: ["React", "Node.js", "ETL", "Grafana"],
    video: "",
    content:
      "Centralized data pipeline with scheduled jobs, near-real-time ETL, and dynamic dashboards. Focus on data fidelity, caching, and alerting for SLA-sensitive reports.",
  },
  {
    slug: "proposal-generation-delivery",
    title: "Proposal Generation & Delivery",
    description:
      "AI-powered system that generates customized proposals based on client requirements and automatically delivers them. Increased proposal volume by 3x.",
    tools: ["OpenAI API", "DocGen", "Email Automation", "CRM"],
    video: "",
    content:
      "A templating and personalization engine that combines structured client data with LLM output, performs quality checks, and automates delivery and tracking.",
  },
  {
    slug: "content-generation-publishing",
    title: "Content Generation & Publishing",
    description:
      "Automated content creation and publishing pipeline that generates, reviews, and schedules content across multiple platforms.",
    tools: ["OpenAI API", "CMS API", "Scheduler", "Analytics"],
    video: "",
    content:
      "End-to-end system: ideation -> generation -> review -> scheduling -> publishing. Includes moderation checks and analytic hooks for performance tuning.",
  },
  {
    slug: "lead-generation-outreach",
    title: "Lead Generation & Outreach",
    description:
      "Intelligent lead generation system with automated personalized outreach. Improved conversion rates by 45% through smart targeting.",
    tools: ["Web Scraping", "AI Personalization", "Email Automation", "CRM"],
    video: "",
    content:
      "Pipeline that discovers targets, enriches profiles, scores leads, and runs multi-channel outreach campaigns with personalization and throttling controls.",
  },
]

export function getProjectBySlug(slug: string) {
  if (!slug) return undefined
  const normalize = (s: string) => decodeURIComponent(s).trim().replace(/^\/+|\/+$/g, "")
  const key = normalize(slug)
  return projects.find((p) => p.slug === key || normalize(p.slug) === key)
}

