"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/site";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80";

type SlideItem = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  role: string;
  project: string;
  image: string;
};

function staticToSlides(): SlideItem[] {
  return testimonials.map((t) => ({
    id: t.id,
    name: t.name,
    rating: t.rating,
    text: t.quote,
    role: t.role,
    project: t.project,
    image: t.image,
  }));
}

function StarRating({ rating }: { rating: SlideItem["rating"] }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} sao`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-amber-400" : "text-slate-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ item }: { item: SlideItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={`Công trình ${item.project}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm">
          {item.project}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <StarRating rating={item.rating} />
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
          &ldquo;{item.text}&rdquo;
        </blockquote>
        <footer className="mt-5 border-t border-slate-100 pt-4">
          <p className="font-bold text-slate-900">{item.name}</p>
          <p className="mt-0.5 text-sm text-[#0084c7]">{item.role}</p>
        </footer>
      </div>
    </article>
  );
}

export function TestimonialsSlider() {
  const [items, setItems] = useState<SlideItem[]>(staticToSlides());
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const loadReviews = useCallback(async () => {
    try {
      const res = await fetch(`/api/reviews?approved=true&t=${Date.now()}`, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" },
      });
      if (!res.ok) return;

      const data = (await res.json()) as {
        id: string;
        name: string;
        rating: number;
        content: string;
        role: string;
        project: string;
        image: string | null;
      }[];

      if (!Array.isArray(data) || data.length === 0) return;

      setItems(
        data.map((r) => ({
          id: r.id,
          name: r.name,
          rating: r.rating as SlideItem["rating"],
          text: r.content,
          role: r.role,
          project: r.project,
          image: r.image || DEFAULT_IMAGE,
        })),
      );
      setActive(0);
    } catch {
      /* giữ mẫu tĩnh nếu API lỗi */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadReviews();

    const onFocus = () => void loadReviews();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [loadReviews]);

  const count = items.length;

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return;
      setActive(((index % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused, count]);

  if (loading) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-slate-200 bg-white">
        <p className="text-sm text-slate-500">Đang tải đánh giá...</p>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchStart(e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const diff = touchStart - (e.changedTouches[0]?.clientX ?? touchStart);
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
        setTouchStart(null);
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full shrink-0 px-1 sm:px-2">
              <div className="mx-auto max-w-2xl">
                <ReviewCard item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Đánh giá trước"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 shadow-md transition hover:border-[#0084c7] hover:text-[#0084c7] sm:-left-4"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Đánh giá tiếp theo"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 shadow-md transition hover:border-[#0084c7] hover:text-[#0084c7] sm:-right-4"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Xem đánh giá ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-[#0084c7]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
