import { Section } from "@/components/site/Section";
import { Cta } from "@/components/site/primitives";

export function PodcastResourcesCtaSection() {
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-between gap-8">
        <h2 className="display-md max-w-xl">Put it into practice with our free prayer guides.</h2>
        <Cta to="/resources">Resource Library</Cta>
      </div>
    </Section>
  );
}

