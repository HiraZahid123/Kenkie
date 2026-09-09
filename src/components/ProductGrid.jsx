import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products, emptyMessage = "No products found." }) {
  if (!products.length) {
    return <div className="product-grid__empty">{emptyMessage}</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
