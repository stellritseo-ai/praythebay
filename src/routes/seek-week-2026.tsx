import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { SeekWeekHeroSection } from "@/components/sections/seek-week/SeekWeekHeroSection";
import { SeekWeekIntroSection } from "@/components/sections/seek-week/SeekWeekIntroSection";
import { SeekWeekDaysSection } from "@/components/sections/seek-week/SeekWeekDaysSection";
import { SeekWeekMidnightSection } from "@/components/sections/seek-week/SeekWeekMidnightSection";
import { SeekWeekCallSection } from "@/components/sections/seek-week/SeekWeekCallSection";

export const Route = createFileRoute("/seek-week-2026")({
  head: () =>
    pageHead({
      title: "SEEK WEEK 2026 — Bay-Wide Prayer for the Lost, Nov 2–6 | Pray The Bay",
      description: "SEEK WEEK 2026, November 2–6: a Bay-wide call to continuous prayer and worship for salvation, renewal and awakening across every region of the Bay Area.",
      path: "/seek-week-2026",
      image: img(photos.prayerRoomWindow),
    }),
  component: SeekWeek,
});

function SeekWeek() {
  return (
    <>
      <SeekWeekHeroSection />
      <SeekWeekIntroSection />
      <SeekWeekDaysSection />
      <SeekWeekMidnightSection />
      <SeekWeekCallSection />
    </>
  );
}
