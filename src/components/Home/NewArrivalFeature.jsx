"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import StarRating from "../common/StarRating";
import { useReveal } from "@/hooks/useReveal";
import { formatPrice } from "@/utils/format";
import "./NewArrivalFeature.css";

export default function NewArrivalFeature() {
  const product = getProductBySlug("kenkie-ear-nose-hair-trimmer");
  const copyReveal = useReveal();
  const mediaReveal = useReveal({ delay: 150 });
  if (!product) return null;

  return (
    <section className="section new-arrival">
      <div className="container">
        <div className="new-arrival__panel">
          <span className="new-arrival__glow" aria-hidden="true" />
          <div ref={copyReveal.ref} className={`new-arrival__copy ${copyReveal.className}`}>
            <span className="eyebrow-badge">New Arrival</span>
            <h2 className="new-arrival__title">{product.name}</h2>
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            <p className="new-arrival__desc">{product.shortDescription}</p>
            <div className="new-arrival__actions">
              <Link href={`/product/${product.slug}`} className="btn btn-brand btn-pill">
                Shop Now
                <ArrowRight size={16} />
              </Link>
              <span className="new-arrival__price">{formatPrice(product.price)}</span>
            </div>
          </div>
          <div
            ref={mediaReveal.ref}
            className={`new-arrival__media ${mediaReveal.className}`}
            style={mediaReveal.style}
          >
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
