"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import "./PromotionalBanner.css";

const bgImage = "/assets/products/dish-rack.jpg";

export default function PromotionalBanner({
  eyebrow = "Limited Time",
  title = "Kitchen & Storage Upgrades",
  ctaLabel = "Discover Now",
  ctaTo = "/shop",
  image = bgImage,
}) {
  const { ref, className, style } = useReveal();
  return (
    <section className="promo-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="promo-banner__overlay" />
      <div ref={ref} className={`container promo-banner__content ${className}`} style={style}>
        <p className="promo-banner__eyebrow">{eyebrow}</p>
        <h2 className="promo-banner__title">{title}</h2>
        <Link href={ctaTo} className="btn btn-outline-light">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
