"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, end = false, className, activeClassName = "active", children, ...props }) {
  const pathname = usePathname();
  const isActive = end ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  const resolvedClassName =
    typeof className === "function"
      ? className({ isActive })
      : [className, isActive ? activeClassName : ""].filter(Boolean).join(" ");

  return (
    <Link href={href} className={resolvedClassName || undefined} {...props}>
      {children}
    </Link>
  );
}
