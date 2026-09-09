"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import { formatPrice } from "@/utils/format";
import "./SearchModal.css";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!isOpen) return null;

  const matches = query.trim()
    ? products
        .filter((p) => p.name.toLowerCase().includes(query.trim().toLowerCase()))
        .slice(0, 6)
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div className="search-modal" role="dialog" aria-modal="true">
      <div className="search-modal__backdrop" onClick={onClose} />
      <div className="search-modal__panel">
        <form className="search-modal__form" onSubmit={handleSubmit}>
          <Search size={20} className="search-modal__icon" />
          <input
            ref={inputRef}
            type="search"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-modal__input"
          />
          <button type="button" className="search-modal__close" onClick={onClose} aria-label="Close search">
            <X size={22} />
          </button>
        </form>

        {matches.length > 0 && (
          <div className="search-modal__results">
            {matches.map((p) => (
              <button
                key={p.id}
                className="search-modal__result"
                onClick={() => {
                  router.push(`/product/${p.slug}`);
                  onClose();
                }}
              >
                <img src={p.image} alt="" />
                <div>
                  <p className="search-modal__result-name">{p.name}</p>
                  <p className="search-modal__result-price">{formatPrice(p.price)}</p>
                </div>
              </button>
            ))}
            <button className="search-modal__viewall" onClick={handleSubmit}>
              View all results for &ldquo;{query}&rdquo;
            </button>
          </div>
        )}

        {query.trim() && matches.length === 0 && (
          <p className="search-modal__empty">No products found for &ldquo;{query}&rdquo;.</p>
        )}
      </div>
    </div>
  );
}
