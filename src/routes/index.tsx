import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { AnnouncementSection } from "@/components/sections/home/AnnouncementSection";
import { VisionSection } from "@/components/sections/home/VisionSection";
import { EventsSection } from "@/components/sections/home/EventsSection";
import { SchoolSection } from "@/components/sections/home/SchoolSection";
import { PrayWithUsSection } from "@/components/sections/home/PrayWithUsSection";
import { GallerySection } from "@/components/sections/home/GallerySection";
import { StorySection } from "@/components/sections/home/StorySection";
import { PeopleSection } from "@/components/sections/home/PeopleSection";
import { ResourcesBandSection } from "@/components/sections/home/ResourcesBandSection";
import { ServePartnerSection } from "@/components/sections/home/ServePartnerSection";
import { HomeFaqSection } from "@/components/sections/home/HomeFaqSection";
import { ClosingSection } from "@/components/sections/home/ClosingSection";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Pray The Bay — Prayer & Worship Movement in the San Francisco Bay Area",
      description:
        "Join a unifying prayer and worship movement for the local Church of the Bay Area. Daily online and in-person prayer gatherings, SEEK WEEK, Renaissance '27 and Dwelling Place School.",
      path: "/",
      image: img(photos.worshipNight, 1500),
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <AnnouncementSection />
      <VisionSection />
      <EventsSection />
      <SchoolSection />
      <PrayWithUsSection />
      <GallerySection />
      <StorySection />
      <PeopleSection />
      <ResourcesBandSection />
      <ServePartnerSection />
      <HomeFaqSection />
      <ClosingSection />
    </>
  );
}
