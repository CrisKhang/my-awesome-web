import Image from "next/image";
import Link from "next/link";
import { categories, PHONE_HREF, SITE, ZALO_HREF } from "@/lib/site";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${className}`.trim()}
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${className}`.trim()}
      width={20}
      height={20}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Logo({ size = 48 }: { size?: number }) {
  return (
    <Image
      src={SITE.logo}
      alt={SITE.name}
      width={size}
      height={size}
      className="rounded-full border-2 border-[#0084c7] object-cover"
    />
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 font-semibold text-[#0084c7] hover:text-[#006699]"
          >
            <PhoneIcon />
            HOTLINE: {SITE.phone}
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-600 hover:text-[#1877f2]"
          >
            <FacebookIcon />
            Fanpage
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={52} />
          <div>
            <p className="text-base font-extrabold uppercase tracking-wide text-[#0084c7] sm:text-lg">
              {SITE.shortName}
            </p>
            <p className="text-xs text-slate-500">{SITE.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          <Link href="/#san-pham" className="text-sm font-medium text-slate-600 hover:text-[#0084c7]">
            Sản phẩm
          </Link>
          <Link href="/#thu-vien" className="text-sm font-medium text-slate-600 hover:text-[#0084c7]">
            Thư viện
          </Link>
          <Link href="/#lien-he" className="text-sm font-medium text-slate-600 hover:text-[#0084c7]">
            Liên hệ
          </Link>
        </nav>

        <a
          href={PHONE_HREF}
          className="rounded-full bg-[#0084c7] px-4 py-2 text-sm font-bold text-white hover:bg-[#006699]"
        >
          Gọi ngay
        </a>
      </div>

      <div className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <Link
              key={cat}
              href="/#san-pham"
              className="shrink-0 rounded-full px-3 py-1 text-xs font-medium text-slate-600 hover:bg-[#0084c7] hover:text-white sm:text-sm"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <p className="font-bold text-white">{SITE.shortName}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              {SITE.name} — {SITE.tagline}
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Liên hệ</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Hotline: {SITE.phone}</li>
              <li>{SITE.address}</li>
              <li>
                <a href={ZALO_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Zalo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-800 pt-6 text-center text-xs">
          © 2026 {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="border-b border-slate-200 bg-slate-50 py-3 text-sm text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 sm:px-6 lg:px-8">
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-[#0084c7]">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-slate-800">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

export function ContactCta() {
  return (
    <div className="rounded-xl border border-[#0084c7]/30 bg-[#0084c7]/5 p-6">
      <p className="font-bold text-slate-900">Tư vấn miễn phí</p>
      <p className="mt-2 text-sm text-slate-600">
        Liên hệ {SITE.shortName} để nhận báo giá chi tiết.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <a
          href={PHONE_HREF}
          className="rounded-lg bg-[#0084c7] py-2.5 text-center text-sm font-bold text-white hover:bg-[#006699]"
        >
          Gọi {SITE.phone}
        </a>
        <a
          href={ZALO_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-slate-300 py-2.5 text-center text-sm font-semibold text-slate-700 hover:border-[#0084c7]"
        >
          Chat Zalo
        </a>
      </div>
    </div>
  );
}

export function ArticleBody({
  content,
}: {
  content: { heading?: string; paragraphs?: string[]; list?: string[] }[];
}) {
  return (
    <div className="prose prose-slate max-w-none">
      {content.map((block, i) => (
        <div key={i} className="mb-6">
          {block.heading && (
            <h2 className="mb-3 text-xl font-bold text-slate-900">{block.heading}</h2>
          )}
          {block.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="mb-3 leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
          {block.list && (
            <ul className="list-disc space-y-2 pl-5 text-slate-600">
              {block.list.map((item) => (
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
