// Central content + config for the VAV IT Solutions website.
// Update contact details here — every page reads from this file.

export const site = {
  name: "VAV IT Solutions",
  short: "VAV",
  tagline: "All IT solutions. One place.",
  description:
    "VAV IT Solutions builds enterprise software, business websites, mobile apps, desktop applications and custom tools that simplify everyday work.",
  // TODO: replace with real contact details
  email: "hello@vavitsolutions.com",
  phone: "+91 00000 00000",
  location: "India · Working with clients worldwide",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type IconName =
  | "layers"
  | "building"
  | "globe"
  | "phone"
  | "monitor"
  | "brain"
  | "bulb"
  | "tool"
  | "cloud"
  | "pen"
  | "plug"
  | "shield"
  | "users"
  | "compass"
  | "code"
  | "rocket"
  | "chat"
  | "info"
  | "flow"
  | "mail";

export const features: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "layers",
    title: "All IT solutions, one place",
    text: "Strategy, design, development, hosting and support under one roof. One team, one point of contact.",
  },
  {
    icon: "building",
    title: "Enterprise-grade software",
    text: "Secure, scalable systems such as ERPs, CRMs and internal platforms, built to handle real business load.",
  },
  {
    icon: "globe",
    title: "Business websites & mobile apps",
    text: "Fast, search-friendly websites and polished Android & iOS apps that turn visitors into customers.",
  },
  {
    icon: "monitor",
    title: "Desktop applications",
    text: "Reliable Windows, macOS and cross-platform apps for billing, inventory, operations and offline work.",
  },
  {
    icon: "brain",
    title: "Strong logic & problem solving",
    text: "We start with the hard part: untangling messy workflows into clear, efficient logic before we write code.",
  },
  {
    icon: "bulb",
    title: "Bring ideas to life with IT",
    text: "Got a napkin sketch? We shape it into a prototype, then into a product people actually use.",
  },
  {
    icon: "tool",
    title: "Tools that simplify your day",
    text: "Custom utilities, automations and dashboards that remove repetitive tasks from your team's day.",
  },
];

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "enterprise",
    icon: "building",
    title: "Enterprise Software",
    summary:
      "Custom ERP, CRM, HRMS and workflow platforms designed around how your organisation really works.",
    points: ["Role-based access & audit trails", "Multi-branch / multi-tenant", "Reporting & analytics", "Legacy system modernisation"],
  },
  {
    id: "web",
    icon: "globe",
    title: "Business Websites",
    summary:
      "Brand-forward, lightning-fast websites and web apps that rank well and are easy for your team to update.",
    points: ["Corporate & landing sites", "E-commerce storefronts", "CMS integration", "SEO & performance tuning"],
  },
  {
    id: "mobile",
    icon: "phone",
    title: "Mobile Applications",
    summary:
      "Native-feeling Android and iOS apps from one codebase, from MVP to store launch and beyond.",
    points: ["Cross-platform (Flutter / React Native)", "Offline-first data", "Push notifications", "App Store & Play Store release"],
  },
  {
    id: "desktop",
    icon: "monitor",
    title: "Desktop Applications",
    summary:
      "Robust desktop software for Windows, macOS and Linux, ideal for billing counters, labs and shop floors.",
    points: [".NET / Electron / Tauri", "Hardware & printer integration", "Local + cloud sync", "Auto-updates"],
  },
  {
    id: "automation",
    icon: "tool",
    title: "Automation & Custom Tools",
    summary:
      "Small, sharp tools that save hours every week, from Excel replacements to bots and internal dashboards.",
    points: ["Workflow automation", "Report generators", "Data import / clean-up", "Chat & email bots"],
  },
  {
    id: "cloud",
    icon: "cloud",
    title: "Cloud, APIs & Integrations",
    summary:
      "Connect your systems so data flows on its own: payments, SMS, WhatsApp, accounting and third-party APIs.",
    points: ["REST & GraphQL APIs", "Payment gateways", "Cloud hosting & DevOps", "Third-party integrations"],
  },
  {
    id: "design",
    icon: "pen",
    title: "UI / UX Design",
    summary:
      "Interfaces that feel obvious. Research, wireframes and pixel-perfect design systems your users will love.",
    points: ["User research", "Wireframes & prototypes", "Design systems", "Usability testing"],
  },
  {
    id: "support",
    icon: "shield",
    title: "Maintenance & Support",
    summary:
      "We stay after launch with monitoring, security patches, backups and new features as your business grows.",
    points: ["SLA-based support", "Security updates", "Performance monitoring", "Feature roadmap"],
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    text: "We listen first. Goals, users, constraints and the daily pain points. Then we map the problem before proposing a solution.",
  },
  {
    step: "02",
    title: "Design",
    text: "Architecture, data model and user flows are designed and shared as clickable prototypes so you see it before we build it.",
  },
  {
    step: "03",
    title: "Develop",
    text: "Short sprints with working demos every week or two. You always know what's done, what's next and what it costs.",
  },
  {
    step: "04",
    title: "Deliver & Evolve",
    text: "Testing, deployment, training and handover, then ongoing support and improvements as your needs grow.",
  },
];

export const whyUs = [
  { title: "Logic before code", text: "Every project starts with untangling the problem. Clean logic means fewer bugs and simpler software." },
  { title: "One accountable team", text: "Design, development, deployment and support handled by one team. No hand-offs, no blame games." },
  { title: "Transparent progress", text: "Weekly demos, clear milestones and honest timelines. You are never left wondering." },
  { title: "Built to grow", text: "Modular architecture that scales with your users, data and ambitions without a rewrite." },
];

export const tech = [
  "Next.js", "React", "TypeScript", "Node.js", ".NET / C#", "Python", "Flutter", "React Native",
  "Electron", "PostgreSQL", "SQL Server", "MySQL", "MongoDB", "AWS", "Azure", "Docker", "REST APIs", "Figma",
];

export type Solution = { title: string; category: "Enterprise" | "Web" | "Mobile" | "Desktop" | "Automation"; text: string; tags: string[] };

export const solutions: Solution[] = [
  { title: "ERP for Manufacturing", category: "Enterprise", text: "Inventory, purchase, production planning and accounts in one connected system.", tags: ["Inventory", "Reports", "Multi-branch"] },
  { title: "CRM & Sales Pipeline", category: "Enterprise", text: "Track leads, follow-ups and deals with automated reminders and dashboards.", tags: ["Leads", "Automation", "Analytics"] },
  { title: "HR & Payroll Suite", category: "Enterprise", text: "Attendance, leave, payroll and employee self-service with role-based access.", tags: ["Payroll", "Self-service"] },
  { title: "Corporate Website", category: "Web", text: "Fast, SEO-ready company site with CMS so your team can update content anytime.", tags: ["SEO", "CMS", "Next.js"] },
  { title: "E-commerce Store", category: "Web", text: "Product catalogue, cart, payments and order tracking with an admin panel.", tags: ["Payments", "Admin"] },
  { title: "Booking & Appointment App", category: "Mobile", text: "Clinics, salons and services: slots, reminders and payments in your customers' pockets.", tags: ["iOS", "Android", "Notifications"] },
  { title: "Field Service App", category: "Mobile", text: "Job assignment, GPS check-ins, photos and signatures that work even offline.", tags: ["Offline", "GPS"] },
  { title: "POS & Billing Software", category: "Desktop", text: "Quick billing, barcode scanning, GST invoices and printer support.", tags: ["Barcode", "Printing"] },
  { title: "Lab / Clinic Management", category: "Desktop", text: "Patient records, test reports and billing designed for busy front desks.", tags: ["Records", "Reports"] },
  { title: "Report Automation Bot", category: "Automation", text: "Pulls data from sheets & systems and emails formatted reports on schedule.", tags: ["Excel", "Email", "Scheduler"] },
  { title: "WhatsApp Notification Engine", category: "Automation", text: "Order updates, reminders and alerts delivered automatically to customers.", tags: ["WhatsApp", "API"] },
  { title: "Internal Admin Dashboard", category: "Automation", text: "Turn scattered spreadsheets into one live dashboard your team can trust.", tags: ["Dashboard", "Data"] },
];

export const faqs = [
  { q: "How much does a project cost?", a: "It depends on scope. After a free discovery call we share a fixed-price quote or a monthly retainer, whichever suits your project. No hidden costs." },
  { q: "How long does it take?", a: "A business website typically takes 2–4 weeks, a mobile app MVP 6–10 weeks, and enterprise systems are delivered in phases. You see progress every sprint." },
  { q: "Will I own the source code?", a: "Yes. Once the project is paid for, the code, designs and documentation are yours." },
  { q: "Do you support the software after launch?", a: "Absolutely. We offer maintenance plans covering bug fixes, security updates, backups and new features." },
  { q: "Can you work with our existing system?", a: "Yes. We regularly integrate with, extend or modernise existing software, databases and third-party tools." },
];
