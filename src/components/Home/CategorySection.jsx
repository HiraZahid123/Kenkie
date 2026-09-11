"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <div className="category-card__media">
        <img src={cat.image} alt={cat.name} />
      </div>
      <div className="category-card__body">
        <div className="category-card__text">
          <span className="category-card__name">{cat.name}</span>
          <span className="category-card__desc">{cat.description}</span>
        </div>
        <span className="category-card__arrow">
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export default function CategorySection() {
  return (
    <section className="section category-section">
      <div className="container">
        <span className="eyebrow-badge eyebrow-badge--center">Shop By Category</span>
        <h2 className="section-heading">Popular Categories</h2>
        <p className="section-subheading">Shop the pieces our customers reach for again and again.</p>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <CategoryCard key={cat.slug} cat={cat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
