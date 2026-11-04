import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PlantPrayerHeroSection } from "@/components/sections/plant-prayer/PlantPrayerHeroSection";
import { PlantPrayerStepsSection } from "@/components/sections/plant-prayer/PlantPrayerStepsSection";

export const Route = createFileRoute("/plant-prayer")({
  head: () =>
    pageHead({
      title: "Plant Prayer — Start a Prayer Group in Your Home, Work or School | Pray The Bay",
      description: "Learn how to plant prayer, register your prayer group in the Bay Area directory, and find a prayer group near you.",
      path: "/plant-prayer",
    }),
  component: Plant,
});

function Plant() {
  return (
    <>
      <PlantPrayerHeroSection />
      <PlantPrayerStepsSection />
    </>
  );
}
