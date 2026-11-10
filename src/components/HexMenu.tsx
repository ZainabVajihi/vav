import Link from "next/link";
import Icon from "./Icon";
import type { IconName } from "@/lib/site";

const items: { href: string; label: string; hint: string; icon: IconName }[] = [
  { href: "/services", label: "Services", hint: "What we build", icon: "layers" },
  { href: "/solutions", label: "Solutions", hint: "Ready ideas", icon: "rocket" },
  { href: "/process", label: "Process", hint: "How we work", icon: "flow" },
  { href: "/about", label: "About", hint: "Who we are", icon: "users" },
  { href: "/about#stack", label: "Tech", hint: "Our stack", icon: "code" },
  { href: "/contact", label: "Contact", hint: "Say hello", icon: "chat" },
];

/** Honeycomb navigation, a nod to the Phantom hexagon menu, rebuilt for VAV. */
export default function HexMenu() {
  return (
    <nav className="honeycomb" aria-label="Quick links">
      {items.map((it, i) => (
        <Link key={it.label} href={it.href} className="hex" style={{ ["--i" as string]: i }}>
          <span className="hex-inner">
            <Icon name={it.icon} size={26} />
            <span className="hex-label">{it.label}</span>
            <span className="hex-hint">{it.hint}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
