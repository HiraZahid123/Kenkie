"use client";

import Link from "next/link";
import { Trash2, ShoppingBag } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import QuantitySelector from "@/components/common/QuantitySelector";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/format";
import "@/styles/pages/Cart.css";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();

  return (
    <>
      <Breadcrumbs trail={[{ label: "Cart" }]} />
      <section className="section cart-page">
        <div className="container">
          <h1 className="cart-page__title">Your Cart</h1>

          {items.length === 0 ? (
            <div className="cart-page__empty">
              <ShoppingBag size={48} strokeWidth={1} />
              <p>Your cart is currently empty.</p>
              <Link href="/shop" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="cart-page__layout">
              <div className="cart-page__items">
                <div className="cart-page__head">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Total</span>
                  <span />
                </div>
                {items.map((line) => (
                  <div className="cart-page__row" key={`${line.id}-${line.variant || "default"}`}>
                    <div className="cart-page__product">
                      <img src={line.image} alt={line.name} />
                      <div>
                        <Link href={`/product/${line.slug}`}>{line.name}</Link>
                        {line.variant && <p className="cart-page__variant">{line.variant}</p>}
                      </div>
                    </div>
                    <span className="cart-page__price" data-label="Price">
                      {formatPrice(line.price)}
                    </span>
                    <span data-label="Quantity">
                      <QuantitySelector
                        quantity={line.quantity}
                        onChange={(q) => updateQuantity(line.id, line.variant, q)}
                      />
                    </span>
                    <span className="cart-page__price" data-label="Total">
                      {formatPrice(line.price * line.quantity)}
                    </span>
                    <button
                      type="button"
                      className="cart-page__remove"
                      onClick={() => removeFromCart(line.id, line.variant)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                ))}
                <button type="button" className="cart-page__clear" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>

              <aside className="cart-page__summary">
                <h3>Order Summary</h3>
                <div className="cart-page__summary-row">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="cart-page__summary-row">
                  <span>Shipping</span>
                  <span>{subtotal >= 50 ? "Free" : formatPrice(4.99)}</span>
                </div>
                <div className="cart-page__summary-row cart-page__summary-row--total">
                  <span>Total</span>
                  <span>{formatPrice(subtotal >= 50 ? subtotal : subtotal + 4.99)}</span>
                </div>
                <button type="button" className="btn btn-primary btn-block">
                  Proceed to Checkout
                </button>
                <Link href="/shop" className="cart-page__continue">
                  Continue Shopping
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
