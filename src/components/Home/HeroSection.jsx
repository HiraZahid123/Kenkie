import Link from "next/link";
import { PlayCircle } from "lucide-react";
import "./HeroSection.css";

const heroImage = "/assets/products/doorbell-hero.png";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Home of the Future Gadgets</p>
        <h1 className="hero__title">
          Smarter Living,
          <br />
          Room by Room
        </h1>
        <p className="hero__subtitle">
          From smart doorbells to kitchen essentials — everyday upgrades for every corner of your
          home.
        </p>
        <div className="hero__actions">
          <Link href="/shop" className="btn btn-outline-light">
            Discover Now
          </Link>
          <Link href="/shop-the-story" className="hero__watch">
            <PlayCircle size={20} />
            Watch Our Story
          </Link>
        </div>
      </div>
      <div className="hero__media">
        <img src={heroImage} alt="KENKIE Smart Video Doorbell" />
      </div>
    </section>
  );
}
