"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import "./AnnouncementBar.css";

const MESSAGES = [
  "Free shipping on all orders over £50",
  "New arrivals added weekly — shop the latest gadgets",
  "10% off your first order when you subscribe",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + MESSAGES.length) % MESSAGES.length);
  const next = () => setIndex((i) => (i + 1) % MESSAGES.length);

  return (
    <div className="announcement-bar">
      <div className="container announcement-bar__inner">
        <button
          type="button"
          className="announcement-bar__arrow"
          onClick={prev}
          aria-label="Previous announcement"
        >
          <ChevronLeft size={16} />
        </button>
        <p className="announcement-bar__message">{MESSAGES[index]}</p>
        <button
          type="button"
          className="announcement-bar__arrow"
          onClick={next}
          aria-label="Next announcement"
        >
          <ChevronRight size={16} />
        </button>
        <div className="announcement-bar__meta">
          <a href="tel:+448007648042" className="announcement-bar__phone">
            <Phone size={13} />
            <span>0800 7648 042</span>
          </a>
          <span className="announcement-bar__divider" />
          <span className="announcement-bar__currency">GBP £</span>
        </div>
      </div>
    </div>
  );
}
