import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { LogoMark } from "@/components/Logo";
import PageHero from "@/components/PageHero";
import PageNav from "@/components/PageNav";
import Reveal from "@/components/Reveal";
import { tech, whyUs } from "@/lib/site";
import type { IconName } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "VAV IT Solutions is a software development company that turns ideas into reliable, easy-to-use software.",
};

const values: { icon: IconName; title: string; text: string }[] = [
  { icon: "compass", title: "Clarity", text: "Plain language, honest estimates and software that explains itself." },
  { icon: "brain", title: "Craft", text: "Clean architecture and careful logic, because good code is cheaper to own." },
  { icon: "users", title: "Partnership", text: "We measure success by your outcomes, not by hours billed." },
  { icon: "rocket", title: "Momentum", text: "Ship early, learn fast, improve continuously." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About VAV" title="Engineers who" accent="love a good problem." ghost="About">
        We&apos;re a software development company built on one belief: technology should make work simpler,
        not more complicated.
      </PageHero>

      <section className="section pt-0">
        <div className="container about-grid">
          <Reveal className="about-visual">
            <div className="about-hex">
              <LogoMark size={150} />
            </div>
            <div className="about-badge">
              <strong>360°</strong>
              <span>IT partner from idea to support</span>
            </div>
          </Reveal>
          <Reveal delay={100} className="about-copy">
            <h2 className="section-title">Our story</h2>
            <p>
              VAV IT Solutions began with a simple observation: businesses were juggling separate vendors for
              websites, apps, internal software and support, and paying for it in time, money and frustration.
            </p>
            <p>
              So we built one team that does it all. Today we help companies of every size design enterprise
              systems, launch websites and mobile apps, build dependable desktop software and automate the
              repetitive tasks that slow people down.
            </p>
            <p>
              Our edge is <strong>logic</strong>. Before a single line of code, we untangle the workflow, find the
              simplest path and design software around the people who&apos;ll use it every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">What drives us</p>
            <h2 className="section-title">Our <span className="grad-text">values</span></h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="value-card">
                <span className="hex-icon"><Icon name={v.icon} size={24} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container why-grid">
          <Reveal>
            <p className="eyebrow">Why VAV</p>
            <h2 className="section-title">What you can <span className="grad-text">count on</span>.</h2>
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

      <section className="section section-alt" id="stack">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">Tech stack</p>
            <h2 className="section-title">Modern tools, <span className="grad-text">proven results</span>.</h2>
            <p className="section-lead">We pick technology to fit the problem, not the other way round. A snapshot of what we work with:</p>
          </Reveal>
          <Reveal className="tech-cloud center">
            {tech.map((t) => (
              <span key={t} className="tag tag-lg">{t}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <PageNav current="/about" />
    </>
  );
}
