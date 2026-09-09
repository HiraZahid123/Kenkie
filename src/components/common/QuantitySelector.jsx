"use client";

import { Minus, Plus } from "lucide-react";
import "./QuantitySelector.css";

export default function QuantitySelector({ quantity, onChange, min = 1, max = 99 }) {
  const decrease = () => onChange(Math.max(min, quantity - 1));
  const increase = () => onChange(Math.min(max, quantity + 1));

  return (
    <div className="quantity-selector">
      <button
        type="button"
        className="quantity-selector__btn"
        onClick={decrease}
        aria-label="Decrease quantity"
        disabled={quantity <= min}
      >
        <Minus size={14} />
      </button>
      <span className="quantity-selector__value">{quantity}</span>
      <button
        type="button"
        className="quantity-selector__btn"
        onClick={increase}
        aria-label="Increase quantity"
        disabled={quantity >= max}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
