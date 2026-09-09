"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import "@/styles/pages/Search.css";

export default function SearchClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(query);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = new URLSearchParams();
    if (inputValue.trim()) next.set("q", inputValue.trim());
    router.push(`${pathname}?${next.toString()}`);
  };

  return (
    <>
      <Breadcrumbs trail={[{ label: "Search" }]} />
      <section className="section search-page">
        <div className="container">
          <form className="search-page__form" onSubmit={handleSubmit}>
            <SearchIcon size={18} />
            <input
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search for products..."
              aria-label="Search products"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>

          {query && (
            <p className="search-page__meta">
              {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
          )}

          {query ? (
            <ProductGrid
              products={results}
              emptyMessage={`We couldn't find anything for "${query}". Try a different search term.`}
            />
          ) : (
            <p className="search-page__prompt">Start typing above to search the KENKIE catalogue.</p>
          )}
        </div>
      </section>
    </>
  );
}
