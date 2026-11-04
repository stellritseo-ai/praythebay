import { useMemo, useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { img, resources } from "@/content/site";

const cats = ["All", ...Array.from(new Set(resources.map((r) => r.category)))];

export function ResourcesCatalogSection() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const list = useMemo(
    () => resources.filter((r) => (cat === "All" || r.category === cat) && r.title.toLowerCase().includes(q.toLowerCase())),
    [q, cat],
  );
  return (
    <Section tone="paper" className="[&>div]:!pt-0">
      <div className="sticky top-16 z-10 -mx-5 flex flex-col gap-4 border-b bg-paper/95 px-5 py-5 backdrop-blur md:-mx-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`eyebrow px-4 py-2 transition-colors ${cat === c ? "bg-ink text-ivory" : "border hover:bg-muted"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 border-b border-input py-2 md:w-72">
          <Search className="size-4 text-muted-foreground" />
          <span className="sr-only">Search resources</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search resources" className="w-full bg-transparent focus:outline-none" />
        </label>
      </div>
      <p className="eyebrow mt-8 text-muted-foreground" aria-live="polite">{list.length} resources</p>
      <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
        {list.map((r) => (
          <li key={r.title}>
            <a href={r.href} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={img(r.thumb, 750)} alt={`${r.title} cover`} loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-4 text-[0.6rem] text-muted-foreground">{r.category}</p>
              <h2 className="mt-2 flex items-start justify-between gap-3 font-display text-xl leading-tight">
                {r.title}
                <ArrowUpRight className="mt-1 size-4 shrink-0 opacity-50 group-hover:opacity-100" />
              </h2>
            </a>
          </li>
        ))}
      </ul>
      {list.length === 0 && <p className="py-20 text-center text-muted-foreground">No resources match that search.</p>}
    </Section>
  );
}

