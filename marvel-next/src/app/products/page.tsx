import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import CategoryTile from "@/components/CategoryTile";
import ProductFilterGrid from "@/components/ProductFilterGrid";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Products | Marvel Fountains" };

type Tile = { title: string; subtitle: string; href: string; image: string };

const groups: { id: string; title: string; cols: string; tiles: Tile[] }[] = [
  {
    id: "outdoor",
    title: "Outdoor Fountains",
    cols: "lg:grid-cols-4",
    tiles: [
      {
        title: "Garden Fountains",
        subtitle: "Multi-tier stone-finish cascades for lawns & courtyards.",
        href: "/products/classic-garden-fountain",
        image: "https://www.marvelfountains.com/img/st2.jpg",
      },
      {
        title: "Grand Entrance Fountains",
        subtitle: "Statement pieces for hotels, farmhouses & complexes.",
        href: "/products/grand-entrance-fountain",
        image: "https://www.marvelfountains.com/images/mf2.jpg",
      },
      {
        title: "Pool Fountains",
        subtitle: "Jet-style displays for pools & rooftop decks.",
        href: "/products/modern-pool-fountain",
        image: "https://www.marvelfountains.com/img/ff2.jpg",
      },
      {
        title: "Ceramic Pot Fountains",
        subtitle: "Handcrafted cascades for balconies & small gardens.",
        href: "/products/ceramic-pot-fountain",
        image: "https://www.marvelfountains.com/img/st10.jpg",
      },
    ],
  },
  {
    id: "indoor",
    title: "Indoor Water Features",
    cols: "lg:grid-cols-2",
    tiles: [
      {
        title: "Wall & LED Water Features",
        subtitle: "Slate-panel water curtains with ambient LED lighting.",
        href: "/products/wall-mounted-water-feature",
        image: "https://www.marvelfountains.com/img/wf2.jpg",
      },
      {
        title: "Tabletop Fountains",
        subtitle: "Compact, ultra-quiet fountains for desks & meditation corners.",
        href: "/products/tabletop-zen-fountain",
        image: "https://www.marvelfountains.com/img/st6.jpg",
      },
    ],
  },
  {
    id: "custom",
    title: "Custom Solutions",
    cols: "lg:grid-cols-2",
    tiles: [
      {
        title: "Custom Design",
        subtitle: "Bespoke fountains designed around your space and budget.",
        href: "/contact",
        image: "https://www.marvelfountains.com/images/mf3.jpg",
      },
      {
        title: "Installation & Maintenance",
        subtitle: "On-site setup, testing and after-sales servicing.",
        href: "/contact",
        image: "https://www.marvelfountains.com/images/mf4.jpg",
      },
    ],
  },
];

const categoryBySlug: Record<string, string> = {
  "classic-garden-fountain": "Outdoor",
  "grand-entrance-fountain": "Outdoor",
  "modern-pool-fountain": "Outdoor",
  "ceramic-pot-fountain": "Outdoor",
  "wall-mounted-water-feature": "Indoor",
  "tabletop-zen-fountain": "Indoor",
};

const underlined =
  "relative inline-block italic text-gold transition-colors hover:text-cyan after:absolute after:left-0 after:-bottom-0.5 after:h-[3px] after:w-full after:bg-cyan/70 after:transition-[width] after:duration-500 hover:after:w-0";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Products"
        image="https://www.marvelfountains.com/images/mf1.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      {/* Statement */}
      <section className="px-7 py-24 max-md:py-16">
        <Reveal className="mx-auto max-w-[1240px]">
          <h3 className="max-w-[980px] text-[clamp(24px,3.2vw,38px)] font-bold font-serif leading-[1.35] text-ink">
            We manufacture{" "}
            <a href="#outdoor" className={underlined}>
              outdoor fountains
            </a>
            , elegant{" "}
            <a href="#indoor" className={underlined}>
              indoor water features
            </a>{" "}
            and complete{" "}
            <a href="#custom" className={underlined}>
              custom installations
            </a>
            .
          </h3>
          <p className="mt-6 max-w-[640px] text-[15.5px] font-light text-muted">
            Every product follows the same premium build quality — high-grade materials, weatherproof finishes and
            precision pumps for silent, reliable performance.
          </p>
        </Reveal>
      </section>

      {/* Category groups */}
      {groups.map((g) => (
        <section key={g.id} id={g.id} className="scroll-mt-24 px-7 pb-20">
          <Reveal className="mx-auto mb-8 flex max-w-[1240px] items-end justify-between gap-6">
            <h2 className="text-[clamp(24px,3vw,32px)] font-bold font-serif text-ink">{g.title}</h2>
            <span className="text-xs font-semibold uppercase tracking-[3px] text-gold">
              {String(g.tiles.length).padStart(2, "0")} Collections
            </span>
          </Reveal>
          <div className={`mx-auto grid max-w-[1240px] grid-cols-2 gap-4 max-md:gap-3 ${g.cols}`}>
            {g.tiles.map((t, i) => (
              <CategoryTile
                key={t.title}
                index={i}
                {...t}
                className={g.tiles.length > 2 ? "aspect-[3/4]" : "aspect-[3/4] lg:aspect-[16/10]"}
              />
            ))}
          </div>
        </section>
      ))}

      {/* All products */}
      <section className="bg-sand px-7 py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mb-8 max-w-[640px]">
            <div className="flex items-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
              Our Range
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink font-serif">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-cyan italic">Products</span>
            </h2>
          </Reveal>
          <ProductFilterGrid products={products} categoryBySlug={categoryBySlug} tabs={["Outdoor", "Indoor"]} />
          <Reveal className="mt-14 text-center">
            <p className="text-muted font-light">
              Need something different?{" "}
              <Link href="/contact" className="arrow-link font-semibold text-ink transition-colors hover:text-gold">
                Talk to our design team
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}
