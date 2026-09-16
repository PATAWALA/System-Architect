import { NextResponse } from "next/server";

interface Payload {
  activity: string;
  problem: string;
  email: string;
  whatsapp?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;

    /* ---------- Validation serveur ---------- */
    if (!body.activity || !body.problem || !body.email) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Email invalide." },
        { status: 400 }
      );
    }

    /* ---------- À FAIRE : brancher un vrai canal ---------- */
    // Exemple 1 — Envoyer un email via Resend
    // await resend.emails.send({ from: "contact@patawala.com", to: "vous@patawala.com", subject: "Nouveau diagnostic", text: ... });
    //
    // Exemple 2 — Enregistrer dans Notion / Airtable
    // await notion.pages.create({ ... });
    //
    // Exemple 3 — Envoyer sur un webhook n8n / Make
    // await fetch("https://hook.eu1.make.com/xxx", { method: "POST", body: JSON.stringify(body) });

    console.log("📥 Nouvelle demande de diagnostic :", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }
}