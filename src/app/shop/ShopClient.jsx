"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import "@/styles/pages/Shop.css";

const SORTS = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "rating", label: "Top Rated" },
];

export default function ShopClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const activeFilter = searchParams.get("filter");
  const [sort, setSort] = useState("featured");

  const setCategory = (slug) => {
    const next = new URLSearchParams(searchParams.toString());
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    next.delete("filter");
    router.push(`${pathname}?${next.toString()}`);
  };

  const setFilter = (filter) => {
    const next = new URLSearchParams(searchParams.toString());
    next.set("filter", filter);
    router.push(`${pathname}?${next.toString()}`);
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (activeFilter === "sale") {
      list = list.filter((p) => p.oldPrice);
    } else if (activeFilter === "new") {
      list = list.filter((p) => p.badge === "NEW");
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, activeFilter, sort]);

  return (
    <>
      <Breadcrumbs trail={[{ label: "Shop" }]} />
      <section className="section shop-page">
        <div className="container shop-page__layout">
          <aside className="shop-page__sidebar">
            <h3>Category</h3>
            <ul className="shop-page__filter-list">
              <li>
                <button
                  className={activeCategory === "all" && !activeFilter ? "is-active" : ""}
                  onClick={() => setCategory("all")}
                >
                  All Products
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <button
                    className={activeCategory === cat.slug ? "is-active" : ""}
                    onClick={() => setCategory(cat.slug)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
            <h3>Filter</h3>
            <ul className="shop-page__filter-list">
              <li>
                <button
                  className={activeFilter === "sale" ? "is-active" : ""}
                  onClick={() => setFilter("sale")}
                >
                  On Sale
                </button>
              </li>
              <li>
                <button
                  className={activeFilter === "new" ? "is-active" : ""}
                  onClick={() => setFilter("new")}
                >
                  New Arrivals
                </button>
              </li>
            </ul>
          </aside>
          <div className="shop-page__main">
            <div className="shop-page__toolbar">
              <p>{filtered.length} products</p>
              <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
                {SORTS.map((s) => (
                  <option key={s.key} value={s.key}>
                    Sort by: {s.label}
                  </option>
                ))}
              </select>
            </div>
            <ProductGrid
              products={filtered}
              emptyMessage="No products match this filter yet. Try another category."
            />
          </div>
        </div>
      </section>
    </>
  );
}
