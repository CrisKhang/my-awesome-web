"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Không gửi được. Vui lòng thử lại.");
        return;
      }

      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Mất kết nối. Vui lòng kiểm tra mạng và thử lại.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50 px-6 py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
          ✓
        </div>
        <p className="mt-4 text-xl font-bold text-green-800">Cảm ơn bạn đã liên hệ</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-green-700">
          Chúng tôi đã nhận thông tin của bạn qua email. Bảo Thịnh Phát sẽ liên hệ
          lại trong thời gian sớm nhất.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-[#0084c7] hover:underline"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Họ tên <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={status === "loading"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Họ tên của bạn"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#0084c7] focus:ring-1 focus:ring-[#0084c7] disabled:bg-slate-50"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            disabled={status === "loading"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Số điện thoại của bạn"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#0084c7] focus:ring-1 focus:ring-[#0084c7] disabled:bg-slate-50"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
            Nội dung
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            disabled={status === "loading"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mô tả nhu cầu của bạn..."
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#0084c7] focus:ring-1 focus:ring-[#0084c7] disabled:bg-slate-50"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-[#0084c7] py-3 text-sm font-bold tracking-wide text-white transition hover:bg-[#006699] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Đang gửi..." : "GỬI LIÊN HỆ"}
        </button>
      </form>

      {error && (
        <p className="mt-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}
    </div>
  );
}
