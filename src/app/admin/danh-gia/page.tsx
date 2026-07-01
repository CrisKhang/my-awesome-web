"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

type Review = {
  id: string;
  name: string;
  phone: string;
  rating: number;
  content: string;
  role: string | null;
  project: string | null;
  image: string | null;
  status: string;
  createdAt: string;
};

export default function AdminReviewsPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  const loadReviews = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/reviews");
      if (res.status === 401) {
        setAuthed(false);
        return;
      }
      const data = await res.json();
      setReviews(Array.isArray(data) ? data : []);
      setAuthed(true);
    } catch {
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setLoginError("Mật khẩu không đúng.");
      return;
    }
    setPassword("");
    loadReviews();
  }

  async function updateReview(
    id: string,
    status: string,
    extra?: { role?: string; project?: string; image?: string },
  ) {
    const res = await fetch(`/api/reviews/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, ...extra }),
    });
    if (res.ok) loadReviews();
  }

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthed(false);
    setReviews([]);
  }

  if (authed === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-slate-500">Đang tải...</p>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h1 className="text-xl font-bold text-slate-900">Quản trị đánh giá</h1>
          <p className="mt-1 text-sm text-slate-500">Đăng nhập để duyệt đánh giá khách hàng</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu admin"
            className="mt-6 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#0084c7]"
          />
          {loginError && <p className="mt-2 text-sm text-red-600">{loginError}</p>}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-[#0084c7] py-2.5 text-sm font-bold text-white hover:bg-[#006699]"
          >
            Đăng nhập
          </button>
          <Link href="/" className="mt-4 block text-center text-sm text-[#0084c7] hover:underline">
            ← Về trang chủ
          </Link>
        </form>
      </div>
    );
  }

  const pending = reviews.filter((r) => r.status === "pending");
  const approved = reviews.filter((r) => r.status === "approved");

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Quản lý đánh giá</h1>
            <p className="mt-1 text-sm text-slate-500">
              Chỉ đánh giá <strong>Đã duyệt</strong> mới hiện trên slideshow trang chủ
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="text-sm text-[#0084c7] hover:underline">
              Trang chủ
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm text-slate-500 hover:text-slate-800"
            >
              Đăng xuất
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-slate-500">Đang tải...</p>
        ) : (
          <>
            <section className="mb-10">
              <h2 className="mb-4 font-bold text-slate-800">
                Chờ duyệt ({pending.length})
              </h2>
              {pending.length === 0 ? (
                <p className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500">
                  Không có đánh giá mới.
                </p>
              ) : (
                <ul className="space-y-4">
                  {pending.map((r) => (
                    <ReviewAdminCard key={r.id} review={r} onUpdate={updateReview} />
                  ))}
                </ul>
              )}
            </section>

            <section>
              <h2 className="mb-4 font-bold text-slate-800">
                Đã duyệt ({approved.length})
              </h2>
              {approved.length === 0 ? (
                <p className="text-sm text-slate-500">Chưa có đánh giá được duyệt.</p>
              ) : (
                <ul className="space-y-3">
                  {approved.map((r) => (
                    <li
                      key={r.id}
                      className="rounded-xl border border-slate-200 bg-white p-4 text-sm"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {r.name} — {"★".repeat(r.rating)}
                          </p>
                          <p className="mt-1 text-slate-600">{r.content}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => updateReview(r.id, "rejected")}
                          className="text-xs text-red-600 hover:underline"
                        >
                          Gỡ hiển thị
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}

function ReviewAdminCard({
  review,
  onUpdate,
}: {
  review: Review;
  onUpdate: (
    id: string,
    status: string,
    extra?: { role?: string; project?: string; image?: string },
  ) => void;
}) {
  const [role, setRole] = useState(review.role ?? "Khách hàng");
  const [project, setProject] = useState(review.project ?? "");
  const [image, setImage] = useState(review.image ?? "");

  return (
    <li className="rounded-xl border border-amber-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-bold text-slate-900">{review.name}</p>
          <p className="text-sm text-slate-500">{review.phone}</p>
          <p className="mt-2 text-amber-500">{"★".repeat(review.rating)}</p>
        </div>
        <time className="text-xs text-slate-400">
          {new Date(review.createdAt).toLocaleString("vi-VN")}
        </time>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{review.content}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Vai trò (vd: Chủ thầu — Bình Dương)"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          value={project}
          onChange={(e) => setProject(e.target.value)}
          placeholder="Tên công trình"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="URL ảnh (/cong-trinh/...)"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            onUpdate(review.id, "approved", {
              role,
              project: project || undefined,
              image: image || undefined,
            })
          }
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white hover:bg-green-700"
        >
          Duyệt
        </button>
        <button
          type="button"
          onClick={() => onUpdate(review.id, "rejected")}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          Từ chối
        </button>
      </div>
    </li>
  );
}
