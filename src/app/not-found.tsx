import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <h1 className="grad-text">404</h1>
        <p className="section-lead" style={{ margin: "0 auto 28px" }}>
          This page wandered off the honeycomb. Let&apos;s get you back.
        </p>
        <Link href="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
