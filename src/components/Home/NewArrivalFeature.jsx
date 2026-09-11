"use client";

import Link from "next/link";
import { getProductBySlug } from "@/data/products";
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
      <div className="container new-arrival__inner">
        <div ref={copyReveal.ref} className={`new-arrival__copy ${copyReveal.className}`}>
          <span className="eyebrow-badge">New Arrival</span>
          <h2 className="new-arrival__title">{product.name}</h2>
          <p className="new-arrival__desc">{product.shortDescription}</p>
          <Link href={`/product/${product.slug}`} className="btn btn-brand btn-pill">
            Shop Now
          </Link>
        </div>
        <div
          ref={mediaReveal.ref}
          className={`new-arrival__media ${mediaReveal.className}`}
          style={mediaReveal.style}
        >
          <img src={product.image} alt={product.name} />
          <div className="new-arrival__price-tag">
            <span>{formatPrice(product.price)}</span>
            <Link href={`/product/${product.slug}`}>Add to Cart</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
