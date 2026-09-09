"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import NavLink from "../common/NavLink";
import AnnouncementBar from "./AnnouncementBar";
import MobileMenu from "./MobileMenu";
import SearchModal from "./SearchModal";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import "./Header.css";

const logo = "/assets/brand/logo.png";

const LEFT_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/shop", label: "Shop" },
  { to: "/category/electronics", label: "Electronics" },
  { to: "/category/kitchen", label: "Kitchen" },
  { to: "/category/storage", label: "Storage" },
];

const RIGHT_LINKS = [
  { to: "/category/furniture", label: "Furniture" },
  { to: "/shop?filter=sale", label: "Sale", accent: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { ids: wishlistIds } = useWishlist();

  return (
    <>
      <header className="site-header">
        <AnnouncementBar />
        <div className="container site-header__row">
          <button
            type="button"
            className="site-header__hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <nav className="site-header__nav site-header__nav--left">
            {LEFT_LINKS.map((link) => (
              <NavLink key={link.to} href={link.to} end={link.end}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link href="/" className="site-header__logo">
            <img src={logo} alt="Kenkie" />
          </Link>

          <nav className="site-header__nav site-header__nav--right">
            {RIGHT_LINKS.map((link) => (
              <NavLink
                key={link.to}
                href={link.to}
                className={link.accent ? "site-header__sale-link" : undefined}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__icons">
            <button type="button" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={19} />
            </button>
            <Link href="/account" aria-label="Account" className="site-header__icon-link">
              <User size={19} />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" className="site-header__icon-link">
              <Heart size={19} />
              {wishlistIds.length > 0 && <span className="site-header__badge">{wishlistIds.length}</span>}
            </Link>
            <button type="button" aria-label="Cart" onClick={openCart} className="site-header__cart-btn">
              <ShoppingBag size={19} />
              {itemCount > 0 && <span className="site-header__badge site-header__badge--cart">{itemCount}</span>}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
