import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sand text-muted px-7 pt-15 pb-6 border-t border-line">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-11 pb-9 border-b border-line">
        <div>
          <div className="mb-3.5 inline-block bg-white rounded-lg p-2 shadow-[0_2px_10px_rgba(13,21,38,0.06)]">
            <Image src="/logo.png" alt="Marvel Fountains logo" height={52} width={120} className="h-[52px] w-auto" />
          </div>
          <p className="text-[16px] font-medium">
            Premium water fountains for homes, hotels, gardens & commercial spaces across India.
          </p>
        </div>
        <div>
          <h5 className="text-ink mb-4.5 text-[14px] tracking-wide uppercase font-semibold">Quick Links</h5>
          <ul className="space-y-2.5">
            <li><Link href="/about" className="text-[14px] hover:text-gold-deep transition-colors">About Us</Link></li>
            <li><Link href="/products" className="text-[14px] hover:text-gold-deep transition-colors">Products</Link></li>
            <li><Link href="/gallery" className="text-[14px] hover:text-gold-deep transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="text-[14px] hover:text-gold-deep transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-ink mb-4.5 text-[14px] tracking-wide uppercase font-semibold">Products</h5>
          <ul className="space-y-2.5">
            <li><Link href="/products/classic-garden-fountain" className="text-[14px] hover:text-gold-deep transition-colors">Garden Fountains</Link></li>
            <li><Link href="/products/wall-mounted-water-feature" className="text-[14px] hover:text-gold-deep transition-colors">Wall Fountains</Link></li>
            <li><Link href="/products/tabletop-zen-fountain" className="text-[14px] hover:text-gold-deep transition-colors">Tabletop Fountains</Link></li>
            <li><Link href="/products/modern-pool-fountain" className="text-[14px] hover:text-gold-deep transition-colors">Pool Fountains</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-ink mb-4.5 text-[14px] tracking-wide uppercase font-semibold">Follow Us</h5>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-[14px] hover:text-gold-deep transition-colors">Facebook</a></li>
            <li><a href="#" className="text-[14px] hover:text-gold-deep transition-colors">Instagram</a></li>
            <li><a href="#" className="text-[14px] hover:text-gold-deep transition-colors">YouTube</a></li>
            <li><a href="#" className="text-[14px] hover:text-gold-deep transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-5.5 text-center text-xs text-muted">
        © 2026 Marvel Fountains. All Rights Reserved.
      </div>
    </footer>
  );
}
