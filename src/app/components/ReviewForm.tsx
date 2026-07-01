"use client";

import { useState } from "react";

type Props = {
  onSubmitted?: () => void;
  compact?: boolean;
};

function StarPicker({
  value,
  onChange,
  disabled,
}: {
  value: number;
  onChange: (n: number) => void;
  disabled?: boolean;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Chọn số sao">
      {Array.from({ length: 5 }, (_, i) => {
        const star = i + 1;
        const filled = star <= (hover || value);
        return (
          <button
            key={star}
            type="button"
            disabled={disabled}
            aria-label={`${star} sao`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange(star)}
            className="rounded p-0.5 transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <svg
              className={`h-8 w-8 ${filled ? "text-amber-400" : "text-slate-300"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

export function ReviewForm({ onSubmitted, compact = false }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, rating, content }),
      });
      const data = (await res.json()) as { error?: string; message?: string };

      if (!res.ok) {
        setError(data.error ?? "Không gửi được đánh giá.");
        return;
      }

      setSuccess(data.message ?? "Cảm ơn bạn đã gửi đánh giá!");
      setName("");
      setPhone("");
      setRating(5);
      setContent("");
      onSubmitted?.();
    } catch {
      setError("Mất kết nối. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}
    >
      {!compact && (
        <div className="mb-6 text-center sm:text-left">
          <h3 className="text-xl font-bold text-slate-900">Gửi đánh giá của bạn</h3>
          <p className="mt-1 text-sm text-slate-500">
            Chia sẻ cảm nhận về panel, thi công lắp ghép và chất lượng phục vụ
          </p>
        </div>
      )}

      {success ? (
        <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-8 text-center">
          <p className="text-lg font-bold text-green-800">Cảm ơn bạn đã liên hệ</p>
          <p className="mt-2 text-sm text-green-700">{success}</p>
          <button
            type="button"
            onClick={() => setSuccess("")}
            className="mt-4 text-sm font-semibold text-[#0084c7] hover:underline"
          >
            Gửi đánh giá khác
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="review-name" className="mb-1 block text-sm font-medium text-slate-700">
                Họ tên <span className="text-red-500">*</span>
              </label>
              <input
                id="review-name"
                type="text"
                required
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Họ tên của bạn"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#0084c7] focus:ring-1 focus:ring-[#0084c7] disabled:bg-slate-50"
              />
            </div>
            <div>
              <label htmlFor="review-phone" className="mb-1 block text-sm font-medium text-slate-700">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                id="review-phone"
                type="tel"
                required
                disabled={loading}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Số điện thoại"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#0084c7] focus:ring-1 focus:ring-[#0084c7] disabled:bg-slate-50"
              />
            </div>
          </div>

          <div>
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Số sao <span className="text-red-500">*</span>
            </span>
            <StarPicker value={rating} onChange={setRating} disabled={loading} />
          </div>

          <div>
            <label htmlFor="review-content" className="mb-1 block text-sm font-medium text-slate-700">
              Nội dung đánh giá <span className="text-red-500">*</span>
            </label>
            <textarea
              id="review-content"
              required
              rows={4}
              disabled={loading}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Chia sẻ về chất lượng panel, đội thi công lắp ghép, tiến độ bàn giao..."
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#0084c7] focus:ring-1 focus:ring-[#0084c7] disabled:bg-slate-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#0084c7] py-3 text-sm font-bold tracking-wide text-white transition hover:bg-[#006699] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
          >
            {loading ? "Đang gửi..." : "GỬI"}
          </button>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
          )}
        </form>
      )}
    </div>
  );
}
