import Link from "next/link";
import { PlayCircle } from "lucide-react";
import "./HeroSection.css";

const heroImage = "/assets/products/trimmer-hero.png";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">25,000+ Orders · 100% Positive Feedback</p>
        <h1 className="hero__title">
          Everyday Essentials,
          <br />
          Done Right
        </h1>
        <p className="hero__subtitle">
          Grooming tech, kitchen tools, storage and furniture — the everyday upgrades our
          customers keep coming back for.
        </p>
        <div className="hero__actions">
          <Link href="/shop" className="btn btn-outline-light">
            Shop Bestsellers
          </Link>
          <Link href="/shop-the-story" className="hero__watch">
            <PlayCircle size={20} />
            Watch Our Story
          </Link>
        </div>
      </div>
      <div className="hero__media">
        <img src={heroImage} alt="KENKIE Ear & Nose Hair Trimmer" />
      </div>
    </section>
  );
}
