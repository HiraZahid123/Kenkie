import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  Truck,
  Headset,
  ShoppingCart,
  ArrowRight,
  PlayCircle,
  Crown,
  Star,
  BatteryFull,
} from "lucide-react";
import "./HeroSection.css";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Premium\nQuality" },
  { icon: Truck, label: "Fast & Free\nShipping" },
  { icon: Headset, label: "24/7\nCustomer Support" },
];

const NoseIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size ?? 20}
    height={props.size ?? 20}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 3c0 3.2-3 6.2-3 10.2A5 5 0 0 0 12 18.2h0a5 5 0 0 0 5-5" />
    <path d="M8.7 15.4c.6 1.6 2 2.6 3.3 2.6s2.9-1 3.3-2.6" />
  </svg>
);

const PERKS = [
  { icon: NoseIcon, label: "Safe &\nPainless" },
  { icon: ShieldCheck, label: "Skin Friendly\nDesign" },
  { icon: BatteryFull, label: "Long Lasting\nBattery" },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img src="/hero-image.jpeg" alt="" className="hero__bg-image" />
        <span className="hero__bg-fade" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__pill">
            <Zap size={13} strokeWidth={2.5} />
            <span>POWERFUL</span>
            <i className="hero__pill-dot" />
            <span>PORTABLE</span>
            <i className="hero__pill-dot" />
            <span>VERSATILE</span>
          </div>

          <h1 className="hero__title">
            Everyday Essentials,
            <br />
            <span className="hero__title-accent">Done Right</span>
          </h1>

          <p className="hero__subtitle">
            Grooming tech, kitchen tools, storage and furniture — the everyday upgrades our
            customers keep coming back for.
          </p>

          <div className="hero__trust">
            {TRUST_ITEMS.map((item, i) => (
              <div className="hero__trust-item" key={item.label}>
                {i > 0 && <span className="hero__trust-divider" />}
                <span className="hero__trust-icon">
                  <item.icon size={18} strokeWidth={2} />
                </span>
                <span className="hero__trust-label">
                  {item.label.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>

          <div className="hero__actions">
            <Link href="/shop" className="hero__cta">
              <ShoppingCart size={18} />
              Shop Bestsellers
              <ArrowRight size={16} />
            </Link>
            <Link href="/shop-the-story" className="hero__watch">
              <PlayCircle size={20} />
              Watch Our Story
            </Link>
          </div>
        </div>

        <div className="hero__media">
          <span className="hero__caption">
            Small Tool
            <br />
            Big Difference
            <svg
              className="hero__caption-underline"
              viewBox="0 0 150 14"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M2 10c25-9 100-9 146 0" />
            </svg>
          </span>

          <div className="hero__badge">
            <div className="hero__badge-inner">
              <Crown size={20} strokeWidth={2} />
              <span>
                BEST
                <br />
                SELLER
              </span>
              <span className="hero__badge-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={9} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
            </div>
          </div>

          <div className="hero__perks">
            {PERKS.map((item) => (
              <div className="hero__perk" key={item.label}>
                <span className="hero__perk-icon">
                  <item.icon size={22} strokeWidth={2} />
                </span>
                <span className="hero__perk-label">
                  {item.label.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <svg className="hero__wave" viewBox="0 0 1200 190" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="hero__wave-bright"
          d="M-20,55 C100,20 200,20 300,55 C400,90 500,90 600,55 C700,20 800,20 900,55 C1000,90 1100,120 1180,130 C1100,140 1000,140 900,105 C800,70 700,70 600,105 C500,140 400,140 300,105 C200,70 100,70 -20,105 Z"
        />
        <path
          className="hero__wave-dark"
          d="M-20,90 C120,55 220,55 320,90 C420,125 520,125 620,90 C720,55 820,55 920,90 C1020,125 1120,160 1180,175 C1100,190 1020,190 920,155 C820,120 720,120 620,155 C520,190 420,190 320,155 C220,120 120,120 -20,155 Z"
        />
      </svg>
    </section>
  );
}
