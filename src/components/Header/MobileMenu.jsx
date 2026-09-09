"use client";

import { X } from "lucide-react";
import NavLink from "../common/NavLink";
import { categories } from "@/data/categories";
import "./MobileMenu.css";

const logo = "/assets/brand/logo.png";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
      <div className="mobile-menu__backdrop" onClick={onClose} />
      <div className="mobile-menu__panel">
        <div className="mobile-menu__header">
          <img src={logo} alt="Kenkie" className="mobile-menu__logo" />
          <button type="button" onClick={onClose} aria-label="Close menu" className="mobile-menu__close">
            <X size={22} />
          </button>
        </div>
        <nav className="mobile-menu__nav">
          <NavLink href="/" onClick={onClose} end>
            Home
          </NavLink>
          <NavLink href="/shop" onClick={onClose}>
            Shop
          </NavLink>
          {categories.map((cat) => (
            <NavLink key={cat.slug} href={`/category/${cat.slug}`} onClick={onClose}>
              {cat.name}
            </NavLink>
          ))}
          <NavLink href="/shop?filter=sale" onClick={onClose} className="mobile-menu__sale">
            Sale
          </NavLink>
        </nav>
        <div className="mobile-menu__footer">
          <NavLink href="/cart" onClick={onClose}>
            View Cart
          </NavLink>
          <a href="mailto:info@kenkie.com">info@kenkie.com</a>
        </div>
      </div>
    </div>
  );
}
