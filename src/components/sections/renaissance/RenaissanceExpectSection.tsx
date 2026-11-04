import { Section } from "@/components/site/Section";

const expect = [
  ["Unified Worship", "Voices and churches from across the Bay Area gathered as one."],
  ["Prayer for Revival", "Contending together for spiritual awakening in our region."],
  ["Equipping & Impartation", "Voices for revival from around the U.S. pouring into the local Body."],
  ["Activation", "Practical tools to carry this fire back into your church and city."],
];

export function RenaissanceExpectSection() {
  return (
    <Section tone="night">
      <h2 className="display-lg">What to expect</h2>
      <ul className="mt-14 grid gap-px bg-line-dark md:grid-cols-2">
        {expect.map(([t, d], i) => (
          <li key={t} className="bg-night p-8 md:p-12">
            <span className="eyebrow text-gold">0{i + 1}</span>
            <h3 className="display-md mt-6">{t}</h3>
            <p className="mt-3 text-ivory/65">{d}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

