import type { IconName } from "@/lib/site";

const paths: Record<IconName, React.ReactNode> = {
  layers: (<><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="m2 13 10 5 10-5" /><path d="m2 18 10 5 10-5" opacity=".5" /></>),
  building: (<><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" /></>),
  phone: (<><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>),
  monitor: (<><rect x="2.5" y="4" width="19" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>),
  brain: (<><path d="M9 4.5a3 3 0 0 0-5 2.2A3 3 0 0 0 3 12a3 3 0 0 0 2 4.6A3 3 0 0 0 9 19.5V4.5Z" /><path d="M15 4.5a3 3 0 0 1 5 2.2 3 3 0 0 1 1 5.3 3 3 0 0 1-2 4.6 3 3 0 0 1-4 2.9V4.5Z" /><path d="M9 9h2M13 13h2M9 15h2" /></>),
  bulb: (<><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" /></>),
  tool: (<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-1.5 1.5-1.3-1.3-8.5 8.5a2.1 2.1 0 0 1-3-3l8.5-8.5-1.3-1.3L15.4 7l-.7-.7ZM14.7 6.3 11 2.6" />),
  cloud: (<path d="M7 18a5 5 0 1 1 1.2-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18H7Z" />),
  pen: (<><path d="m12 19 7-7 3 3-7 7-3-3Z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" /><circle cx="11" cy="11" r="2" /></>),
  plug: (<path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0V7ZM12 17v5" />),
  shield: (<><path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>),
  users: (<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6" /></>),
  compass: (<><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>),
  code: (<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />),
  rocket: (<><path d="M12 15 9 12c1-4 4-8.5 11-9-.5 7-5 10-9 11Z" /><path d="M9 12H5l2.5-3.5H11M12 15v4l3.5-2.5V13M6 16c-1.5 1-2 3-2 4 1 0 3-.5 4-2" /></>),
  chat: (<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12Z" />),
  info: (<><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.5" /></>),
  flow: (<><rect x="3" y="3" width="6" height="6" rx="1.5" /><rect x="15" y="15" width="6" height="6" rx="1.5" /><path d="M6 9v3a3 3 0 0 0 3 3h6" /></>),
  receipt: (<><path d="M5 3h14v18l-2.3-1.5L14.3 21 12 19.5 9.7 21l-2.4-1.5L5 21V3Z" /><path d="M9 8h6M9 12h6M9 16h3" /></>),
  box: (<><path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" /><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" /></>),
  crane: (<><path d="M5 21V4l-2 3M5 4h15M5 4l5 5M9 4v0M17 4v6" /><rect x="15" y="10" width="4" height="3" rx=".5" /><path d="M2.5 21h7" /></>),
  sofa: (<><path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" /><path d="M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3v-5Z" /><path d="M6 18v2M18 18v2" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6 8.5 7 8.5-7" /></>),
};

export default function Icon({ name, size = 24, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
