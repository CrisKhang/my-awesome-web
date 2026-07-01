import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/site";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim().replace(/\s/g, "") : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name) {
      return NextResponse.json({ error: "Vui lòng nhập họ tên." }, { status: 400 });
    }
    if (!phone || phone.length < 9) {
      return NextResponse.json({ error: "Vui lòng nhập số điện thoại hợp lệ." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Hệ thống email chưa được cấu hình. Vui lòng thêm RESEND_API_KEY." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_EMAIL ?? SITE.contactEmail;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    const { error } = await resend.emails.send({
      from: `${SITE.shortName} <${fromEmail}>`,
      to: toEmail,
      subject: `[${SITE.shortName}] Yêu cầu tư vấn — ${name}`,
      html: `
        <div style="font-family:sans-serif;line-height:1.6;color:#1e293b">
          <h2 style="color:#0084c7">Yêu cầu tư vấn mới</h2>
          <p><strong>Họ tên:</strong> ${escapeHtml(name)}</p>
          <p><strong>Số điện thoại:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Nội dung:</strong></p>
          <p style="white-space:pre-wrap">${escapeHtml(message || "Không có")}</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0" />
          <p style="font-size:12px;color:#64748b">Gửi từ form liên hệ — ${SITE.name}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Không gửi được email. Vui lòng thử lại sau." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Lỗi hệ thống. Vui lòng thử lại sau." }, { status: 500 });
  }
}
