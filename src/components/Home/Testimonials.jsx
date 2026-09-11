"use client";

import { Play, Quote, BadgeCheck } from "lucide-react";
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
  const initials = t.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div ref={ref} className={`testimonial-card ${className}`} style={style}>
      <Quote className="testimonial-card__mark" size={38} strokeWidth={0} fill="currentColor" />
      <StarRating rating={5} />
      <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
      <div className="testimonial-card__author">
        <span className="testimonial-card__avatar">{initials}</span>
        <div className="testimonial-card__author-text">
          <p className="testimonial-card__name">
            {t.name}
            <BadgeCheck size={14} className="testimonial-card__verified" />
          </p>
          <p className="testimonial-card__tag">{t.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const videoReveal = useReveal({ delay: 150 });

  return (
    <section className="section testimonials">
      <div className="container">
        <span className="eyebrow-badge eyebrow-badge--center">Loved By Customers</span>
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="section-subheading">Real reviews from real KENKIE homes.</p>
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
            <span className="testimonials__video-badge">Customer Video</span>
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
