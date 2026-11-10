import Link from "next/link";
import { nav } from "@/lib/site";

/** Prev / next page links at the bottom of inner pages. */
export default function PageNav({ current }: { current: string }) {
  const i = nav.findIndex((n) => n.href === current);
  const prev = nav[(i - 1 + nav.length) % nav.length];
  const next = nav[(i + 1) % nav.length];
  return (
    <nav className="page-nav container" aria-label="Page navigation">
      <Link href={prev.href} className="page-nav-link">
        <span className="pn-dir">← Previous</span>
        <span className="pn-label">{prev.label}</span>
      </Link>
      <Link href={next.href} className="page-nav-link next">
        <span className="pn-dir">Next →</span>
        <span className="pn-label">{next.label}</span>
      </Link>
    </nav>
  );
}
