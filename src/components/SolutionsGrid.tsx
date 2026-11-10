"use client";

import { useState } from "react";
import { solutions } from "@/lib/site";

const cats = ["All", "Enterprise", "Web", "Mobile", "Desktop", "Automation"] as const;

export default function SolutionsGrid() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = cat === "All" ? solutions : solutions.filter((s) => s.category === cat);

  return (
    <>
      <div className="filter-bar" role="tablist" aria-label="Filter solutions">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            className={`chip${cat === c ? " is-active" : ""}`}
            onClick={() => setCat(c)}
          >
            {c}
            <span className="chip-count">
              {c === "All" ? solutions.length : solutions.filter((s) => s.category === c).length}
            </span>
          </button>
        ))}
      </div>
      <ul className="solutions-grid">
        {list.map((s, i) => (
          <li key={s.title} className="solution-card" style={{ animationDelay: `${i * 50}ms` }}>
            <span className="solution-cat">{s.category}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="tags">
              {s.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
