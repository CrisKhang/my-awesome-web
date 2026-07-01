import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  designArticles,
  getDesignArticle,
} from "@/lib/catalog";
import {
  ArticleBody,
  Breadcrumb,
  ContactCta,
  SiteFooter,
  SiteHeader,
} from "@/lib/components/SiteLayout";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return designArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getDesignArticle(slug);
  if (!article) return { title: "Không tìm thấy" };
  return {
    title: `${article.title} | ${SITE.shortName}`,
    description: article.excerpt,
  };
}

export default async function DesignDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getDesignArticle(slug);
  if (!article) notFound();

  const related = designArticles
    .filter((a) => a.categorySlug === article.categorySlug && a.slug !== slug)
    .slice(0, 5);

  return (
    <div className="min-h-full bg-white text-slate-800">
      <SiteHeader />
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Thư viện thiết kế", href: "/#thu-vien" },
          { label: article.category, href: `/#thu-vien` },
          { label: article.title },
        ]}
      />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <span className="inline-block rounded-full bg-[#0084c7]/10 px-3 py-1 text-xs font-semibold text-[#0084c7]">
              {article.tag}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm text-slate-500">{article.date}</p>

            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-slate-200">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">{article.excerpt}</p>

            <div className="mt-8">
              <ArticleBody content={article.content} />
            </div>

            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">
                {SITE.shortName} — {SITE.tagline}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Mọi thắc mắc vui lòng liên hệ hotline {SITE.phone} hoặc fanpage Facebook
                để được tư vấn miễn phí.
              </p>
            </div>
          </article>

          <aside className="space-y-8">
            <ContactCta />

            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">Bài viết liên quan</h3>
              <ul className="mt-4 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/thu-vien/${item.slug}`}
                      className="text-sm leading-snug text-slate-600 hover:text-[#0084c7]"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">Danh mục</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["Nhà lắp ghép", "Nhà tiền chế", "Cửa sắt", "Mẫu đẹp"].map((cat) => (
                  <li key={cat}>
                    <Link href="/#thu-vien" className="text-slate-600 hover:text-[#0084c7]">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
