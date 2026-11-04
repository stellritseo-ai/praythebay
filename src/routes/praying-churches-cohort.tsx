import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CohortHeroSection } from "@/components/sections/praying-churches-cohort/CohortHeroSection";
import { CohortBannerSection } from "@/components/sections/praying-churches-cohort/CohortBannerSection";
import { CohortDetailsSection } from "@/components/sections/praying-churches-cohort/CohortDetailsSection";
import { CohortObjectivesSection } from "@/components/sections/praying-churches-cohort/CohortObjectivesSection";

export const Route = createFileRoute("/praying-churches-cohort")({
  head: () =>
    pageHead({
      title: "Building Praying Churches Cohort — For Pastors & Prayer Leaders | Pray The Bay",
      description: "An 8-week interactive cohort and retreat empowering Bay Area pastors and leaders to cultivate praying churches, with a customized prayer plan for each church.",
      path: "/praying-churches-cohort",
    }),
  component: Cohort,
});

function Cohort() {
  return (
    <>
      <CohortHeroSection />
      <CohortBannerSection />
      <CohortDetailsSection />
      <CohortObjectivesSection />
    </>
  );
}
