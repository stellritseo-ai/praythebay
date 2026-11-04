import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { ServeHeroSection } from "@/components/sections/serve-with-us/ServeHeroSection";
import { ServeDetailsSection } from "@/components/sections/serve-with-us/ServeDetailsSection";

export const Route = createFileRoute("/serve-with-us")({
  head: () =>
    pageHead({
      title: "Serve With Us — Volunteer with the Bay Area Prayer Movement | Pray The Bay",
      description: "Lead prayer online, serve on prayer teams for events, help with administration, and intercede for the Church of the Bay Area with Pray The Bay.",
      path: "/serve-with-us",
      image: img(photos.outdoorPrayer2),
    }),
  component: Serve,
});

function Serve() {
  return (
    <>
      <ServeHeroSection />
      <ServeDetailsSection />
    </>
  );
}
