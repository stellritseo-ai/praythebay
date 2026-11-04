import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ResourcesHeroSection } from "@/components/sections/resources/ResourcesHeroSection";
import { ResourcesCatalogSection } from "@/components/sections/resources/ResourcesCatalogSection";
import { ResourcesPodcastBannerSection } from "@/components/sections/resources/ResourcesPodcastBannerSection";

export const Route = createFileRoute("/resources")({
  head: () =>
    pageHead({
      title: "Christian Prayer Resources — Free Guides & Devotionals | Pray The Bay",
      description: "Free prayer guides, fasting guides, prayer room formats, regional prayer maps, SEEK WEEK guide and 21-day devotionals from Pray The Bay.",
      path: "/resources",
    }),
  component: Resources,
});

function Resources() {
  return (
    <>
      <ResourcesHeroSection />
      <ResourcesCatalogSection />
      <ResourcesPodcastBannerSection />
    </>
  );
}
