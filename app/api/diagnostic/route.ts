import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Payload {
  activity: string;
  problems: string[];
  otherProblem?: string;
  email: string;
  whatsapp?: string;
}

/* ============================================================
   📬 Ton Gmail — tu reçois les diagnostics ici
   ============================================================ */
const NOTIFY_EMAIL = "patawalaabdoulaye2003@gmail.com";

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
        { error: "Au moins un besoin doit être coché." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    /* ---------- Envoi par email via Resend ---------- */
    const { data, error } = await resend.emails.send({
      from: "Patawala <diagnostic@patawala.com>",
      to: [NOTIFY_EMAIL],
      replyTo: body.email,
      subject: `🎯 Nouveau diagnostic — ${body.activity}`,
      html: buildEmailHtml(body),
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return NextResponse.json(
        { error: "Envoi email échoué." },
        { status: 500 }
      );
    }

    console.log("✅ Email envoyé avec succès. ID:", data?.id);

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("❌ Erreur:", err);
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }
}

/* ============================================================
   TEMPLATE EMAIL HTML
   ============================================================ */
function buildEmailHtml(data: Payload) {
  const problemsList = data.problems
    .map((p) => `<li style="margin: 6px 0;">${p}</li>`)
    .join("");

  const otherBlock =
    data.otherProblem && data.problems.includes("Autre chose")
      ? `<tr>
          <td style="padding: 8px 0; color: #64748B; font-size: 13px; vertical-align: top;">Autre précision</td>
          <td style="padding: 8px 0; color: #0F172A; font-size: 14px; font-weight: 500;">${data.otherProblem}</td>
        </tr>`
      : "";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #F8FAFC; padding: 32px 16px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; border: 1px solid #E2E8F0; padding: 32px;">
          
          <div style="border-bottom: 1px solid #E2E8F0; padding-bottom: 20px; margin-bottom: 24px;">
            <div style="display: inline-block; padding: 4px 10px; background: #FBF7E9; border-radius: 999px; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; color: #B8860B; text-transform: uppercase;">
              Nouveau diagnostic
            </div>
            <h1 style="font-size: 22px; color: #0F172A; margin: 16px 0 0; font-weight: 600;">
              🎯 Demande de ${data.activity}
            </h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-size: 13px; vertical-align: top; width: 140px;">Métier</td>
              <td style="padding: 8px 0; color: #0F172A; font-size: 14px; font-weight: 500;">${data.activity}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; color: #0F172A; font-size: 14px; font-weight: 500;">
                <a href="mailto:${data.email}" style="color: #B8860B; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            ${
              data.whatsapp
                ? `<tr>
                    <td style="padding: 8px 0; color: #64748B; font-size: 13px; vertical-align: top;">WhatsApp</td>
                    <td style="padding: 8px 0; color: #0F172A; font-size: 14px; font-weight: 500;">
                      <a href="https://wa.me/${data.whatsapp.replace(/\D/g, "")}" style="color: #25D366; text-decoration: none;">${data.whatsapp}</a>
                    </td>
                  </tr>`
                : ""
            }
            ${otherBlock}
          </table>

          <div style="background: #F8FAFC; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <div style="font-size: 12px; font-weight: 600; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">
              Ce qu'il veut améliorer
            </div>
            <ul style="margin: 0; padding-left: 20px; color: #334155; font-size: 14px; line-height: 1.6;">
              ${problemsList}
            </ul>
          </div>

          <div style="border-top: 1px solid #E2E8F0; padding-top: 20px;">
            <a href="mailto:${data.email}" style="display: inline-block; padding: 10px 18px; background: linear-gradient(135deg, #D4AF37, #B8860B); color: #0F172A; font-weight: 600; text-decoration: none; border-radius: 8px; font-size: 14px; margin-right: 8px;">
              Répondre par email
            </a>
            ${
              data.whatsapp
                ? `<a href="https://wa.me/${data.whatsapp.replace(/\D/g, "")}" style="display: inline-block; padding: 10px 18px; background: #25D366; color: white; font-weight: 600; text-decoration: none; border-radius: 8px; font-size: 14px;">
                    Ouvrir WhatsApp
                  </a>`
                : ""
            }
          </div>

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #E2E8F0; color: #94A3B8; font-size: 12px;">
            Reçu le ${new Date().toLocaleString("fr-FR", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </div>
        </div>
      </body>
    </html>
  `;
}