import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { MissionariesHeroSection } from "@/components/sections/missionaries/MissionariesHeroSection";
import { MissionariesListSection } from "@/components/sections/missionaries/MissionariesListSection";

export const Route = createFileRoute("/missionaries")({
  head: () =>
    pageHead({
      title: "Prayer & Worship Missionaries — Support Their Work | Pray The Bay",
      description: "Meet the Pray The Bay missionaries serving regional prayer rooms across Marin, Sonoma, San Francisco, Alameda, Solano and Santa Clara, and support them monthly.",
      path: "/missionaries",
    }),
  component: Missionaries,
});

function Missionaries() {
  return (
    <>
      <MissionariesHeroSection />
      <MissionariesListSection />
    </>
  );
}
