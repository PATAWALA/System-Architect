import { NextResponse } from "next/server";

interface Payload {
  activity: string;
  problems: string[];
  otherProblem?: string;
  email: string;
  whatsapp?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;

    /* ---------- Validation ---------- */
    if (!body.activity || !body.email) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }
    if (!Array.isArray(body.problems) || body.problems.length === 0) {
      return NextResponse.json(
        { error: "Au moins un problème doit être coché." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Email invalide." },
        { status: 400 }
      );
    }

    /* ---------- À BRANCHER : Resend / Make / n8n / Notion ---------- */
    console.log("📥 Nouvelle demande de diagnostic :", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }
}