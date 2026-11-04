import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MovementHeroSection } from "@/components/sections/movement-partners/MovementHeroSection";
import { MovementWaysSection } from "@/components/sections/movement-partners/MovementWaysSection";
import { MovementCommunityCtaSection } from "@/components/sections/movement-partners/MovementCommunityCtaSection";

export const Route = createFileRoute("/movement-partners")({
  head: () =>
    pageHead({
      title: "Movement Partners — Build a Dwelling Place for God in the Bay | Pray The Bay",
      description: "Lead daily prayer with Pray The Bay and give generously to build a dwelling place for God across the San Francisco Bay Area.",
      path: "/movement-partners",
    }),
  component: Movement,
});

function Movement() {
  return (
    <>
      <MovementHeroSection />
      <MovementWaysSection />
      <MovementCommunityCtaSection />
    </>
  );
}
