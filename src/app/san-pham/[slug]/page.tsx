import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/catalog";
import {
  ArticleBody,
  Breadcrumb,
  ContactCta,
  SiteFooter,
  SiteHeader,
} from "@/lib/components/SiteLayout";
import { PHONE_HREF, SITE, ZALO_HREF } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Không tìm thấy" };
  return {
    title: `${product.title} | ${SITE.shortName}`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-full bg-white text-slate-800">
      <SiteHeader />
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/#san-pham" },
          { label: product.title },
        ]}
      />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.images.slice(0, 3).map((img) => (
                  <div
                    key={img}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200"
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="150px" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">{product.title}</h1>
            <p className="mt-4 text-2xl font-bold text-[#0084c7]">
              Giá: {product.price}
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">{product.description}</p>

            <ul className="mt-6 space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 text-[#0084c7]">✓</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="rounded-lg bg-[#0084c7] px-6 py-3 text-sm font-bold text-white hover:bg-[#006699]"
              >
                Liên hệ báo giá
              </a>
              <a
                href={ZALO_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#0084c7]"
              >
                Chat Zalo
              </a>
            </div>

            <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((spec) => (
                    <tr key={spec.label} className="border-b border-slate-100 last:border-0">
                      <td className="bg-slate-50 px-4 py-3 font-semibold text-slate-700">
                        {spec.label}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Mô tả sản phẩm</h2>
          <ArticleBody content={product.content} />
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Ứng dụng</h2>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app) => (
              <span
                key={app}
                className="rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-700"
              >
                {app}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Sản phẩm liên quan</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/san-pham/${item.slug}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="25vw"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900 group-hover:text-[#0084c7]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-[#0084c7]">Giá: Liên hệ</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-16 lg:hidden">
          <ContactCta />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
