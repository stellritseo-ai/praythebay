import { Section } from "@/components/site/Section";
import { Cta, Reveal } from "@/components/site/primitives";

export function VisionFutureSection() {
  return (
    <Section tone="night">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="eyebrow text-sky">The future we see</p>
        <p className="display-lg mt-8">
          24/7 prayer rooms with led prayer & worship sessions every <em className="text-sky">morning, noon, and night</em> in each region across the Bay.
        </p>
      </Reveal>
      <ul className="mt-20 grid gap-px bg-line-dark md:grid-cols-3">
        {[
          ["10", "Regional 24/7 Prayer Rooms"],
          ["200", "Prayer & Worship Missionaries"],
          ["1", "United Praying Church"],
        ].map(([n, l]) => (
          <li key={l} className="bg-night p-10 text-center">
            <p className="font-display text-7xl text-sky md:text-8xl">{n}</p>
            <p className="eyebrow mt-4 text-ivory/70">{l}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-ivory/40">Goals as stated in the Pray The Bay vision.</p>
      <div className="mt-14 flex justify-center gap-3">
        <Cta to="/give" variant="light">Sow for Awakening</Cta>
        <Cta to="/pray-with-us" variant="outlineLight">Pray With Us</Cta>
      </div>
    </Section>
  );
}

