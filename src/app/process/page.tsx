import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageNav from "@/components/PageNav";
import Reveal from "@/components/Reveal";
import { faqs, process } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description: "How VAV IT Solutions takes your idea from discovery to delivery, and supports it after launch.",
};

const models = [
  { title: "Fixed scope", text: "Clear requirements, fixed price and timeline. Ideal for websites and well-defined apps.", best: "Websites · MVPs" },
  { title: "Dedicated team", text: "A team that works as an extension of yours, billed monthly. Ideal for evolving products.", best: "Products · Startups" },
  { title: "Support retainer", text: "Ongoing maintenance, updates and small features with guaranteed response times.", best: "Live systems" },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="Process" title="Clear steps." accent="No surprises." ghost="Process">
        A simple, transparent way of working that keeps you in control, with working software to see at
        every stage.
      </PageHero>

      <section className="section pt-0">
        <div className="container timeline">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 60} className="timeline-item">
              <span className="process-hex">{p.step}</span>
              <div className="timeline-body">
                <h2>{p.title}</h2>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">Engagement models</p>
            <h2 className="section-title">Work with us <span className="grad-text">your way</span>.</h2>
          </Reveal>
          <div className="model-grid">
            {models.map((m, i) => (
              <Reveal key={m.title} delay={i * 80} className="model-card">
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <span className="tag">Best for: {m.best}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-wrap">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Questions, <span className="grad-text">answered.</span></h2>
          </Reveal>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<span className="faq-icon" aria-hidden="true" /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageNav current="/process" />
    </>
  );
}
