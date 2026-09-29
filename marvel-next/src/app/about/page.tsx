import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";
import PageHero from "@/components/PageHero";
import CountUp from "@/components/CountUp";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us | Marvel Fountains" };

const stats: { to: number; suffix: string; label: string }[] = [
  { to: 15, suffix: "+", label: "Years of craftsmanship" },
  { to: 1200, suffix: "+", label: "Projects delivered" },
  { to: 98, suffix: "%", label: "Client satisfaction" },
];

const strengthsA = [
  {
    title: "Expert Craftsmanship",
    desc: "Every fountain is handmade and tested by skilled artisans, using high-grade materials and weatherproof finishes built to last for years.",
  },
  {
    title: "Silent, Reliable Performance",
    desc: "Precision pumps engineered for silence — so all you hear is water, never machinery.",
  },
  {
    title: "Complete Water Solutions",
    desc: "From compact tabletop fountains to grand outdoor centerpieces, we handle every scale of project.",
  },
];

const strengthsB = [
  {
    title: "Pan-India Delivery",
    desc: "Safe packaging and doorstep delivery across the country, whatever the size of the piece.",
  },
  {
    title: "Free Installation",
    desc: "Our technicians set up and test every unit on-site, so your fountain works perfectly from day one.",
  },
  {
    title: "2-Year Warranty",
    desc: "Complete warranty on pumps, motors and finishes — backed by responsive after-sales support.",
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "We understand your space, style and budget." },
  { step: "02", title: "Design", desc: "Our team designs a fountain tailored to your site." },
  { step: "03", title: "Manufacturing", desc: "Crafted in-house with premium materials and pumps." },
  { step: "04", title: "Installation", desc: "Delivered, installed and tested on-site." },
  { step: "05", title: "After-Sales Care", desc: "Servicing and support long after handover." },
];

function StrengthList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="space-y-10">
      {items.map((s, i) => (
        <Reveal key={s.title} variant="fade-up" delay={i * 0.12} className="group border-l-2 border-line pl-6 transition-colors hover:border-gold">
          <h3 className="mb-2.5 text-[22px] font-bold font-serif text-ink transition-colors group-hover:text-gold">{s.title}</h3>
          <p className="text-[15px] font-light text-muted">{s.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHero
        tall
        image="https://images.pexels.com/photos/19621560/pexels-photo-19621560.jpeg?auto=compress&cs=tinysrgb&w=1920"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={
          <>
            We create timeless experiences with{" "}
            <span className="italic text-gold">water</span>. Across India, for over 15 years.
          </>
        }
      />

      {/* Statement */}
      <section className="px-7 py-28 max-md:py-20">
        <Reveal className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[clamp(22px,2.8vw,32px)] font-light font-serif leading-[1.5] text-muted">
            <strong className="font-bold text-ink">It&apos;s not just what we do; it&apos;s who we are.</strong> Marvel
            Fountains has been transforming homes, hotels, offices and gardens with beautifully engineered water
            features — designed, manufactured, delivered and installed end-to-end by one dedicated team.
          </h2>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-sand px-7 py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12} className="text-center sm:border-l sm:border-line sm:first:border-l-0">
              <CountUp
                to={s.to}
                suffix={s.suffix}
                className="block font-serif text-[clamp(52px,6vw,80px)] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-gold to-cyan"
              />
              <span className="mt-3 block text-xs font-semibold uppercase tracking-[3px] text-muted">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What makes us good */}
      <section className="px-7 py-28 max-md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto mb-20 max-w-[720px] text-center max-md:mb-12">
            <div className="flex items-center justify-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
              Why Marvel
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink font-serif">
              What makes us so good at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-cyan italic">what we do?</span>
            </h2>
          </Reveal>

          <div className="mb-24 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 max-md:mb-16">
            <Reveal variant="fade-left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl before:absolute before:inset-0 before:z-[1] before:rounded-2xl before:border before:border-gold/30">
                <video
                  className="h-full w-full object-cover"
                  src="/videos/hero-fountain-2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <p className="mt-4 text-[13px] text-muted">
                <strong className="text-ink">Our work in action</strong> — see more in our{" "}
                <Link href="/gallery" className="text-gold hover:text-cyan transition-colors">
                  gallery
                </Link>
                .
              </p>
            </Reveal>
            <StrengthList items={strengthsA} />
          </div>

          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal variant="fade-right" className="lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.pexels.com/photos/32039197/pexels-photo-32039197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Elegant tiered garden fountain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1600ms] hover:scale-[1.05]"
                />
              </div>
            </Reveal>
            <StrengthList items={strengthsB} />
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-navy-deep px-7 py-28 max-md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mb-16 max-w-[640px]">
            <div className="flex items-center gap-3.5 mb-4.5 text-gold text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-gold">
              How We Work
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink font-serif">
              From idea to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-cyan italic">flowing water</span>
            </h2>
          </Reveal>

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            <Reveal className="absolute left-0 right-0 top-[27px] hidden h-px md:block" variant="fade-left">
              <div className="h-px w-full bg-gradient-to-r from-gold via-cyan to-transparent" />
            </Reveal>
            {process.map((p, i) => (
              <Reveal key={p.step} delay={0.2 + i * 0.15} className="group relative max-md:flex max-md:gap-5">
                <div className="relative z-[1] mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-navy-deep font-serif text-lg font-bold text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy-deep group-hover:scale-110">
                  {p.step}
                </div>
                <div>
                  <h3 className="mb-2 text-[20px] font-bold font-serif text-ink">{p.title}</h3>
                  <p className="text-[14px] font-light text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}
