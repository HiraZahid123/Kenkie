"use client";

import { useState } from "react";
import { Check, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import StarRating from "./common/StarRating";
import QuantitySelector from "./common/QuantitySelector";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/format";
import "./ProductDetails.css";

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initial = {};
    Object.entries(product.options || {}).forEach(([key, values]) => {
      initial[key] = values[0];
    });
    return initial;
  });
  const [added, setAdded] = useState(false);

  const variantLabel = Object.values(selectedOptions).filter(Boolean).join(" / ") || null;

  const handleAddToCart = () => {
    addToCart(product, quantity, variantLabel);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="product-details">
      <div className="product-details__gallery">
        {product.badge && (
          <span className={`product-details__badge product-details__badge--${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details__info">
        <h1>{product.name}</h1>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size={16} />

        <div className="product-details__price">
          <span className="product-details__price-current">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="product-details__price-old">{formatPrice(product.oldPrice)}</span>
          )}
        </div>

        <p className="product-details__short">{product.shortDescription}</p>

        {Object.entries(product.options || {}).map(([optionName, values]) => (
          <div className="product-details__option" key={optionName}>
            <p className="product-details__option-label">{optionName}</p>
            <div className="product-details__option-values">
              {values.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`product-details__option-btn ${
                    selectedOptions[optionName] === value ? "is-selected" : ""
                  }`}
                  onClick={() => setSelectedOptions((prev) => ({ ...prev, [optionName]: value }))}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="product-details__actions">
          <QuantitySelector quantity={quantity} onChange={setQuantity} />
          <button
            type="button"
            className="btn btn-primary product-details__add"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {added ? (
              <>
                <Check size={16} /> Added to Cart
              </>
            ) : product.inStock ? (
              "Add to Cart"
            ) : (
              "Out of Stock"
            )}
          </button>
        </div>

        <ul className="product-details__perks">
          <li>
            <Truck size={16} /> Free delivery on orders over £50
          </li>
          <li>
            <ShieldCheck size={16} /> Secure payment, 100% protected checkout
          </li>
          <li>
            <RotateCcw size={16} /> 30-day easy returns
          </li>
        </ul>

        <div className="product-details__description">
          <h3>Description</h3>
          <p>{product.description}</p>
          {product.features?.length > 0 && (
            <ul className="product-details__features">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
