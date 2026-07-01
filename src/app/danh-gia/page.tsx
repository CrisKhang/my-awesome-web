import Link from "next/link";
import { ReviewForm } from "@/app/components/ReviewForm";
import { SiteFooter, SiteHeader } from "@/lib/components/SiteLayout";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: `Gửi đánh giá | ${SITE.shortName}`,
  description: `Chia sẻ cảm nhận về ${SITE.shortName} — panel, thi công lắp ghép và chất lượng phục vụ.`,
};

export default function DanhGiaPage() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-800">
      <SiteHeader />

      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#0084c7]">
            Ý kiến khách hàng
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">
            Gửi đánh giá về {SITE.shortName}
          </h1>
          <p className="mt-3 text-slate-600">
            Cảm ơn bạn đã tin tưởng. Hãy chia sẻ trải nghiệm về panel, đội thi công lắp ghép
            và quá trình bàn giao công trình.
          </p>
        </div>

        <ReviewForm />

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link href="/#danh-gia" className="font-semibold text-[#0084c7] hover:underline">
            ← Xem đánh giá trên trang chủ
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
