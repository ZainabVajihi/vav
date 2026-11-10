"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

/**
 * Contact form. With no backend configured it composes an email in the
 * visitor's mail app. To collect submissions server-side, swap `handleSubmit`
 * for a POST to an API route or a form service (Formspree, Resend, etc.).
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState("Not sure yet");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Company: ${f.get("company") || "-"}`,
      `Service: ${f.get("service")}`,
      `Budget: ${budget}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New project enquiry — ${f.get("name")}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <div className="success-hex">✓</div>
        <h3>Thanks, your message is ready to send.</h3>
        <p>Your email app should have opened with the details filled in. Hit send and we&apos;ll reply within one business day.</p>
        <button className="btn btn-ghost" onClick={() => setSent(false)}>Edit message</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span>Full name *</span>
          <input name="name" required autoComplete="name" placeholder="Your name" />
        </label>
        <label className="field">
          <span>Email *</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Company <em>(optional)</em></span>
          <input name="company" autoComplete="organization" placeholder="Company name" />
        </label>
        <label className="field">
          <span>What do you need?</span>
          <select name="service" defaultValue="">
            <option value="" disabled>Choose a service</option>
            {services.map((s) => (
              <option key={s.id}>{s.title}</option>
            ))}
            <option>Something else / not sure</option>
          </select>
        </label>
      </div>
      <fieldset className="field">
        <legend>Estimated budget</legend>
        <div className="chips">
          {["Under ₹1L", "₹1L – ₹5L", "₹5L – ₹15L", "₹15L+", "Not sure yet"].map((b) => (
            <button
              type="button"
              key={b}
              className={`chip${budget === b ? " is-active" : ""}`}
              aria-pressed={budget === b}
              onClick={() => setBudget(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="field">
        <span>Tell us about your idea *</span>
        <textarea name="message" required rows={5} placeholder="What problem are you solving? Who will use it? Any deadlines?" />
      </label>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        Send enquiry
      </button>
      <p className="form-note">We reply within one business day. Your details are never shared.</p>
    </form>
  );
}
