import { Play } from "lucide-react";
import StarRating from "../common/StarRating";
import "./Testimonials.css";

const deskImg = "/assets/products/computer-desk.jpeg";

const TESTIMONIALS = [
  {
    quote:
      "The doorbell took ten minutes to install and the night vision picks up every detail. Genuinely useful, not gimmicky.",
    name: "Maya R.",
    tag: "Verified Buyer",
  },
  {
    quote:
      "The corner shelf finally made use of that awkward dead space in my kitchen. Sturdy and easy to assemble.",
    name: "Daniel K.",
    tag: "Verified Buyer",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section-heading">What Our Customers Say</h2>
        <div className="testimonials__grid">
          <div className="testimonials__list">
            {TESTIMONIALS.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <StarRating rating={5} />
                <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                <p className="testimonial-card__name">{t.name}</p>
                <p className="testimonial-card__tag">{t.tag}</p>
              </div>
            ))}
          </div>
          <button type="button" className="testimonials__video">
            <img src={deskImg} alt="Customer video review" />
            <span className="testimonials__play">
              <Play size={22} fill="#fff" />
            </span>
            <div className="testimonials__video-caption">
              <p>&ldquo;Watch my full doorbell and desk unboxing, three months later.&rdquo;</p>
              <span>Priya S. — Video Review</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
