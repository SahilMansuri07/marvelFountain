import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import ProjectsSpotlight from "@/components/ProjectsSpotlight";
import StarRating from "@/components/StarRating";
import { products } from "@/data/products";

const categories = [
  { title: "Garden Fountains", href: "/products/classic-garden-fountain", image: "https://www.marvelfountains.com/img/st2.jpg" },
  { title: "Wall & LED Features", href: "/products/wall-mounted-water-feature", image: "https://www.marvelfountains.com/img/wf2.jpg" },
  { title: "Tabletop Fountains", href: "/products/tabletop-zen-fountain", image: "https://www.marvelfountains.com/img/st6.jpg" },
  { title: "Grand Entrance Fountains", href: "/products/grand-entrance-fountain", image: "https://www.marvelfountains.com/images/mf2.jpg" },
  { title: "Pool Fountains", href: "/products/modern-pool-fountain", image: "https://www.marvelfountains.com/img/ff2.jpg" },
  { title: "Ceramic Pot Fountains", href: "/products/ceramic-pot-fountain", image: "https://www.marvelfountains.com/img/st10.jpg" },
  { title: "Custom Design & Installation", href: "/contact", image: "https://www.marvelfountains.com/images/mf3.jpg" },
];

const stats = ["15+ Years", "1200+ Projects", "98% Client Satisfaction"];

const projects = [
  { place: "Commercial", title: "Grand Entrance Fountain", image: "https://www.marvelfountains.com/images/mf5.jpg" },
  { place: "Interior", title: "LED Wall Water Feature", image: "https://www.marvelfountains.com/img/wf5.jpg" },
  { place: "Residential", title: "Garden Fountain", image: "https://www.marvelfountains.com/img/st13.jpg" },
  { place: "Hospitality", title: "Pool Fountain", image: "https://www.marvelfountains.com/img/ff5.jpg" },
  { place: "Commercial", title: "Lobby Fountain", image: "https://www.marvelfountains.com/images/mf6.jpg" },
  { place: "Residential", title: "Courtyard Fountain", image: "https://www.marvelfountains.com/img/st14.jpg" },
];

const testimonials = [
  {
    quote:
      "Marvel Fountains installed a beautiful garden fountain at our farmhouse. Quality and finish are outstanding.",
    name: "Rakesh Sharma",
    role: "Homeowner, Jaipur",
    initial: "R",
  },
  {
    quote: "We got the grand entrance fountain for our hotel lobby. Guests love it. Highly recommended!",
    name: "Suman Patel",
    role: "Hotel Manager, Udaipur",
    initial: "S",
  },
  {
    quote: "Great after-sales support and fast installation. The tabletop fountain looks premium in our office.",
    name: "Amit Verma",
    role: "Business Owner, Delhi",
    initial: "A",
  },
];

function SectionHeading({ strong, rest }: { strong: string; rest: string }) {
  return (
    <Reveal className="mx-auto mb-10 w-full max-w-[1240px] px-7">
      <h2 className="text-[clamp(26px,3.4vw,36px)] font-bold text-ink font-serif">
        {strong}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-cyan italic">{rest}</span>
      </h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />

      {/* Category tiles */}
      <section className="grid grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group relative block h-[50vw] overflow-hidden bg-navy-deep lg:h-[25vw]"
          >
            <Image
              src={c.image}
              alt={c.title}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-[transform,filter] duration-[1400ms] ease-[cubic-bezier(.33,1,.68,1)] group-hover:scale-[1.05] group-hover:saturate-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/10 to-transparent" />
            <span className="absolute top-0 left-0 z-[1] p-7 text-[clamp(18px,1.9vw,26px)] font-bold font-serif leading-[1.2] text-white transition-colors group-hover:text-gold max-md:p-5">
              {c.title}
            </span>
          </Link>
        ))}
        <Link
          href="/products"
          className="group relative flex h-[50vw] bg-sand transition-colors duration-300 hover:bg-gold lg:h-[25vw]"
        >
          <span className="p-7 text-[clamp(18px,1.9vw,26px)] font-bold font-serif text-ink transition-colors group-hover:text-navy-deep max-md:p-5">
            All Products +
          </span>
        </Link>
      </section>

      {/* Intro */}
      <section className="bg-navy-deep px-7 py-28 max-md:py-20">
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <ul className="mb-10 flex flex-wrap gap-x-9 gap-y-2 text-xs font-semibold uppercase tracking-[3px] text-muted">
              <li className="text-gold">Marvel Fountains</li>
              {stats.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-6 text-[clamp(20px,2.2vw,26px)] leading-[1.5] font-light text-muted">
              <strong className="font-semibold text-ink">
                Marvel Fountains designs, manufactures &amp; installs premium indoor and outdoor water fountains
                across India.
              </strong>{" "}
              Engineered for silence and built for permanence, every piece blends precise craftsmanship with a
              designer&apos;s eye.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[clamp(20px,2.2vw,26px)] leading-[1.5] font-light text-muted">
              From calming tabletop fountains to grand entrance cascades for hotels and farmhouses, we handle
              everything end-to-end — design, fabrication, installation and after-sales care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects spotlight */}
      <section className="bg-sand pt-24 pb-6">
        <SectionHeading strong="Projects" rest="Spotlight" />
        <ProjectsSpotlight projects={projects} />
        <div className="text-center">
          <Link
            href="/gallery"
            className="arrow-link inline-block px-8 py-10 text-[15px] font-semibold uppercase tracking-widest text-ink transition-colors hover:text-gold"
          >
            Explore our work
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24">
        <SectionHeading strong="Featured" rest="Products" />
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={(i % 6) * 0.08} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sand py-24">
        <SectionHeading strong="Client" rest="Stories" />
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 px-7 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="rounded-2xl border border-line bg-paper p-8.5 transition-all hover:-translate-y-1.5 hover:border-gold/40"
            >
              <StarRating size={13} className="mb-3.5" />
              <p className="text-muted text-sm mb-5.5 font-light italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3.5 border-t border-line pt-4.5">
                <div className="w-9.5 h-9.5 rounded-full bg-gradient-to-br from-cyan to-cyan-deep text-navy-deep flex items-center justify-center font-bold text-[13px]">
                  {t.initial}
                </div>
                <div>
                  <h5 className="text-[13.5px] text-ink font-semibold">{t.name}</h5>
                  <span className="text-[11.5px] text-muted">{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-[1240px] px-7">
          <Link
            href="/reviews"
            className="arrow-link text-[13px] font-semibold uppercase tracking-widest text-ink transition-colors hover:text-gold"
          >
            Read all reviews
          </Link>
        </div>
      </section>

      {/* Contact band */}
      <section className="bg-navy-deep px-7 py-32 max-md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <h3 className="text-[clamp(34px,5vw,56px)] font-bold font-serif leading-[1.15] text-muted">
            Want to{" "}
            <Link
              href="/contact"
              className="relative inline-block italic text-gold after:absolute after:left-0 after:-bottom-0.5 after:h-1 after:w-full after:bg-cyan after:transition-[width] after:duration-500 hover:after:w-0"
            >
              create
            </Link>
            <br />
            <span className="text-ink">something beautiful?</span>
          </h3>
          <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-4 text-[15px] font-semibold uppercase tracking-widest">
            <li>
              <Link href="/contact" className="arrow-link text-ink transition-colors hover:text-gold">
                Get in touch
              </Link>
            </li>
            <li>
              <a href="tel:+919876543210" className="arrow-link text-ink transition-colors hover:text-gold">
                +91 98765 43210
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
