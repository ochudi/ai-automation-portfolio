export interface Project {
  slug: string
  title: string
  /** One-line outcome shown on the work index */
  outcome: string
  /** Headline metric, e.g. "85% faster" */
  metric?: string
  description: string
  tools: string[]
  video?: string
  content?: string
  year?: string
}

export const projects: Project[] = [
  {
    slug: "invoice-inbox-automation",
    title: "Invoice Inbox Automation",
    outcome: "End-to-end pipeline that ingests, normalises and routes invoices.",
    metric: "85% faster processing",
    description:
      "Automated invoice processing system that extracts data, validates information, and routes to appropriate departments.",
    tools: ["Make", "OCR", "PDF.co", "OpenAI", "Sheets API", "Gmail API"],
    year: "2025",
    content:
      "A full-stack automation pipeline that ingests invoices, runs OCR, normalises line items, validates totals, and routes for approval. Built with reliability and observability in mind.",
  },
  {
    slug: "reporting-dashboard-automation",
    title: "Reporting & Dashboard Automation",
    outcome: "Centralised data pipeline with near real-time ETL and alerting.",
    metric: "20+ hrs/week saved",
    description:
      "Real-time dashboard that aggregates data from multiple sources and generates automated reports.",
    tools: ["Sheets API", "Gmail API", "Make", "Airtable", "OpenAI"],
    year: "2025",
    content:
      "Centralised data pipeline with scheduled jobs, near real-time ETL, and dynamic dashboards. Focus on data fidelity, caching, and alerting for SLA-sensitive reports.",
  },
  {
    slug: "proposal-generation-delivery",
    title: "Proposal Generation & Delivery",
    outcome: "Templating engine pairing structured client data with LLM output.",
    metric: "3× proposal volume",
    description:
      "AI-powered system that generates customised proposals based on client requirements and automatically delivers them.",
    tools: ["n8n", "Airtable", "Docs API", "Gmail API", "OpenAI"],
    year: "2025",
    content:
      "A templating and personalisation engine that combines structured client data with LLM output, performs quality checks, and automates delivery and tracking.",
  },
  {
    slug: "lead-generation-outreach",
    title: "Lead Generation & Outreach",
    outcome: "Multi-channel discovery, enrichment, scoring and outreach.",
    metric: "45% lift in conversion",
    description:
      "Intelligent lead generation system with automated personalised outreach.",
    tools: ["n8n", "Apify", "Airtable", "Gmail API"],
    year: "2024",
    content:
      "Pipeline that discovers targets, enriches profiles, scores leads, and runs multi-channel outreach campaigns with personalisation and throttling controls.",
  },
  {
    slug: "content-generation-publishing",
    title: "Content Generation & Publishing",
    outcome: "Ideation → generation → review → schedule → publish, on rails.",
    description:
      "Automated content creation and publishing pipeline that generates, reviews, and schedules content across multiple platforms.",
    tools: ["n8n", "Telegram", "Apify", "LinkedIn API", "X API", "Gmail API"],
    year: "2024",
    content:
      "End-to-end system: ideation → generation → review → scheduling → publishing. Includes moderation checks and analytic hooks for performance tuning.",
  },
]

export function getProjectBySlug(slug: string) {
  if (!slug) return undefined
  const normalize = (s: string) =>
    decodeURIComponent(s).trim().replace(/^\/+|\/+$/g, "")
  const key = normalize(slug)
  return projects.find((p) => p.slug === key || normalize(p.slug) === key)
}
