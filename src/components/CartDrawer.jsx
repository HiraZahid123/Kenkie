"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import QuantitySelector from "./common/QuantitySelector";
import { formatPrice } from "@/utils/format";
import "./CartDrawer.css";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, subtotal } = useCart();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <div className={`cart-drawer ${isCartOpen ? "is-open" : ""}`}>
      <div className="cart-drawer__backdrop" onClick={closeCart} />
      <aside className="cart-drawer__panel" aria-hidden={!isCartOpen}>
        <div className="cart-drawer__header">
          <h3>Your Cart ({items.reduce((n, l) => n + l.quantity, 0)})</h3>
          <button type="button" onClick={closeCart} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <p>Your cart is empty.</p>
            <Link href="/shop" className="btn btn-primary" onClick={closeCart}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {items.map((line) => (
                <div className="cart-line" key={`${line.id}-${line.variant || "default"}`}>
                  <img src={line.image} alt={line.name} />
                  <div className="cart-line__info">
                    <Link href={`/product/${line.slug}`} onClick={closeCart} className="cart-line__name">
                      {line.name}
                    </Link>
                    {line.variant && <p className="cart-line__variant">{line.variant}</p>}
                    <p className="cart-line__price">{formatPrice(line.price)}</p>
                    <div className="cart-line__row">
                      <QuantitySelector
                        quantity={line.quantity}
                        onChange={(q) => updateQuantity(line.id, line.variant, q)}
                      />
                      <button
                        type="button"
                        className="cart-line__remove"
                        onClick={() => removeFromCart(line.id, line.variant)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-drawer__footer">
              <div className="cart-drawer__subtotal">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <Link href="/cart" className="btn btn-outline-dark btn-block" onClick={closeCart}>
                View Cart
              </Link>
              <Link href="/cart" className="btn btn-primary btn-block" onClick={closeCart}>
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
