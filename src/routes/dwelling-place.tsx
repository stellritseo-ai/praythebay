import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { DwellingHeroSection } from "@/components/sections/dwelling-place/DwellingHeroSection";
import { DwellingIntroSection } from "@/components/sections/dwelling-place/DwellingIntroSection";
import { DwellingVisionSection } from "@/components/sections/dwelling-place/DwellingVisionSection";
import { DwellingOverviewSection } from "@/components/sections/dwelling-place/DwellingOverviewSection";
import { DwellingDifferenceSection } from "@/components/sections/dwelling-place/DwellingDifferenceSection";
import { DwellingFaqSection } from "@/components/sections/dwelling-place/DwellingFaqSection";

export const Route = createFileRoute("/dwelling-place")({
  head: () =>
    pageHead({
      title: "Dwelling Place School — 9-Month Prayer & Worship Training in San Francisco | Pray The Bay",
      description: "Dwelling Place Discipleship Prayer School: a nine-month hybrid missionary training program in San Francisco forming men and women of prayer, worship and mission.",
      path: "/dwelling-place",
      image: img(photos.studyChairs),
    }),
  component: School,
});

function School() {
  return (
    <>
      <DwellingHeroSection />
      <DwellingIntroSection />
      <DwellingVisionSection />
      <DwellingOverviewSection />
      <DwellingDifferenceSection />
      <DwellingFaqSection />
    </>
  );
}
