import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/primitives";

export function DwellingIntroSection() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="display-lg">What is Dwelling Place?</h2>
        </Reveal>
        <Reveal className="prose-body space-y-6 text-muted-foreground lg:col-span-6 lg:col-start-7">
          <p>Dwelling Place — Discipleship Prayer School is a <strong className="text-ink">nine-month missionary training program</strong> in San Francisco devoted to forming men and women of prayer, worship, and mission.</p>
          <p>Through immersive rhythms of Scripture, worship, prayer rooms, discipleship, and outreach, students are marked by the presence of God and sent to strengthen the Church.</p>
          <p className="font-display text-2xl italic text-ink">This isn’t a traditional classroom. It’s a place of encounter.</p>
        </Reveal>
      </div>
    </Section>
  );
}

