import { redirect } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ProductDetails from "@/components/ProductDetails";
import ProductGrid from "@/components/ProductGrid";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import "@/styles/pages/ProductDetail.css";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductBySlug(id);

  if (!product) {
    redirect("/shop");
  }

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product, 4);

  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Shop", to: "/shop" },
          { label: category?.name || product.category, to: `/category/${product.category}` },
          { label: product.name },
        ]}
      />
      <section className="section product-detail-page">
        <div className="container">
          <ProductDetails product={product} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section product-detail-page__related">
          <div className="container">
            <h2 className="section-heading">You May Also Like</h2>
            <p className="section-subheading">More picks from the KENKIE range.</p>
            <ProductGrid products={related} />
            <div className="product-detail-page__more">
              <Link href="/shop" className="btn btn-outline-dark">
                Browse All Products
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
