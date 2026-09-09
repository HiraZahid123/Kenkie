"use client";

import { useState } from "react";
import "./NewsletterSection.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div className="newsletter__copy">
          <h2>Get 10% Off Your First Order</h2>
          <p>New gadgets, restocks and exclusive deals — straight to your inbox.</p>
        </div>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit" className="btn btn-green">
            Subscribe
          </button>
        </form>
        {submitted && <p className="newsletter__success">Thanks for subscribing! Check your inbox for your code.</p>}
      </div>
    </section>
  );
}
