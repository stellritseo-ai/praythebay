import { Section } from "@/components/site/Section";
import { Cta } from "@/components/site/primitives";

export function ResourcesPodcastBannerSection() {
  return (
    <Section tone="sky">
      <div className="flex flex-wrap items-center justify-between gap-8">
        <h2 className="display-lg max-w-2xl">Prefer to listen? The Pray The Bay Podcast.</h2>
        <Cta to="/podcast">Listen & Watch</Cta>
      </div>
    </Section>
  );
}

