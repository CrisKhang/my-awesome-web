import Image from "next/image";
import Link from "next/link";

const PHONE = "0901 234 567";
const PHONE_HREF = "tel:+84901234567";

const services = [
  {
    title: "Cửa cổng",
    description:
      "Thiết kế và gia công cửa cổng sắt, cửa cổng tự động theo phong cách hiện đại, cổ điển hoặc tối giản. Bền bỉ, chống gỉ, an toàn tuyệt đối.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    features: ["Cửa trượt", "Cửa hai cánh", "Có motor tự động"],
  },
  {
    title: "Lan can",
    description:
      "Lan can sắt nghệ thuật, lan can cầu thang, ban công với họa tiết tinh xảo. Kết hợp kính, gỗ hoặc inox tạo điểm nhấn sang trọng cho công trình.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    features: ["Cầu thang", "Ban công", "Hoa văn CNC"],
  },
  {
    title: "Hàng rào",
    description:
      "Hàng rào sắt bảo vệ, hàng rào biệt thự, nhà phố và khu công nghiệp. Thi công nhanh, mối hàn chắc chắn, sơn tĩnh điện chống ăn mòn lâu dài.",
    image:
      "https://images.unsplash.com/photo-1605276374101-dee2ffb0f962?w=800&q=80",
    features: ["Biệt thự", "Nhà phố", "Khu công nghiệp"],
  },
];

const gallery = [
  {
    title: "Cửa cổng hiện đại 2 cánh",
    category: "Cửa cổng",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
  },
  {
    title: "Cửa sắt nghệ thuật",
    category: "Cửa sắt",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  },
  {
    title: "Lan can cầu thang sang trọng",
    category: "Lan can",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
  {
    title: "Hàng rào biệt thự",
    category: "Hàng rào",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  },
  {
    title: "Cổng sắt mở trượt",
    category: "Cửa cổng",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
  },
  {
    title: "Cửa sắt hoa văn CNC",
    category: "Cửa sắt",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80",
  },
];

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
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

function WrenchIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17l-5.07 5.07a3 3 0 11-4.24-4.24l5.07-5.07M18.36 5.64a3 3 0 00-4.24 0l-1.41 1.41m4.24-1.41l-2.83 2.83m-2.83 2.83L9.17 15.17m6.19-6.19l-2.83 2.83"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-full bg-[#1a1a1a] text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#0d0d0d]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-to-br from-[#f97316] to-[#ea580c] text-[#0d0d0d] shadow-lg shadow-orange-500/20">
              <WrenchIcon />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-white">
                Thép Việt
              </p>
              <p className="text-xs text-zinc-500">Xưởng cơ khí · Cửa sắt</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#dich-vu"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-[#f97316]"
            >
              Dịch vụ
            </a>
            <a
              href="#mau-dep"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-[#f97316]"
            >
              Mẫu đẹp
            </a>
            <a
              href="#lien-he"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-[#f97316]"
            >
              Liên hệ
            </a>
          </nav>

          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 rounded-sm bg-[#f97316] px-4 py-2.5 text-sm font-bold text-[#0d0d0d] transition-all hover:bg-[#fb923c] hover:shadow-lg hover:shadow-orange-500/30"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Gọi ngay</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
            alt="Xưởng cơ khí chuyên gia công cửa sắt"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 via-[#0d0d0d]/80 to-[#0d0d0d]/60" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #f97316 0, #f97316 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-[#f97316]/40 bg-[#f97316]/10 px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#f97316]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#fb923c]">
                Xưởng cơ khí uy tín · Hơn 15 năm kinh nghiệm
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Chuyên{" "}
              <span className="bg-gradient-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent">
                CỬA SẮT
              </span>
              , cửa cổng &amp; hàng rào
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Thiết kế – gia công – lắp đặt trọn gói. Cam kết chất lượng thép
              cao cấp, sơn tĩnh điện bền màu, bảo hành dài hạn.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 rounded-sm bg-[#f97316] px-6 py-3.5 text-base font-bold text-[#0d0d0d] transition-all hover:bg-[#fb923c] hover:shadow-xl hover:shadow-orange-500/25"
              >
                Liên hệ báo giá
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#mau-dep"
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-600 bg-zinc-800/50 px-6 py-3.5 text-base font-semibold text-zinc-200 backdrop-blur transition-all hover:border-[#f97316]/50 hover:bg-zinc-800"
              >
                Xem mẫu đẹp
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-zinc-700/50 pt-8">
              {[
                { value: "500+", label: "Công trình" },
                { value: "15+", label: "Năm kinh nghiệm" },
                { value: "100%", label: "Khách hài lòng" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-[#f97316] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
      </section>

      {/* Services */}
      <section id="dich-vu" className="bg-[#262626] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#f97316]">
              Dịch vụ của chúng tôi
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Danh mục sản phẩm cơ khí
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Từ ý tưởng đến thi công hoàn thiện — mọi sản phẩm đều được gia
              công tại xưởng, kiểm tra chất lượng nghiêm ngặt trước khi bàn
              giao.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-sm border border-zinc-700/60 bg-[#1a1a1a] transition-all hover:border-[#f97316]/50 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-sm bg-[#f97316] text-sm font-black text-[#0d0d0d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-sm border border-zinc-700 bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f97316] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="mau-dep" className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#f97316]">
                Bộ sưu tập
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Mẫu cửa sắt đẹp
              </h2>
              <p className="mt-4 max-w-xl text-zinc-400">
                Một số công trình tiêu biểu đã hoàn thiện. Liên hệ để nhận catalog
                đầy đủ và tư vấn thiết kế theo yêu cầu riêng.
              </p>
            </div>
            <a
              href="#lien-he"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-[#f97316] px-5 py-3 text-sm font-bold text-[#0d0d0d] transition-all hover:bg-[#fb923c] hover:shadow-lg hover:shadow-orange-500/25"
            >
              Liên hệ báo giá
              <PhoneIcon />
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-zinc-800"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/90 via-[#0d0d0d]/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block rounded-sm bg-[#f97316] px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-[#0d0d0d]">
                    {item.category}
                  </span>
                  <p className="mt-2 text-base font-semibold text-white">
                    {item.title}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="lien-he" className="relative overflow-hidden bg-[#262626] py-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #71717a 0, #71717a 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-sm border border-zinc-700 bg-[#1a1a1a] p-8 text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f97316]/15 text-[#f97316]">
              <PhoneIcon />
            </div>
            <h2 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
              Nhận báo giá miễn phí trong 24 giờ
            </h2>
            <p className="mt-4 text-zinc-400">
              Gọi hotline hoặc nhắn tin qua Zalo — chúng tôi khảo sát tận nơi,
              tư vấn mẫu và báo giá chi tiết, không phát sinh chi phí ẩn.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 rounded-sm bg-[#f97316] px-8 py-4 text-lg font-bold text-[#0d0d0d] transition-all hover:bg-[#fb923c] hover:shadow-xl hover:shadow-orange-500/30"
              >
                <PhoneIcon />
                {PHONE}
              </a>
              <a
                href="https://zalo.me/0901234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-600 px-8 py-4 text-base font-semibold text-zinc-200 transition-all hover:border-[#0068ff] hover:text-[#0068ff]"
              >
                Chat Zalo
              </a>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Địa chỉ xưởng: 123 Đường Cơ Khí, Quận 12, TP. Hồ Chí Minh ·
              Giờ làm việc: 7:30 – 18:00 (T2–CN)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#0d0d0d] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#f97316] text-[#0d0d0d]">
              <WrenchIcon />
            </div>
            <p className="text-sm font-semibold text-zinc-400">
              © 2026 Thép Việt — Xưởng cơ khí cửa sắt
            </p>
          </div>
          <a
            href={PHONE_HREF}
            className="text-sm font-bold text-[#f97316] transition-colors hover:text-[#fb923c]"
          >
            Hotline: {PHONE}
          </a>
        </div>
      </footer>
    </div>
  );
}
