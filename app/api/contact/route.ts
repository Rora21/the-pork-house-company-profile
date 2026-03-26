import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

export async function POST(req: NextRequest) {
  if (!EMAIL_FROM || !EMAIL_TO) {
    console.error("Missing EMAIL_FROM or EMAIL_TO environment variables.");
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
      <!-- Header -->
      <div style="background: #b91c1c; padding: 24px 32px;">
        <h1 style="margin: 0; color: #ffffff; font-size: 20px; letter-spacing: 1px;">THE PORK HOUSE</h1>
        <p style="margin: 4px 0 0; color: #fecaca; font-size: 13px;">New Contact Form Submission</p>
      </div>

      <!-- Body -->
      <div style="padding: 32px; background: #ffffff;">
        <p style="margin: 0 0 24px; color: #374151; font-size: 15px;">
          You have received a new message from your website contact form.
        </p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 16px; background: #f3f4f6; border-radius: 4px; font-size: 13px; color: #6b7280; font-weight: bold; width: 80px;">NAME</td>
            <td style="padding: 12px 16px; font-size: 15px; color: #111827;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; background: #f3f4f6; border-radius: 4px; font-size: 13px; color: #6b7280; font-weight: bold;">EMAIL</td>
            <td style="padding: 12px 16px; font-size: 15px; color: #111827;">
              <a href="mailto:${email}" style="color: #b91c1c; text-decoration: none;">${email}</a>
            </td>
          </tr>
        </table>

        <div style="margin-top: 24px;">
          <p style="margin: 0 0 8px; font-size: 13px; color: #6b7280; font-weight: bold; background: #f3f4f6; padding: 12px 16px; border-radius: 4px;">MESSAGE</p>
          <p style="margin: 0; padding: 16px; background: #fef2f2; border-left: 4px solid #b91c1c; border-radius: 0 4px 4px 0; font-size: 15px; color: #111827; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 32px; text-align: center;">
          <a href="mailto:${email}" style="display: inline-block; background: #b91c1c; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: bold;">
            Reply to ${name}
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding: 20px 32px; text-align: center; background: #f3f4f6; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; font-size: 12px; color: #9ca3af;">
          This email was sent from the contact form at theporkhouse.rw
        </p>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    replyTo: email,
    subject: `New message from ${name}`,
    html,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
