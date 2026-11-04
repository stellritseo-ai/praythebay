import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { RenaissanceHeroSection } from "@/components/sections/renaissance/RenaissanceHeroSection";
import { RenaissanceVisionSection } from "@/components/sections/renaissance/RenaissanceVisionSection";
import { RenaissanceExpectSection } from "@/components/sections/renaissance/RenaissanceExpectSection";
import { RenaissanceHistorySection } from "@/components/sections/renaissance/RenaissanceHistorySection";

export const Route = createFileRoute("/renaissance-27")({
  head: () =>
    pageHead({
      title: "Renaissance '27 — Prayer & Worship Gathering, Feb 12–13, Redwood City | Pray The Bay",
      description: "The 6th annual Renaissance prayer and worship gathering, February 12–13, 2027 at Rise City Church, Redwood City. Unified worship, prayer for revival, equipping and activation.",
      path: "/renaissance-27",
      image: img(photos.hall),
    }),
  component: Renaissance,
});

function Renaissance() {
  return (
    <>
      <RenaissanceHeroSection />
      <RenaissanceVisionSection />
      <RenaissanceExpectSection />
      <RenaissanceHistorySection />
    </>
  );
}
