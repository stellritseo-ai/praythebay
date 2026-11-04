import { org } from "@/content/site";

export function PrayerMapEmbedSection() {
  return (
    <section className="bg-ink">
      <iframe title="Map of Bay Area prayer groups" src={org.prayerMapEmbed} className="h-[75svh] w-full" loading="lazy" />
    </section>
  );
}

