import { Section } from "@/components/site/Section";

export function SeekWeekMidnightSection() {
  return (
    <Section tone="sky">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
        <h2 className="display-xl uppercase">Midnight <em className="normal-case">to</em> midnight.</h2>
        <p className="prose-body max-w-lg">
          Church doors will be open midnight to midnight each day across the Bay, creating a continuous rhythm of prayer and
          worship across the region.
        </p>
      </div>
    </Section>
  );
}

