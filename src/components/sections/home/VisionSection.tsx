import { useState } from "react";
import { Photo, Reveal } from "@/components/site/primitives";
import { photos } from "@/content/site";

const pillars = [
  { n: "01", word: "Revival", line: "Revive the Local Church.", photo: photos.layingHands, alt: "Leaders lay hands and pray over one another" },
  { n: "02", word: "Renewal", line: "Renew Our Cities.", photo: photos.embrace, alt: "A group embraces in prayer inside a Bay Area church" },
  { n: "03", word: "Awakening", line: "Awaken People to the Presence of God.", photo: photos.sunsetPrayer, alt: "Friends kneel in prayer at sunset over the Bay" },
];

export function VisionSection() {
  const [active, setActive] = useState(0);
  return (
    <section aria-labelledby="vision-h" className="bg-night text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <h2 id="vision-h" className="display-lg">
            Our vision, <em className="text-sky">in three movements.</em>
          </h2>
          <p className="prose-body max-w-xl text-ivory/70">
            We are believing for revival in the Church, renewal in our cities, and an awakening to the presence of God —
            with 24/7 prayer rooms leading prayer and worship every morning, noon, and night in each region across the Bay.
          </p>
        </Reveal>
      </div>
      <div className="mt-16 flex flex-col lg:h-[82vh] lg:flex-row">
        {pillars.map((p, i) => (
          <button
            type="button"
            key={p.word}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`group relative h-[60svh] min-w-0 overflow-hidden text-left transition-[flex] duration-[1200ms] ease-[var(--ease-cinema)] lg:h-auto ${active === i ? "lg:flex-[2.4]" : "lg:flex-1"}`}
          >
            <Photo src={p.photo} alt={p.alt} className={`img-zoom ${active === i ? "scale-105" : "scale-100 grayscale-[40%]"}`} />
            <div className="overlay-bottom absolute inset-0" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
              <span className="eyebrow text-sky">{p.n}</span>
              <div>
                <h3 className={`font-display text-5xl uppercase tracking-wide transition-all duration-700 md:text-7xl ${active === i ? "" : "lg:text-4xl xl:text-5xl"}`}>{p.word}</h3>
                <p className={`mt-3 max-w-sm font-display text-2xl italic text-ivory/85 transition-opacity duration-700 ${active === i ? "lg:opacity-100" : "lg:opacity-0"}`}>
                  {p.line}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

