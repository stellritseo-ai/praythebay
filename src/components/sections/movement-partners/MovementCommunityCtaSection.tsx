import { Section } from "@/components/site/Section";
import { Cta } from "@/components/site/primitives";

export function MovementCommunityCtaSection() {
  return (
    <Section tone="paper">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <p className="display-md max-w-xl">Want to pray and fast with us first?</p>
        <Cta to="/community-partners" variant="outlineDark">Community Partners</Cta>
      </div>
    </Section>
  );
}

