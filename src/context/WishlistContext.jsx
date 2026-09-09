"use client";

import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);
const STORAGE_KEY = "kenkie_wishlist";

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setIds(JSON.parse(stored));
    } catch {
      /* storage unavailable, ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [ids, hydrated]);

  const toggleWishlist = (id) => {
    setIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isWishlisted = (id) => ids.includes(id);

  return (
    <WishlistContext.Provider value={{ ids, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
};
