export default function PageHero({
  eyebrow,
  title,
  accent,
  ghost,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  ghost: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="hex-grid-bg" aria-hidden="true" />
      <div className="container">
        <span className="ghost-word" aria-hidden="true">{ghost}</span>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">
          {title} <span className="grad-text">{accent}</span>
        </h1>
        {children && <p className="page-lead">{children}</p>}
      </div>
    </section>
  );
}
