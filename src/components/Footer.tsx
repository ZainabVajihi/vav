import Link from "next/link";
import Logo from "./Logo";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">Have an idea?</p>
            <h2 className="footer-cta-title">
              Let&apos;s turn it into <span className="grad-text">working software.</span>
            </h2>
          </div>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Book a free consultation
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>{site.tagline} Enterprise software, websites, mobile and desktop apps, and the everyday tools in between.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.id}><Link href={`/services#${s.id}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
              <li className="muted">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {process.env.BUILD_YEAR} {site.name}. All rights reserved.</span>
          <span className="footer-socials">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href}>{s.label}</a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
