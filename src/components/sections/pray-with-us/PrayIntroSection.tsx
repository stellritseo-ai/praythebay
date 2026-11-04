import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/primitives";

export function PrayIntroSection() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="display-md">
          Throughout the week, we gather in two expressions — <em>online and in person</em> — carrying the same heart, the same
          Scriptures, and the same burden for the Bay Area. Choose the way that best fits your season.
        </p>
      </Reveal>
    </Section>
  );
}

