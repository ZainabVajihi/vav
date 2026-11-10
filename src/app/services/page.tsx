import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import PageNav from "@/components/PageNav";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

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

      <PageNav current="/services" />
    </>
  );
}
