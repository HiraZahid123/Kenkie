"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import StarRating from "./common/StarRating";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/utils/format";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product.id);
  };

  return (
    <div className="product-card">
      <Link href={`/product/${product.slug}`} className="product-card__media">
        {product.badge && (
          <span className={`product-card__badge product-card__badge--${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
        <button
          type="button"
          className={`product-card__wishlist ${wishlisted ? "is-active" : ""}`}
          onClick={handleWishlist}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={16} fill={wishlisted ? "var(--color-sale)" : "none"} />
        </button>
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-card__body">
        <Link href={`/product/${product.slug}`} className="product-card__name">
          {product.name}
        </Link>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="product-card__price">
          <span className="product-card__price-current">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="product-card__price-old">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
        <button
          type="button"
          className="btn btn-outline-dark btn-block product-card__add"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}
