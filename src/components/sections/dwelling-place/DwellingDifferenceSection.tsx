import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/primitives";

export function DwellingDifferenceSection() {
  return (
    <Section>
      <h2 className="display-lg">What makes us different</h2>
      <ul className="mt-14 grid gap-10 md:grid-cols-2">
        {[
          ["Presence First", "Everything begins with Jesus. We’re not training people to use Him for ministry — we’re learning to love Him as the reward."],
          ["Rooted in the Local Church", "We exist to strengthen the Church, not replace it. Every student is sent back to their home church equipped to build prayer and worship at the local level."],
          ["Prayer Room Leadership", "Students don’t just study prayer — they live it. Each week, they help lead sets in the Dwelling Place Prayer Room."],
          ["Mission in the City", "Every week, we go into the streets to love people, share the gospel, and serve the poor. Presence leads to compassion."],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 0.1}>
            <li className="border-t pt-6">
              <h3 className="display-md">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

