import Link from "next/link";
import "./PromotionalBanner.css";

const bgImage = "/assets/products/bar-stools.jpeg";

export default function PromotionalBanner({
  eyebrow = "Limited Time",
  title = "Kitchen & Storage Upgrades",
  ctaLabel = "Discover Now",
  ctaTo = "/shop",
  image = bgImage,
}) {
  return (
    <section className="promo-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="promo-banner__overlay" />
      <div className="container promo-banner__content">
        <p className="promo-banner__eyebrow">{eyebrow}</p>
        <h2 className="promo-banner__title">{title}</h2>
        <Link href={ctaTo} className="btn btn-outline-light">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
