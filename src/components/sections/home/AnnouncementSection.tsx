import { Link } from "@tanstack/react-router";

export function AnnouncementSection() {
  return (
    <Link to="/seek-week-2026" className="block overflow-hidden border-b border-line-dark bg-night py-4 text-ivory">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="eyebrow flex items-center gap-12 text-ivory/80">
            SEEK WEEK · November 2–6, 2026 · Online + In-Person Prayer
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </Link>
  );
}

