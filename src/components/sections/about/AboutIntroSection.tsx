import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/primitives";

export function AboutIntroSection() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="font-display text-3xl leading-snug md:text-5xl md:leading-tight">
            We are a family of faithful intercessors, pastors, prayer directors, marketplace leaders, and zealous Gen-Zers.
            We want to give Jesus what He wants… <em>a praying church that builds a dwelling place for Him.</em>
          </p>
        </Reveal>
        <Reveal className="prose-body space-y-6 text-muted-foreground lg:col-span-4 lg:col-start-9 lg:pt-4">
          <p>We are not a local church. We are local church people that long to see the Church reach her full potential through prayer.</p>
          <p className="font-display text-2xl italic text-ink">We believe a united, praying Church is unstoppable.</p>
        </Reveal>
      </div>
    </Section>
  );
}

