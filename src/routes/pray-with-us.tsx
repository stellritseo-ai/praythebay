import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PrayHeroSection } from "@/components/sections/pray-with-us/PrayHeroSection";
import { PrayIntroSection } from "@/components/sections/pray-with-us/PrayIntroSection";
import { PrayExpressionsSection } from "@/components/sections/pray-with-us/PrayExpressionsSection";
import { PrayFaqSection } from "@/components/sections/pray-with-us/PrayFaqSection";

export const Route = createFileRoute("/pray-with-us")({
  head: () =>
    pageHead({
      title: "Prayer Gatherings in the San Francisco Bay Area — Online & In-Person | Pray The Bay",
      description: "Join Christian prayer gatherings across the Bay Area. Pray online morning, noon and night, or come to the Pray The Bay prayer room in person, Monday to Friday.",
      path: "/pray-with-us",
      image: img(photos.prayerRoomDark),
    }),
  component: PrayWithUs,
});

function PrayWithUs() {
  return (
    <>
      <PrayHeroSection />
      <PrayIntroSection />
      <PrayExpressionsSection />
      <PrayFaqSection />
    </>
  );
}
