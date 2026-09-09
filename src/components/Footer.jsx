import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import "./Footer.css";

const logo = "/assets/brand/logo.png";

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor" {...props}>
    <path d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.05c0-.89.25-1.5 1.52-1.5h1.63V3.8c-.28-.04-1.25-.12-2.38-.12-2.35 0-3.96 1.44-3.96 4.07v2.27H7.65v3.08h2.66V21h3.19z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor" {...props}>
    <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12z" opacity=".18" />
    <path d="M10 15.5v-7l6 3.5-6 3.5z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={logo} alt="Kenkie" className="site-footer__logo" />
          <p>
            Home of the future gadgets — smart gadgets and everyday essentials for every home.
          </p>
          <div className="site-footer__social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
              <span className="site-footer__tiktok">TT</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube size={17} />
            </a>
          </div>
        </div>

        <div className="site-footer__col">
          <h4>Shop</h4>
          <ul>
            <li>
              <Link href="/shop?filter=new">New Arrivals</Link>
            </li>
            <li>
              <Link href="/category/electronics">Electronics</Link>
            </li>
            <li>
              <Link href="/category/kitchen">Kitchen</Link>
            </li>
            <li>
              <Link href="/category/storage">Storage</Link>
            </li>
            <li>
              <Link href="/category/furniture">Furniture</Link>
            </li>
            <li>
              <Link href="/shop?filter=sale">Sale</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/delivery-info">Delivery Info</Link>
            </li>
            <li>
              <Link href="/returns">Returns &amp; Exchanges</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/track-order">Track Order</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>My Account</h4>
          <ul>
            <li>
              <Link href="/account">Sign In</Link>
            </li>
            <li>
              <Link href="/account/orders">Order History</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/account/address">Address Book</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Get In Touch</h4>
          <ul className="site-footer__contact">
            <li>
              <MapPin size={15} />
              <span>Birmingham, United Kingdom</span>
            </li>
            <li>
              <Phone size={15} />
              <a href="tel:+448007648042">0800 7648 042</a>
            </li>
            <li>
              <Mail size={15} />
              <a href="mailto:info@kenkie.com">info@kenkie.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>&copy; {year} Kenkie. All rights reserved.</p>
          <div className="site-footer__legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
