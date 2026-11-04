import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { AboutIntroSection } from "@/components/sections/about/AboutIntroSection";
import { AboutStorySection } from "@/components/sections/about/AboutStorySection";
import { AboutFaqSection } from "@/components/sections/about/AboutFaqSection";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Pray The Bay — Who We Are | Bay Area Prayer Movement",
      description: "Pray The Bay is a family of intercessors, pastors, prayer directors, marketplace leaders and Gen-Zers who love and serve the local Church of the San Francisco Bay Area.",
      path: "/about",
      image: img(photos.embrace),
    }),
  component: About,
});

function About() {
  return (
    <>
      <AboutHeroSection />
      <AboutIntroSection />
      <AboutStorySection />
      <AboutFaqSection />
    </>
  );
}
