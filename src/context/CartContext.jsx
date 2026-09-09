"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "kenkie_cart";

const lineKey = (id, variant) => `${id}::${variant || "default"}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      /* storage unavailable, ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [items, hydrated]);

  const addToCart = (product, quantity = 1, variant = null) => {
    setItems((prev) => {
      const key = lineKey(product.id, variant);
      const existing = prev.find((line) => lineKey(line.id, line.variant) === key);
      if (existing) {
        return prev.map((line) =>
          lineKey(line.id, line.variant) === key
            ? { ...line, quantity: line.quantity + quantity }
            : line
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          variant,
          quantity,
        },
      ];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id, variant = null) => {
    const key = lineKey(id, variant);
    setItems((prev) => prev.filter((line) => lineKey(line.id, line.variant) !== key));
  };

  const updateQuantity = (id, variant, quantity) => {
    const key = lineKey(id, variant);
    if (quantity <= 0) {
      removeFromCart(id, variant);
      return;
    }
    setItems((prev) =>
      prev.map((line) =>
        lineKey(line.id, line.variant) === key ? { ...line, quantity } : line
      )
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity, 0),
    [items]
  );

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    itemCount,
    isCartOpen,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
