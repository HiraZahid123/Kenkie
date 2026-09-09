import Link from "next/link";
import "@/styles/pages/NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <h1>404</h1>
        <p>We couldn&apos;t find the page you&apos;re looking for.</p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
