import { Star, StarHalf } from "lucide-react";
import "./StarRating.css";

export default function StarRating({ rating = 0, reviewCount, size = 14 }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const stars = [];

  for (let i = 0; i < 5; i += 1) {
    if (i < full) {
      stars.push(<Star key={i} size={size} fill="var(--color-star)" color="var(--color-star)" />);
    } else if (i === full && hasHalf) {
      stars.push(<StarHalf key={i} size={size} fill="var(--color-star)" color="var(--color-star)" />);
    } else {
      stars.push(<Star key={i} size={size} color="var(--color-star)" />);
    }
  }

  return (
    <div className="star-rating">
      <div className="star-rating__stars">{stars}</div>
      {typeof reviewCount === "number" && (
        <span className="star-rating__count">({reviewCount})</span>
      )}
    </div>
  );
}
