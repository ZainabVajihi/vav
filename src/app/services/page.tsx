import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import PageNav from "@/components/PageNav";
import Reveal from "@/components/Reveal";
import { industries, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Enterprise software, business websites, mobile apps, desktop applications, automation tools and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything IT," accent="under one roof." ghost="Services">
        Whether you need a full enterprise platform or a single tool that saves your team an hour a day, we
        design, build and support it end to end.
      </PageHero>

      <section className="section pt-0">
        <div className="container services-grid">
          {services.map((s, i) => (
            <Reveal as="article" key={s.id} id={s.id} delay={(i % 2) * 80} className="service-card">
              <div className="service-card-head">
                <span className="hex-icon lg"><Icon name={s.icon} size={28} /></span>
                <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h2>{s.title}</h2>
              <p>{s.summary}</p>
              <ul className="check-list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link href="/contact" className="text-link">Discuss this service →</Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt" id="industries">
        <div className="container">
          <Reveal className="section-head center">
            <p className="eyebrow">Industries</p>
            <h2 className="section-title">
              Built for <span className="grad-text">how your business runs</span>.
            </h2>
            <p className="section-lead">
              Ready-to-tailor software for firms that juggle projects, materials, vendors and payments every day.
            </p>
          </Reveal>
          <div className="industry-grid">
            {industries.map((ind, i) => (
              <Reveal as="article" key={ind.title} delay={i * 70} className="industry-card">
                <span className="hex-icon lg"><Icon name={ind.icon} size={28} /></span>
                <div>
                  <h3>{ind.title}</h3>
                  <p>{ind.text}</p>
                  <ul className="check-list">
                    {ind.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="inline-cta">
            <p>Run a construction or interior firm? See the systems we can build for you.</p>
            <Link href="/solutions" className="btn btn-primary">View solutions</Link>
          </div>
        </div>
      </section>

      <PageNav current="/services" />
    </>
  );
}
