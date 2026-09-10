"use client";

import { Play } from "lucide-react";
import StarRating from "../common/StarRating";
import { useReveal } from "@/hooks/useReveal";
import "./Testimonials.css";

const videoImg = "/assets/products/fabric-wardrobe.jpg";

const TESTIMONIALS = [
  {
    quote:
      "The trimmer is genuinely powerful for the price — no pulling, no nicks, and the battery lasts for weeks.",
    name: "Maya R.",
    tag: "Verified Buyer",
  },
  {
    quote:
      "The wardrobe closet finally made use of that awkward dead space in my bedroom. Sturdy and easy to assemble.",
    name: "Daniel K.",
    tag: "Verified Buyer",
  },
];

function TestimonialCard({ t, index }) {
  const { ref, className, style } = useReveal({ delay: index * 100 });
  return (
    <div ref={ref} className={`testimonial-card ${className}`} style={style}>
      <StarRating rating={5} />
      <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
      <p className="testimonial-card__name">{t.name}</p>
      <p className="testimonial-card__tag">{t.tag}</p>
    </div>
  );
}

export default function Testimonials() {
  const videoReveal = useReveal({ delay: 150 });

  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section-heading">What Our Customers Say</h2>
        <div className="testimonials__grid">
          <div className="testimonials__list">
            {TESTIMONIALS.map((t, index) => (
              <TestimonialCard t={t} index={index} key={t.name} />
            ))}
          </div>
          <button
            ref={videoReveal.ref}
            type="button"
            className={`testimonials__video ${videoReveal.className}`}
            style={videoReveal.style}
          >
            <img src={videoImg} alt="Customer video review" />
            <span className="testimonials__play">
              <Play size={22} fill="#fff" />
            </span>
            <div className="testimonials__video-caption">
              <p>&ldquo;Watch my full trimmer and wardrobe unboxing, three months later.&rdquo;</p>
              <span>Priya S. — Video Review</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
