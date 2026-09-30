import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  image,
  crumbs,
  tall = false,
  children,
}: {
  title: React.ReactNode;
  image: string;
  crumbs: Crumb[];
  tall?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`relative flex items-end overflow-hidden bg-navy-deep ${tall ? "min-h-[88vh]" : "min-h-[58vh]"}`}
    >
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover animate-kenburns" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,19,0.6),rgba(6,10,19,0.35)_45%,rgba(6,10,19,0.95))]" />
      <div className="absolute -inset-[5%] bg-[radial-gradient(circle_at_75%_30%,rgba(212,175,55,0.18),transparent_55%)]" />

      <div className="relative z-[1] mx-auto w-full max-w-[1240px] px-7 pt-[150px] pb-16 max-md:pb-12">
        <nav className="animate-hero-rise mb-6 text-xs uppercase tracking-wide text-[#cfd0d1]">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {c.href ? (
                <Link href={c.href} className="text-gold hover:text-cyan transition-colors">
                  {c.label}
                </Link>
              ) : (
                c.label
              )}
              {i < crumbs.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </nav>
        <h1
          className={`animate-hero-rise leading-[1.12] text-white ${
            tall ? "max-w-[980px] text-[36px] font-normal md:text-[52px] lg:text-[68px]" : "text-[44px] font-semibold md:text-[68px]"
          }`}
          style={{ animationDelay: "0.12s" }}
        >
          {title}
        </h1>
        {children && (
          <div className="animate-hero-rise mt-6" style={{ animationDelay: "0.28s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
