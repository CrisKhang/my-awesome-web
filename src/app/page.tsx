import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./components/ContactForm";
import { DesignLibraryTabs } from "./components/DesignLibraryTabs";
import { TestimonialsSlider } from "./components/TestimonialsSlider";
import {
  designArticles,
  designProjects,
  designTabs,
  products,
} from "@/lib/catalog";
import {
  Logo,
  SiteFooter,
  SiteHeader,
} from "@/lib/components/SiteLayout";
import { PHONE_HREF, SITE } from "@/lib/site";

const news = designArticles.slice(0, 4);

const stats = [
  { value: "500+", label: "Công trình hoàn thành" },
  { value: "50+", label: "Đại lý phân phối" },
  { value: "98%", label: "Khách hàng hài lòng" },
  { value: "100%", label: "Cam kết chất lượng" },
];

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
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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

export default function Home() {
  return (
    <div className="min-h-full bg-white text-slate-800">
      <SiteHeader />

      {/* Hero — dinhtuong style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0099e0] via-[#0084c7] to-[#006699]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#004466]/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Logo size={96} />
            <h1 className="mt-6 text-3xl font-black uppercase tracking-wide text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              {SITE.shortName}
            </h1>
            <p className="mt-3 max-w-2xl text-lg font-semibold text-white/90 sm:text-xl">
              Một điểm đến cho vạn giải pháp công trình
            </p>
            <p className="mt-2 text-sm text-white/75">{SITE.name}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#san-pham"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0084c7] shadow-lg transition hover:bg-slate-100"
              >
                Xem sản phẩm
              </a>
              <a
                href="#lien-he"
                className="rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Tư vấn miễn phí
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About + Stats */}
      <section id="gioi-thieu" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#0084c7]">
                {SITE.tagline}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Về {SITE.shortName}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {SITE.name} là đơn vị chuyên thi công nhà lắp ghép, nhà tiền
                chế, khung thép và gia công cửa sắt, lan can, hàng rào tại TP.
                Hồ Chí Minh. Chúng tôi ưu tiên cung cấp sản phẩm tối ưu, hữu
                ích — đáp ứng mọi nhu cầu thi công, xây dựng, cải tạo và sửa
                chữa.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Với sứ mệnh &ldquo;{SITE.tagline}&rdquo;, {SITE.shortName} luôn
                nỗ lực nâng cao dịch vụ và mang đến chính sách tốt nhất cho
                quý khách hàng.
              </p>
              <a
                href="#lien-he"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0084c7] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#006699]"
              >
                Về chúng tôi
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
                >
                  <p className="text-3xl font-black text-[#0084c7]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="san-pham" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Danh mục sản phẩm
            </h2>
            <p className="mt-3 text-slate-600">
              Click vào từng loại sản phẩm để xem báo giá
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/san-pham/${product.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 20vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 group-hover:text-[#0084c7]">
                    {product.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">
                    {product.description}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#0084c7]">
                    Xem ngay →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design library with CSS tabs */}
      <section id="thu-vien" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">
            Thư viện thiết kế
          </h2>

          <DesignLibraryTabs tabs={designTabs} projects={designProjects} />
        </div>
      </section>

      {/* News */}
      <section id="tin-tuc" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">
            Tin tức nổi bật
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((article) => (
              <Link
                key={article.slug}
                href={`/thu-vien/${article.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <time className="text-xs text-slate-400">{article.date}</time>
                <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 group-hover:text-[#0084c7]">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {article.excerpt}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-[#0084c7]">
                  Xem thêm →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — đánh giá đã duyệt từ database */}
      <section id="danh-gia" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#0084c7]">
              Uy tín &amp; chất lượng
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Khách hàng &amp; Đối tác nói về {SITE.shortName}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Những phản hồi thực tế từ chủ thầu và khách hàng sau khi bàn giao công trình.
              {" "}
              <Link href="/danh-gia" className="font-semibold text-[#0084c7] hover:underline">
                Gửi đánh giá của bạn →
              </Link>
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-3xl px-8 sm:px-12">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="lien-he" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="bg-gradient-to-r from-[#0084c7] to-[#006699] px-6 py-8 text-center text-white sm:px-12">
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Liên hệ tư vấn miễn phí ngay hôm nay
              </h2>
              <p className="mt-3 text-white/85">
                Điền form bên dưới — {SITE.shortName} sẽ tư vấn và hỗ trợ miễn
                phí.
              </p>
            </div>

            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2">
              <ContactForm />

              <div className="min-w-0 space-y-6">
                <div className="flex items-center gap-4">
                  <Logo size={64} />
                  <div>
                    <p className="font-bold text-slate-900">{SITE.name}</p>
                    <p className="text-sm text-slate-500">{SITE.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="mt-0.5 shrink-0 text-[#0084c7]" />
                    <div>
                      <p className="font-semibold text-slate-900">Hotline / Zalo</p>
                      <a href={PHONE_HREF} className="text-[#0084c7] hover:underline">
                        {SITE.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FacebookIcon className="mt-0.5 shrink-0 text-[#1877f2]" />
                    <div>
                      <p className="font-semibold text-slate-900">Facebook</p>
                      <a
                        href={SITE.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0084c7] hover:underline"
                      >
                        Fanpage {SITE.shortName}
                      </a>
                    </div>
                  </li>
                  <li>
                    <p className="font-semibold text-slate-900">Địa chỉ</p>
                    <p>{SITE.address}</p>
                  </li>
                  <li>
                    <p className="font-semibold text-slate-900">Giờ làm việc</p>
                    <p>{SITE.hours}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
