import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/utils/format";
import "./NewArrivalFeature.css";

export default function NewArrivalFeature() {
  const product = getProductBySlug("kenkie-smart-video-doorbell-2-0");
  if (!product) return null;

  return (
    <section className="section new-arrival">
      <div className="container new-arrival__inner">
        <div className="new-arrival__copy">
          <p className="new-arrival__eyebrow">New Arrival</p>
          <h2 className="new-arrival__title">{product.name}</h2>
          <p className="new-arrival__desc">{product.shortDescription}</p>
          <Link href={`/product/${product.slug}`} className="btn btn-primary">
            Shop Now
          </Link>
        </div>
        <div className="new-arrival__media">
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
