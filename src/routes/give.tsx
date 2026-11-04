import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { GiveHeroSection } from "@/components/sections/give/GiveHeroSection";
import { GiveHeadquartersSection } from "@/components/sections/give/GiveHeadquartersSection";
import { GiveMissionariesSection } from "@/components/sections/give/GiveMissionariesSection";
import { GiveAssetsSection } from "@/components/sections/give/GiveAssetsSection";

export const Route = createFileRoute("/give")({
  head: () =>
    pageHead({
      title: "Sow for Awakening — Give to Pray The Bay",
      description: "Give toward the Pray The Bay headquarters and first 24/7 prayer room in the Bay Area, and support prayer and worship missionaries. EIN 93-3285784.",
      path: "/give",
      image: img(photos.sunsetPrayer),
    }),
  component: Give,
});

function Give() {
  return (
    <>
      <GiveHeroSection />
      <GiveHeadquartersSection />
      <GiveMissionariesSection />
      <GiveAssetsSection />
    </>
  );
}
