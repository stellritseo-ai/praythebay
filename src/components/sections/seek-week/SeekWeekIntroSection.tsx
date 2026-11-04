import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/primitives";

export function SeekWeekIntroSection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="display-lg">A Bay-wide call to prayer for the lost.</h2>
        </Reveal>
        <Reveal className="prose-body space-y-6 text-muted-foreground lg:col-span-6 lg:col-start-7">
          <p>For five days, we will intentionally cry out for people who need an encounter with Jesus — believing that God is drawing people to Himself and inviting His Church to respond with boldness, love, and faith.</p>
          <p className="font-display text-2xl leading-snug text-ink">
            We are seeking God for the lost. We are praying for salvation. We are preparing the way for awakening.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

