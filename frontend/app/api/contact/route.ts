import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TYPES = ["student", "business", "ai", "web", "other"];

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (b.website) return NextResponse.json({ ok: true }); // honeypot hit: pretend success

  const name = String(b.name ?? "").trim().slice(0, 120);
  const email = String(b.email ?? "").trim().slice(0, 200);
  const phone = String(b.phone ?? "").trim().slice(0, 40);
  const type = String(b.type ?? "");
  const message = String(b.message ?? "").trim().slice(0, 5000);

  if (name.length < 2 || !EMAIL.test(email) || !TYPES.includes(type) || message.length < 10) {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return NextResponse.json({ error: "Messaging is temporarily unavailable." }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Aryvion Website <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `New enquiry (${type}) from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nType: ${type}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text());
    return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
