import { Truck, ShieldCheck, Headset, RotateCcw } from "lucide-react";
import "./FeatureBar.css";

const FEATURES = [
  { icon: Truck, title: "Free Delivery", desc: "On orders over £50" },
  { icon: ShieldCheck, title: "Secure Payment", desc: "100% protected checkout" },
  { icon: Headset, title: "24/7 Support", desc: "Dedicated help, anytime" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
];

export default function FeatureBar() {
  return (
    <section className="feature-bar">
      <div className="container feature-bar__grid">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div className="feature-bar__item" key={title}>
            <Icon size={26} strokeWidth={1.5} />
            <div>
              <p className="feature-bar__title">{title}</p>
              <p className="feature-bar__desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
