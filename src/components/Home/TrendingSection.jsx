"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductGrid from "../ProductGrid";
import "./TrendingSection.css";

const TABS = [
  { key: "new", label: "New Arrivals" },
  { key: "best", label: "Best Sellers" },
  { key: "sale", label: "On Sale" },
];

export default function TrendingSection() {
  const [activeTab, setActiveTab] = useState("new");

  const filtered = useMemo(() => {
    if (activeTab === "new") return products.filter((p) => p.badge === "NEW").concat(products.filter((p) => p.badge !== "NEW"));
    if (activeTab === "best") return [...products].sort((a, b) => b.reviewCount - a.reviewCount);
    if (activeTab === "sale") return products.filter((p) => p.oldPrice);
    return products;
  }, [activeTab]);

  return (
    <section className="section trending">
      <div className="container">
        <div className="trending__header">
          <div>
            <h2 className="trending__heading">Trending Now</h2>
            <p className="trending__subheading">
              Hand-picked gadgets and home essentials our customers love.
            </p>
          </div>
          <div className="trending__tabs">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`trending__tab ${activeTab === tab.key ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <ProductGrid products={filtered.slice(0, 10)} />
      </div>
    </section>
  );
}
