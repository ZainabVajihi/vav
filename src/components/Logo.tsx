import { useId } from "react";

/**
 * VAV "Signal" mark — a single continuous zig-zag stroke that reads V·A·V
 * (the middle peak doubles as the A, with its crossbar) inside a hexagon,
 * echoing the honeycomb in the original logo.
 */
export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`g${id}`} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5EF0FF" />
          <stop offset="1" stopColor="#1E6BFF" />
        </linearGradient>
      </defs>
      <path
        d="M32 3.5 56.7 17.75v28.5L32 60.5 7.3 46.25v-28.5L32 3.5Z"
        stroke={`url(#g${id})`}
        strokeWidth="3"
        strokeLinejoin="round"
        fill="rgba(30,107,255,0.08)"
      />
      <path
        d="M14.5 22.5 23 42.5 32 21.5 41 42.5 49.5 22.5"
        stroke={`url(#g${id})`}
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M27.6 34.5h8.8" stroke={`url(#g${id})`} strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="32" cy="21.5" r="2.6" fill="#5EF0FF" />
    </svg>
  );
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo">
      <LogoMark size={compact ? 34 : 40} />
      <span className="logo-text">
        <span className="logo-name">VAV</span>
        <span className="logo-sub">IT Solutions</span>
      </span>
    </span>
  );
}
