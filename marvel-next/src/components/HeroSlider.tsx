"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  href: string;
  video?: string;
  image?: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Water · Art · Craft",
    title: "Timeless Water Fountains",
    subtitle: "Designed, manufactured and installed for elegant living spaces.",
    href: "/products",
    video: "/videos/hero-fountain-2.mp4",
  },
  {
    eyebrow: "Commercial",
    title: "Grand Entrance Fountains",
    subtitle: "Statement pieces for hotels, farmhouses and commercial complexes.",
    href: "/products/grand-entrance-fountain",
    image: "https://www.marvelfountains.com/images/mf1.jpg",
  },
  {
    eyebrow: "Interior",
    title: "Wall & LED Water Features",
    subtitle: "A calming water curtain for lobbies, offices and living rooms.",
    href: "/products/wall-mounted-water-feature",
    image: "https://www.marvelfountains.com/img/wf1.jpg",
  },
  {
    eyebrow: "Outdoor",
    title: "Garden Fountains",
    subtitle: "Weatherproof multi-tier cascades for lawns and courtyards.",
    href: "/products/classic-garden-fountain",
    image: "https://www.marvelfountains.com/img/st1.jpg",
  },
];

const INTERVAL = 7000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-navy-deep">
      {slides.map((s, i) => {
        const active = i === index;
        return (
          <div
            key={s.title}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-1000 ${active ? "opacity-100 z-[1]" : "opacity-0 z-0"}`}
          >
            {s.video ? (
              <video className="h-full w-full object-cover" src={s.video} autoPlay loop muted playsInline />
            ) : (
              <Image
                src={s.image!}
                alt={s.title}
                fill
                sizes="100vw"
                priority={i === 1}
                className={`object-cover ${active ? "animate-kenburns" : ""}`}
              />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,19,0.45),rgba(6,10,19,0.2)_40%,rgba(6,10,19,0.85))]" />

            {active && (
              <div
                key={index}
                className="animate-hero-rise absolute bottom-[120px] left-1/2 w-full max-w-[1240px] -translate-x-1/2 px-7 max-md:bottom-[100px]"
              >
                <div className="text-gold uppercase tracking-[4px] text-xs font-semibold mb-4">{s.eyebrow}</div>
                <h2 className="text-white text-[30px] font-medium leading-[1.1] tracking-[-0.4px] max-w-[820px] sm:text-[38px] md:text-[46px] lg:text-[50px]">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-[620px] text-[18px] font-normal text-[#cfd0d1] md:text-[22px] lg:text-[24px]">{s.subtitle}</p>
                <Link
                  href={s.href}
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold to-gold-deep px-8.5 py-3.5 text-[15px] font-medium tracking-[0.4px] text-navy-deep shadow-[0_10px_30px_rgba(240,194,75,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(240,194,75,0.5)]"
                >
                  Discover
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            )}
          </div>
        );
      })}

      <div className="absolute bottom-12 left-1/2 z-[2] flex w-full max-w-[1240px] -translate-x-1/2 gap-2.5 px-7">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}: ${s.title}`}
            className="relative h-[3px] w-14 cursor-pointer overflow-hidden rounded-full bg-white/25"
          >
            {i === index && (
              <span
                key={index}
                className="absolute inset-y-0 left-0 bg-gold"
                style={{ animation: `slideProgress ${INTERVAL}ms linear forwards` }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
