import { redirect } from "next/navigation";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ProductGrid from "@/components/ProductGrid";
import { getCategoryBySlug } from "@/data/categories";
import { products } from "@/data/products";
import "@/styles/pages/Category.css";

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    redirect("/shop");
  }

  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <>
      <Breadcrumbs trail={[{ label: "Shop", to: "/shop" }, { label: categoryData.name }]} />
      <section className="category-hero" style={{ backgroundImage: `url(${categoryData.image})` }}>
        <div className="category-hero__overlay" />
        <div className="container category-hero__content">
          <h1>{categoryData.name}</h1>
          <p>{categoryData.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ProductGrid
            products={categoryProducts}
            emptyMessage="No products in this category yet. Check back soon."
          />
        </div>
      </section>
    </>
  );
}
