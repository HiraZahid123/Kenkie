"use client";

import { useEffect, useRef, useState } from "react";
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
  Wifi,
  Moon,
  Droplets,
  Package,
  Wrench,
  ChevronLeft,
  ChevronRight,
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

const SLIDES = [
  {
    id: "trimmer",
    pill: ["POWERFUL", "PORTABLE", "VERSATILE"],
    titleLine1: "Everyday Essentials,",
    titleAccent: "Done Right",
    subtitle:
      "Grooming tech, kitchen tools, storage and furniture — the everyday upgrades our customers keep coming back for.",
    ctaLabel: "Shop Bestsellers",
    ctaHref: "/shop",
    watchLabel: "Watch Our Story",
    watchHref: "/shop-the-story",
    bg: { type: "photo", src: "/hero-image.jpeg", position: "68% center", mobilePosition: "66% center" },
    caption: ["Small Tool", "Big Difference"],
    badge: ["BEST", "SELLER"],
    perks: [
      { icon: NoseIcon, label: "Safe &\nPainless" },
      { icon: ShieldCheck, label: "Skin Friendly\nDesign" },
      { icon: BatteryFull, label: "Long Lasting\nBattery" },
    ],
  },
  {
    id: "doorbell",
    pill: ["HD CLARITY", "NIGHT VISION", "INSTANT ALERTS"],
    titleLine1: "Smarter Security,",
    titleAccent: "Every Doorstep",
    subtitle:
      "HD video, night vision and two-way audio — see who's at the door from anywhere, anytime.",
    ctaLabel: "Shop Doorbell",
    ctaHref: "/shop",
    watchLabel: "Watch Our Story",
    watchHref: "/shop-the-story",
    bg: { type: "gradient" },
    media: { type: "cutout", src: "/assets/products/doorbell-cutout.png", alt: "KENKIE Smart Video Doorbell" },
    caption: ["Never Miss,", "A Visitor"],
    badge: ["TOP", "RATED"],
    perks: [
      { icon: Wifi, label: "Wi-Fi\nConnected" },
      { icon: Moon, label: "Night\nVision" },
      { icon: ShieldCheck, label: "Weatherproof\nBuild" },
    ],
  },
  {
    id: "chopper",
    pill: ["8-IN-1", "NO MESS", "DISHWASHER SAFE"],
    titleLine1: "Prep Faster,",
    titleAccent: "Cook Smarter",
    subtitle:
      "One chopper, endless cuts — dice, slice and julienne in seconds with zero cleanup hassle.",
    ctaLabel: "Shop Kitchen",
    ctaHref: "/shop",
    watchLabel: "Watch Our Story",
    watchHref: "/shop-the-story",
    bg: { type: "gradient" },
    media: { type: "card", src: "/assets/products/veg-chopper.jpg", alt: "8-in-1 Vegetable Chopper" },
    caption: ["Chop Once,", "Done Right"],
    badge: ["CHEF'S", "PICK"],
    perks: [
      { icon: Zap, label: "One-Touch\nChopping" },
      { icon: Droplets, label: "Easy\nClean-Up" },
      { icon: Package, label: "Space-Saving\nStorage" },
    ],
  },
  {
    id: "storage",
    pill: ["3-TIER", "BAMBOO", "EASY ASSEMBLY"],
    titleLine1: "Tidy Space,",
    titleAccent: "Happy Home",
    subtitle:
      "Sturdy bamboo shelving that keeps shoes, bags and everyday clutter neatly in place.",
    ctaLabel: "Shop Storage",
    ctaHref: "/shop",
    watchLabel: "Watch Our Story",
    watchHref: "/shop-the-story",
    bg: { type: "gradient" },
    media: { type: "card", src: "/assets/products/bamboo-shoe-rack.jpg", alt: "3-Tier Bamboo Shoe Rack" },
    caption: ["Small Space,", "Big Storage"],
    badge: ["TOP", "RATED"],
    perks: [
      { icon: ShieldCheck, label: "Sturdy\nBuild" },
      { icon: Package, label: "Space\nSaving" },
      { icon: Wrench, label: "Easy\nAssembly" },
    ],
  },
];

const AUTO_MS = 6000;

function getSlideImageSrc(slide) {
  if (slide.bg.type === "photo") return slide.bg.src;
  if (slide.media) return slide.media.src;
  return null;
}

function HeroSlide({ slide, isActive }) {
  return (
    <div className={`hero__slide ${isActive ? "is-active" : ""}`} aria-hidden={!isActive}>
      <div className="hero__bg" aria-hidden="true">
        {slide.bg.type === "photo" ? (
          <>
            <img
              src={slide.bg.src}
              alt=""
              className="hero__bg-image"
              loading="eager"
              decoding="async"
              fetchPriority={isActive ? "high" : "low"}
              style={{ "--bg-position": slide.bg.position, "--bg-position-mobile": slide.bg.mobilePosition }}
            />
            <span className="hero__bg-fade" />
          </>
        ) : (
          <span className="hero__bg-gradient" />
        )}
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__pill">
            <Zap size={13} strokeWidth={2.5} />
            <span>{slide.pill[0]}</span>
            <i className="hero__pill-dot" />
            <span>{slide.pill[1]}</span>
            <i className="hero__pill-dot" />
            <span>{slide.pill[2]}</span>
          </div>

          <h1 className="hero__title">
            {slide.titleLine1}
            <br />
            <span className="hero__title-accent">{slide.titleAccent}</span>
          </h1>

          <p className="hero__subtitle">{slide.subtitle}</p>

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
            <Link href={slide.ctaHref} className="hero__cta">
              <ShoppingCart size={18} />
              {slide.ctaLabel}
              <ArrowRight size={16} />
            </Link>
            <Link href={slide.watchHref} className="hero__watch">
              <PlayCircle size={20} />
              {slide.watchLabel}
            </Link>
          </div>
        </div>

        <div className="hero__media">
          <span className="hero__caption">
            {slide.caption[0]}
            <br />
            {slide.caption[1]}
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
                {slide.badge[0]}
                <br />
                {slide.badge[1]}
              </span>
              <span className="hero__badge-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={9} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
            </div>
          </div>

          {slide.media?.type === "cutout" && (
            <img
              src={slide.media.src}
              alt={slide.media.alt}
              className="hero__product-cutout"
              loading="eager"
              decoding="async"
            />
          )}
          {slide.media?.type === "card" && (
            <div className="hero__product-card">
              <img src={slide.media.src} alt={slide.media.alt} loading="eager" decoding="async" />
            </div>
          )}

          <div className="hero__perks">
            {slide.perks.map((item) => (
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
    </div>
  );
}

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Warm the browser cache for every slide's image up front so switching
    // slides never has to wait on a network fetch mid-transition.
    SLIDES.forEach((slide) => {
      const src = getSlideImageSrc(slide);
      if (!src) return;
      const preload = new window.Image();
      preload.src = src;
    });

    startTimer();
    return () => window.clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startTimer() {
    window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, AUTO_MS);
  }

  function goTo(index) {
    setActive(index);
    startTimer();
  }

  function prevSlide() {
    goTo((active - 1 + SLIDES.length) % SLIDES.length);
  }

  function nextSlide() {
    goTo((active + 1) % SLIDES.length);
  }

  return (
    <section className="hero">
      {SLIDES.map((slide, i) => (
        <HeroSlide key={slide.id} slide={slide} isActive={i === active} />
      ))}

      <button
        type="button"
        className="hero__nav hero__nav--prev"
        aria-label="Previous slide"
        onClick={prevSlide}
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
      </button>
      <button
        type="button"
        className="hero__nav hero__nav--next"
        aria-label="Next slide"
        onClick={nextSlide}
      >
        <ChevronRight size={22} strokeWidth={2.5} />
      </button>

      <div className="hero__dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`hero__dot ${i === active ? "is-active" : ""}`}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
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
