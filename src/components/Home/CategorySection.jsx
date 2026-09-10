"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { useReveal } from "@/hooks/useReveal";
import "./CategorySection.css";

function CategoryCard({ cat, index }) {
  const { ref, className, style } = useReveal({ delay: index * 90 });
  return (
    <Link
      ref={ref}
      href={`/category/${cat.slug}`}
      className={`category-card ${className}`}
      style={style}
    >
      <img src={cat.image} alt={cat.name} />
      <span className="category-card__name">{cat.name}</span>
    </Link>
  );
}

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="container">
        <h2 className="section-heading">Popular Categories</h2>
        <p className="section-subheading">Shop the pieces our customers reach for again and again.</p>
      </div>
      <div className="category-section__band">
        <div className="container category-section__band-inner">
          <span className="category-section__wordmark">Kenkie</span>
          <div className="category-grid">
            {categories.map((cat, index) => (
              <CategoryCard key={cat.slug} cat={cat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
