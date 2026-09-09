import Link from "next/link";
import { ChevronRight } from "lucide-react";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ trail }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container breadcrumbs__inner">
        <Link href="/">Home</Link>
        {trail.map((item, i) => (
          <span key={i} className="breadcrumbs__item">
            <ChevronRight size={13} />
            {item.to ? <Link href={item.to}>{item.label}</Link> : <span>{item.label}</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
