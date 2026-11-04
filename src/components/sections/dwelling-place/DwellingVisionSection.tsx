import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/primitives";

export function DwellingVisionSection() {
  return (
    <Section tone="night">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="eyebrow text-sky">The vision</p>
        <p className="display-lg mt-8">The Bay Area is one of the most prayerless regions in America. <em className="text-sky">We believe Jesus is turning it into one of the most prayerful.</em></p>
        <p className="prose-body mx-auto mt-10 max-w-2xl text-ivory/70">
          Dwelling Place exists to train and send a generation who will build dwelling places for God — altars of prayer, worship,
          and mission in their local churches and cities. Every student becomes part of a story: the Bay becoming a resting place for the presence of God.
        </p>
      </Reveal>
    </Section>
  );
}

