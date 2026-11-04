import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/primitives";

export function RenaissanceVisionSection() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-muted-foreground">Our vision</p>
          <h2 className="display-lg mt-6">Rediscover our shared identity as a people rooted in prayer.</h2>
        </Reveal>
        <Reveal className="prose-body space-y-6 text-muted-foreground lg:col-span-5 lg:col-start-8">
          <p>Join us for this powerful time bringing together churches from across the Bay Area with voices for revival from around the U.S.</p>
          <p>Together, we will rediscover our shared identity as a people rooted in prayer and the mission of God — a people who are together being formed into God's dwelling place. Grow in passion for God's presence as you are equipped and activated to steward revival and transformation in our region.</p>
        </Reveal>
      </div>
    </Section>
  );
}

