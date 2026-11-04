import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PrayerMapHeroSection } from "@/components/sections/prayer-map/PrayerMapHeroSection";
import { PrayerMapEmbedSection } from "@/components/sections/prayer-map/PrayerMapEmbedSection";
import { PrayerMapRegisterSection } from "@/components/sections/prayer-map/PrayerMapRegisterSection";

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
      <PrayerMapHeroSection />
      <PrayerMapEmbedSection />
      <PrayerMapRegisterSection />
    </>
  );
}
