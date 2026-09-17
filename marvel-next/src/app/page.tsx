import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FeatureGrid from "@/components/FeatureGrid";
import StackingGallery from "@/components/StackingGallery";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import RippleLink from "@/components/RippleLink";
import ContactForm from "@/components/ContactForm";
import TiltCard from "@/components/TiltCard";
import { MapPin, Phone, Mail } from "lucide-react";
import StarRating from "@/components/StarRating";
import AboutSection from "@/components/AboutSection";
import HeroTitle from "@/components/HeroTitle";

const contactInfo = [
  { Icon: MapPin, label: "Address", value: "123 Fountain Road, Jaipur, Rajasthan, India" },
  { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { Icon: Mail, label: "Email", value: "info@marvelfountains.com" },
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

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[130px] pb-[150px]">
        <video
          className="absolute inset-0 z-0 h-full w-full bg-navy-deep object-cover"
          src="/videos/hero-fountain-2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(6,10,19,0.55),rgba(6,10,19,0.85))]" />
        <div className="absolute -inset-[5%] z-1 bg-[radial-gradient(circle_at_75%_30%,rgba(212,175,55,0.22),transparent_55%)]" />
        <div className="max-w-[1240px] mx-auto px-7 relative z-[2]">
          <div className="text-gold uppercase tracking-[4px] text-xs font-semibold flex items-center gap-3.5 mb-5.5 animate-fade-down">
            Water · Art · Craft
          </div>
          <HeroTitle className="text-white text-[clamp(34px,6vw,64px)] font-bold max-w-[820px] mb-6.5 leading-[1.18] font-serif" />
          <p
            className="text-[#cfd0d1] text-[17px] max-w-[520px] mb-10 font-light animate-fade-down"
            style={{ animationDelay: "0.35s" }}
          >
            Marvel Fountains designs, manufactures and installs premium indoor & outdoor fountains — engineered for
            silence, built for permanence.
          </p>
          <div className="flex gap-5 flex-wrap animate-fade-down" style={{ animationDelay: "0.55s" }}>
            <RippleLink href="/products" className="rounded-full bg-gradient-to-r from-cyan to-cyan-deep text-navy-deep px-8.5 py-4 text-xs font-bold tracking-widest uppercase shadow-[0_10px_30px_rgba(63,197,240,0.35)] transition-all hover:shadow-[0_14px_36px_rgba(63,197,240,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_4px_10px_rgba(63,197,240,0.4)]">
              Explore Collection
            </RippleLink>
            <RippleLink href="/contact" className="rounded-full bg-gradient-to-r from-gold to-gold-deep text-navy-deep px-8.5 py-4 text-xs font-semibold tracking-widest uppercase transition-all hover:shadow-[0_14px_36px_rgba(240,194,75,0.4)] hover:-translate-y-0.5">
              Request Quote
            </RippleLink>
          </div>
        </div>
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[2] text-[#cfd0d1] text-[11px] tracking-widest uppercase flex flex-col items-center gap-2.5">
          <span>Scroll</span>
          <span className="w-px h-8.5 bg-gradient-to-b from-white to-transparent animate-float" />
        </div>

        <div className="hidden lg:block absolute bottom-16 right-10 z-[3] [perspective:1200px]">
          <TiltCard max={14}>
            <div className="flex items-center gap-5 rounded-2xl border border-white/15 bg-white/10 px-7 py-5 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] [transform-style:preserve-3d]">
              <div className="flex -space-x-3 [transform:translateZ(30px)]">
                {["R", "S", "A", "P"].map((n) => (
                  <div key={n} className="h-10 w-10 rounded-full border-2 border-navy-deep bg-gradient-to-br from-cyan to-cyan-deep flex items-center justify-center text-navy-deep text-xs font-bold">
                    {n}
                  </div>
                ))}
              </div>
              <div className="[transform:translateZ(45px)]">
                <StarRating size={13} />
                <p className="text-white text-xs mt-1">
                  <span className="font-bold">1200+</span> happy clients across India
                </p>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      <section className="py-30 px-7">
        <div className="max-w-[1240px] mx-auto">
          <AboutSection eyebrow="01 — About Us" />
        </div>
      </section>

      <ServicesSection />

      <section className="py-30 px-7">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mx-auto mb-15 text-center">
            <div className="flex items-center justify-center gap-3.5 mb-4.5 text-cyan text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-cyan">
              03 — Why Choose Us
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink font-serif">
              Built On Quality &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-cyan italic">Trust</span>
            </h2>
          </Reveal>
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-paper py-30 px-7">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mx-auto mb-15 text-center">
            <div className="flex items-center justify-center gap-3.5 mb-4.5 text-cyan text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-cyan">
              04 — Gallery
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink mb-4 font-serif">
              A Glimpse of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-cyan italic">Work</span>
            </h2>
            <p className="text-muted text-[15.5px] font-light">
              Some of our finished installations across homes & businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <StackingGallery />

      <section className="bg-sand py-30 px-7">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mx-auto mb-15 text-center">
            <div className="flex items-center justify-center gap-3.5 mb-4.5 text-cyan text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-cyan">
              05 — Testimonials
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-ink font-serif">
              What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-cyan italic">Say</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={(i % 6) * 0.08}
                className="rounded-2xl border border-line bg-paper p-8.5 shadow-[0_2px_10px_rgba(13,21,38,0.04)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(13,21,38,0.1)] hover:border-gold/40"
              >
                <StarRating size={13} className="mb-3.5" />
                <p className="text-muted text-sm mb-5.5 font-light italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3.5 border-t border-line pt-4.5">
                  <div className="w-9.5 h-9.5 rounded-full bg-gradient-to-br from-cyan to-cyan-deep text-navy-deep flex items-center justify-center font-bold text-[13px] shadow-[0_4px_12px_rgba(107,63,160,0.35)]">
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
        </div>
      </section>

      <CtaSection />

      <section className="py-30 px-7">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-17">
          <Reveal variant="fade-left">
            <div className="flex items-center gap-3.5 mb-4.5 text-cyan text-xs font-semibold tracking-[3px] uppercase before:content-[''] before:w-8.5 before:h-px before:bg-cyan">
              06 — Contact Us
            </div>
            <h3 className="text-ink text-[26px] mb-4.5 font-bold font-serif">
              Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-cyan italic">Beautiful</span>
            </h3>
            <p className="text-muted mb-6.5 font-light">
              Reach out for product enquiries, custom designs, or installation support.
            </p>
            {contactInfo.map(({ Icon, label, value }) => (
              <div key={label} className="flex gap-4 mb-5.5 items-start pb-5.5 border-b border-line">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan to-cyan-deep text-navy-deep shrink-0 shadow-[0_6px_16px_rgba(107,63,160,0.35)]">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <h5 className="text-ink text-sm font-semibold uppercase tracking-wide">{label}</h5>
                  <p className="text-muted text-sm mt-1">{value}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal variant="fade-right">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
