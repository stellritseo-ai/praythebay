import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { photos } from "@/content/site";

export function SchoolSection() {
  const p = [
    ["Behold", "The beauty of Jesus."],
    ["Become", "His dwelling."],
    ["Build", "His house of prayer."],
  ];
  return (
    <section aria-labelledby="school-h" className="relative overflow-hidden bg-ink text-ivory">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[60svh]">
          <Photo src={photos.studyChairs} alt="Dwelling Place School students reading Scripture in the prayer room" />
        </div>
        <div className="flex flex-col justify-center px-5 py-20 md:px-16">
          <Reveal>
            <p className="eyebrow text-sky">Discipleship Prayer School · San Francisco</p>
            <h2 id="school-h" className="display-lg mt-6 uppercase">Dwelling Place School</h2>
            <p className="prose-body mt-6 max-w-lg text-ivory/70">
              A place to behold Jesus, become His dwelling, and build His house of prayer — a nine-month missionary
              training program devoted to forming men and women of prayer, worship, and mission.
            </p>
          </Reveal>
          <ol className="mt-12 divide-y divide-line-dark border-y border-line-dark">
            {p.map(([w, l], i) => (
              <Reveal key={w} delay={i * 0.1}>
                <li className="flex items-baseline justify-between gap-6 py-6">
                  <span className="font-display text-4xl uppercase tracking-wide md:text-5xl">{w}</span>
                  <span className="font-display text-xl italic text-ivory/60">{l}</span>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12"><Cta to="/dwelling-place" variant="sky">Discover the School</Cta></div>
        </div>
      </div>
    </section>
  );
}

