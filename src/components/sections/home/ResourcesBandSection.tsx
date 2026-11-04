import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/primitives";

export function ResourcesBandSection() {
  const items = [
    ["Resource Library", "Prayer guides, fasting guides, prayer room formats and devotionals — free to download.", "/resources"],
    ["Podcast", "Listen and watch on YouTube, Spotify and Apple Podcasts. Grow in your prayer life.", "/podcast"],
    ["Plant Prayer", "Start a prayer group in your home, workplace, school or church.", "/plant-prayer"],
    ["Prayer Map", "Find a prayer group near you anywhere across the Bay.", "/prayer-map"],
  ] as const;
  return (
    <section aria-labelledby="res-h" className="bg-sky">
      <div className="mx-auto max-w-[1600px] px-5 py-28 md:px-10">
        <Reveal><h2 id="res-h" className="display-lg max-w-3xl">Build a life of prayer.</h2></Reveal>
        <ul className="mt-14 grid border-t border-ink/20 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([t, d, to], i) => (
            <li key={t} className="border-b border-ink/20 md:border-r lg:last:border-r-0">
              <Link to={to} className="group flex h-full flex-col justify-between gap-12 p-6 transition-colors duration-500 hover:bg-ink hover:text-ivory md:p-8">
                <span className="eyebrow">0{i + 1}</span>
                <div>
                  <h3 className="display-md">{t}</h3>
                  <p className="mt-3 text-sm opacity-75">{d}</p>
                  <ArrowRight className="mt-6 size-5 transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

