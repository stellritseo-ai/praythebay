import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { VisionHeroSection } from "@/components/sections/vision/VisionHeroSection";
import { VisionPillarsSection } from "@/components/sections/vision/VisionPillarsSection";
import { VisionFutureSection } from "@/components/sections/vision/VisionFutureSection";

export const Route = createFileRoute("/vision")({
  head: () =>
    pageHead({
      title: "Our Vision — Revival, Renewal & Awakening | Pray The Bay",
      description: "Revive the local Church. Renew our cities. Awaken people to the presence of God. The vision for 24/7 prayer rooms in every region of the Bay Area.",
      path: "/vision",
    }),
  component: Vision,
});

function Vision() {
  return (
    <>
      <VisionHeroSection />
      <VisionPillarsSection />
      <VisionFutureSection />
    </>
  );
}
