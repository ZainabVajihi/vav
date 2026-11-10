import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import PageNav from "@/components/PageNav";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell VAV IT Solutions about your project. Free consultation, reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build" accent="something great." ghost="Contact">
        Share a few details about your idea and we&apos;ll get back within one business day with next steps
        and an honest first opinion. The consultation is free.
      </PageHero>

      <section className="section pt-0">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <a href={`mailto:${site.email}`} className="contact-card">
              <span className="hex-icon"><Icon name="mail" size={22} /></span>
              <span><small>Email us</small>{site.email}</span>
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="contact-card">
              <span className="hex-icon"><Icon name="phone" size={22} /></span>
              <span><small>Call us</small>{site.phone}</span>
            </a>
            <div className="contact-card">
              <span className="hex-icon"><Icon name="globe" size={22} /></span>
              <span><small>Where</small>{site.location}</span>
            </div>
            <div className="contact-next">
              <h3>What happens next?</h3>
              <ol>
                <li>We read your brief and reply within 24 hours.</li>
                <li>A free 30-minute discovery call.</li>
                <li>You receive a clear proposal with scope, timeline and cost.</li>
              </ol>
            </div>
          </Reveal>
          <Reveal delay={100} className="form-panel">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <PageNav current="/contact" />
    </>
  );
}
