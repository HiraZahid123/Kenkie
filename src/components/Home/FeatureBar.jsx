"use client";

import { Truck, ShieldCheck, Headset, RotateCcw } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import "./FeatureBar.css";

const FEATURES = [
  { icon: Truck, title: "Free Delivery", desc: "On orders over £50" },
  { icon: ShieldCheck, title: "Secure Payment", desc: "100% protected checkout" },
  { icon: Headset, title: "24/7 Support", desc: "Dedicated help, anytime" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
];

function FeatureItem({ icon: Icon, title, desc, index }) {
  const { ref, className, style } = useReveal({ delay: index * 80 });
  return (
    <div ref={ref} className={`feature-bar__item ${className}`} style={style}>
      <Icon size={26} strokeWidth={1.5} />
      <div>
        <p className="feature-bar__title">{title}</p>
        <p className="feature-bar__desc">{desc}</p>
      </div>
    </div>
  );
}

export default function FeatureBar() {
  return (
    <section className="feature-bar">
      <div className="container feature-bar__grid">
        {FEATURES.map((feature, index) => (
          <FeatureItem {...feature} index={index} key={feature.title} />
        ))}
      </div>
    </section>
  );
}
