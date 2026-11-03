import { createFileRoute } from "@tanstack/react-router";
import { TypeHero, Section } from "@/components/site/PageHero";
import { Cta } from "@/components/site/primitives";
import { org } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/prayer-map")({
  head: () =>
    pageHead({
      title: "Bay Area Prayer Map — Find a Prayer Group Near You | Pray The Bay",
      description: "Explore church, home, work and school prayer groups across the San Francisco Bay Area on the Pray The Bay prayer map, and add your own group.",
      path: "/prayer-map",
    }),
  component: MapPage,
});

function MapPage() {
  return (
    <>
      <TypeHero
        eyebrow="Prayer map"
        title={<>Bay Area <em>prayer groups.</em></>}
        intro="Click on the pins to view more info. Toggle the sidebar to browse by category."
        trail={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: "Prayer Map", path: "/prayer-map" }]}
      />
      <section className="bg-ink">
        <iframe title="Map of Bay Area prayer groups" src={org.prayerMapEmbed} className="h-[75svh] w-full" loading="lazy" />
      </section>
      <Section tone="sky">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="display-lg">Register your prayer group</h2>
            <p className="prose-body mt-6 max-w-lg">Church, home, work or school prayer — add your group to the map so others across the Bay can find it.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Cta to={org.plantPrayerRegister}>Register Your Group</Cta>
            <Cta to="/plant-prayer" variant="outlineDark">How to Plant Prayer</Cta>
          </div>
        </div>
      </Section>
    </>
  );
}
