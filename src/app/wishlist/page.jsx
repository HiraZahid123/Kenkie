"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ProductGrid from "@/components/ProductGrid";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import "@/styles/pages/Wishlist.css";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const wishlistProducts = products.filter((p) => ids.includes(p.id));

  return (
    <>
      <Breadcrumbs trail={[{ label: "Wishlist" }]} />
      <section className="section wishlist-page">
        <div className="container">
          <h1 className="wishlist-page__title">Your Wishlist</h1>
          {wishlistProducts.length === 0 ? (
            <div className="wishlist-page__empty">
              <Heart size={44} strokeWidth={1} />
              <p>You haven&apos;t saved any products yet.</p>
              <Link href="/shop" className="btn btn-primary">
                Browse Products
              </Link>
            </div>
          ) : (
            <ProductGrid products={wishlistProducts} />
          )}
        </div>
      </section>
    </>
  );
}
