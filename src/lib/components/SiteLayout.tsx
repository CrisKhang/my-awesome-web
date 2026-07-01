import Image from "next/image";
import Link from "next/link";
import { categories, MAILTO_HREF, PHONE_HREF, SITE, ZALO_HREF } from "@/lib/site";

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

function ZaloIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${className}`.trim()}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.69 1.52 5.08 3.89 6.65-.17.62-.68 2.23-.78 2.58-.12.42.1.42.22.31.1-.08 1.64-1.14 2.31-1.61.72.2 1.48.31 2.26.31 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm-2.8 9.2H7.6c-.22 0-.4-.18-.4-.4V8.4c0-.22.18-.4.4-.4h1.6c.22 0 .4.18.4.4v2.4c0 .22-.18.4-.4.4zm3.2 0H10.8c-.22 0-.4-.18-.4-.4V8.4c0-.22.18-.4.4-.4h1.6c.22 0 .4.18.4.4v2.4c0 .22-.18.4-.4.4zm3.2 0h-1.6c-.22 0-.4-.18-.4-.4V8.4c0-.22.18-.4.4-.4h1.6c.22 0 .4.18.4.4v2.4c0 .22-.18.4-.4.4z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${className}`.trim()}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function GmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${className}`.trim()}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function AdminIcon({ className = "" }: { className?: string }) {
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
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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

const socialLinks = [
  {
    label: "Facebook",
    href: SITE.facebook,
    Icon: FacebookIcon,
    hoverClass: "hover:bg-[#1877f2] hover:text-white",
  },
  {
    label: "Zalo",
    href: ZALO_HREF,
    Icon: ZaloIcon,
    hoverClass: "hover:bg-[#0068ff] hover:text-white",
  },
  {
    label: "TikTok",
    href: SITE.tiktok,
    Icon: TikTokIcon,
    hoverClass: "hover:bg-black hover:text-white",
  },
  {
    label: "Gmail",
    href: MAILTO_HREF,
    Icon: GmailIcon,
    hoverClass: "hover:bg-[#ea4335] hover:text-white",
  },
] as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {socialLinks.map(({ label, href, Icon, hoverClass }) => (
        <a
          key={label}
          href={href}
          target={label === "Gmail" ? undefined : "_blank"}
          rel={label === "Gmail" ? undefined : "noopener noreferrer"}
          aria-label={label}
          title={label}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition ${hoverClass}`}
        >
          <Icon />
        </a>
      ))}
    </div>
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
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#1877f2]"
            >
              <FacebookIcon />
              Fanpage
            </a>
            <Link
              href="/admin/danh-gia"
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#0084c7]"
            >
              <AdminIcon />
              Admin
            </Link>
          </div>
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
          <Link href="/danh-gia" className="text-sm font-medium text-slate-600 hover:text-[#0084c7]">
            Đánh giá
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
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <p className="font-bold text-white">{SITE.shortName}</p>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              {SITE.name} — {SITE.tagline}
            </p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-white">Kết nối với chúng tôi</p>
              <SocialLinks className="mt-3" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Liên hệ</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                Hotline:{" "}
                <a href={PHONE_HREF} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
              <li>
                <a href={MAILTO_HREF} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Danh mục</p>
            <ul className="mt-3 space-y-2 text-sm">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat}>
                  <Link href="/#san-pham" className="hover:text-white">
                    {cat}
                  </Link>
                </li>
              ))}
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
