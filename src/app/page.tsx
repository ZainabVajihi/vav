import Link from "next/link";
import HexMenu from "@/components/HexMenu";
import HexNetwork from "@/components/HexNetwork";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { features, process, services, tech, whyUs } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="hero">
        <div className="hex-grid-bg" aria-hidden="true" />
        <HexNetwork />
        <div className="glow glow-a" aria-hidden="true" />
        <div className="glow glow-b" aria-hidden="true" />

        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="pill">
              <span className="pill-dot" /> All IT solutions · One place
            </p>
            <h1 className="hero-title">
              We bring your <span className="grad-text">ideas to life</span> with IT.
            </h1>
            <p className="hero-lead">
              VAV IT Solutions designs and builds enterprise software, business websites, mobile and desktop apps,
              plus the smart little tools that make everyday work simpler.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start your project
              </Link>
              <Link href="/services" className="btn btn-ghost btn-lg">
                Explore services →
              </Link>
            </div>
            <ul className="hero-proof">
              <li><Icon name="building" size={18} /> Enterprise</li>
              <li><Icon name="globe" size={18} /> Web</li>
              <li><Icon name="phone" size={18} /> Mobile</li>
              <li><Icon name="monitor" size={18} /> Desktop</li>
            </ul>
          </div>
          <div className="hero-hex">
            <HexMenu />
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true"><span /></div>
      </section>

      {/* ───── Marquee ───── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="marquee-item">
              <svg width="14" height="16" viewBox="0 0 14 16"><path d="M7 0l7 4v8l-7 4-7-4V4z" fill="currentColor" /></svg>
              {s.title}
            </span>
          ))}
        </div>
      </div>

      {/* ───── Features ───── */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Why businesses choose VAV</p>
            <h2 className="section-title">
              One partner for <span className="grad-text">every layer</span> of your tech.
            </h2>
            <p className="section-lead">
              From the first idea to the thousandth user, we cover strategy, design, engineering and support, so you
              never have to juggle five vendors again.
            </p>
          </Reveal>

          <div className="feature-grid">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70} className={`feature-card${i === 0 ? " feature-lead" : ""}`}>
                <span className="hex-icon"><Icon name={f.icon} size={24} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
            <Reveal delay={features.length * 70} className="feature-card feature-cta">
              <div>
                <h3>Have a problem worth solving?</h3>
                <p>Tell us about it. Your first consultation is free.</p>
              </div>
              <Link href="/contact" className="btn btn-primary">Talk to us →</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── Services preview ───── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head split">
            <div>
              <p className="eyebrow">What we build</p>
              <h2 className="section-title">
                Software for <span className="grad-text">every screen</span>.
              </h2>
            </div>
            <Link href="/services" className="btn btn-ghost">All services →</Link>
          </Reveal>

          <div className="service-list">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <Link href={`/services#${s.id}`} className="service-row">
                  <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="service-icon"><Icon name={s.icon} size={22} /></span>
                  <span className="service-body">
                    <span className="service-title">{s.title}</span>
                    <span className="service-sum">{s.summary}</span>
                  </span>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Process ───── */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">How we work</p>
            <h2 className="section-title">
              From <span className="grad-text">idea</span> to <span className="grad-text">impact</span> in four steps.
            </h2>
          </Reveal>
          <ol className="process-track">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 90} className="process-step">
                <span className="process-hex">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Why us + tech ───── */}
      <section className="section section-alt">
        <div className="container why-grid">
          <Reveal>
            <p className="eyebrow">Our edge</p>
            <h2 className="section-title">
              Strong logic. <br />
              <span className="grad-text">Simple software.</span>
            </h2>
            <p className="section-lead">
              Great software isn&apos;t about more features. It&apos;s about solving the right problem cleanly.
              We think hard so your users don&apos;t have to.
            </p>
            <div className="tech-cloud">
              {tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </Reveal>
          <div className="why-list">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 80} className="why-item">
                <span className="why-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                </span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
