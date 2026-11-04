import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { TeamHeroSection } from "@/components/sections/team/TeamHeroSection";
import { TeamFoundersSection } from "@/components/sections/team/TeamFoundersSection";
import { TeamRegionalSection } from "@/components/sections/team/TeamRegionalSection";

export const Route = createFileRoute("/team")({
  head: () =>
    pageHead({
      title: "Our Team — Founders & Regional Equipping Team | Pray The Bay",
      description: "Meet the co-founders, executive directors and regional equipping teams leading Pray The Bay across San Francisco, the Peninsula, North Bay, Monterey and Santa Rosa.",
      path: "/team",
    }),
  component: Team,
});

function Team() {
  return (
    <>
      <TeamHeroSection />
      <TeamFoundersSection />
      <TeamRegionalSection />
    </>
  );
}
