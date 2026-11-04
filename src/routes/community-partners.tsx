import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { CommunityHeroSection } from "@/components/sections/community-partners/CommunityHeroSection";
import { CommunityStepsSection } from "@/components/sections/community-partners/CommunityStepsSection";

export const Route = createFileRoute("/community-partners")({
  head: () =>
    pageHead({
      title: "Community Partners — Pray & Fast for Revival in the Bay | Pray The Bay",
      description: "Become a Pray The Bay community partner: join daily online prayer, fast with us on Wednesdays, and plant prayer in your home, workplace, school and church.",
      path: "/community-partners",
      image: img(photos.womenPrayer),
    }),
  component: Community,
});

function Community() {
  return (
    <>
      <CommunityHeroSection />
      <CommunityStepsSection />
    </>
  );
}
