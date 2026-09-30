import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import StarRating from "@/components/StarRating";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? `${product.name} | Marvel Fountains` : "Product | Marvel Fountains" };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);

  return (
    <>
      <Header solid />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <section className="px-7 pb-25">
        <Link href="/products" className="inline-flex items-center gap-2 text-muted text-[13px] mb-6.5 transition-all hover:text-gold-deep hover:gap-3 max-w-[1240px] mx-auto">
          <ArrowLeft size={15} /> Back to Collection
        </Link>
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-15 items-start">
          <Reveal variant="fade-left" className="lg:sticky lg:top-[110px]">
            <ProductGallery name={product.name} thumbs={product.thumbs} />
          </Reveal>
          <Reveal variant="fade-right">
            <div className="flex items-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
              {product.badge}
            </div>
            <h1 className="text-[clamp(28px,3.6vw,40px)] font-bold text-ink mb-4 font-serif">{product.name}</h1>
            <div className="flex items-baseline gap-3.5 mb-6">
              <span className="font-serif text-[30px] font-bold text-gold-deep">{product.price}</span>
              <StarRating size={14} />
            </div>
            <p className="text-muted font-light mb-7.5">{product.desc}</p>
            <table className="w-full border-collapse mb-8.5">
              <tbody>
                {product.specs.map(([label, value]) => (
                  <tr key={label} className="border-b border-line">
                    <td className="py-3.5 text-[11.5px] text-muted uppercase tracking-wide w-2/5">{label}</td>
                    <td className="py-3.5 text-[13.5px] text-ink font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-4.5 flex-wrap mb-9">
              <Link href="/contact" className="rounded-full bg-gradient-to-r from-gold to-gold-deep text-navy-deep px-8.5 py-4 text-xs font-bold tracking-widest uppercase shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all hover:shadow-[0_14px_36px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_4px_10px_rgba(212,175,55,0.35)]">
                Enquire Now
              </Link>
              <Link href="/contact" className="rounded-full border border-gold text-gold-deep px-8.5 py-4 text-xs font-semibold tracking-widest uppercase transition-all hover:bg-gold/10 hover:-translate-y-0.5">
                Request Callback
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="max-w-[1240px] mx-auto mb-7.5 px-7">
        <div className="flex items-center gap-3.5 mb-2.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
          You May Also Like
        </div>
        <h3 className="text-2xl font-bold text-ink font-serif">More From Our Collection</h3>
      </Reveal>
      <div className="max-w-[1240px] mx-auto px-7 pb-25">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {related.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={(i % 6) * 0.08} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
