import { NextResponse } from "next/server"

// Contact API removed: contact form has been replaced with public links in the UI.
export async function POST() {
  return NextResponse.json({ error: "Contact endpoint removed" }, { status: 410 })
}

export async function GET() {
  return NextResponse.json({ message: "Contact endpoint removed" }, { status: 410 })
}
