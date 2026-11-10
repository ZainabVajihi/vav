import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageNav from "@/components/PageNav";
import SolutionsGrid from "@/components/SolutionsGrid";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Software solutions VAV IT Solutions builds: ERP, CRM, e-commerce, booking apps, POS, automation and more.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Ideas we can" accent="build for you." ghost="Solutions">
        A starting point, not a catalogue. Every solution below is tailored to your workflow, branding and scale.
        Filter by platform to find what fits.
      </PageHero>

      <section className="section pt-0">
        <div className="container">
          <SolutionsGrid />
          <div className="inline-cta">
            <p>Don&apos;t see your idea here? That&apos;s usually where the best projects start.</p>
            <Link href="/contact" className="btn btn-primary">Pitch us your idea</Link>
          </div>
        </div>
      </section>

      <PageNav current="/solutions" />
    </>
  );
}
