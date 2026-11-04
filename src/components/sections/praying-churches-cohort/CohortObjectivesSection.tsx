import { Section } from "@/components/site/Section";
import { Cta } from "@/components/site/primitives";
import { cohortSignupHref } from "./CohortHeroSection";

export function CohortObjectivesSection() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="display-md">Learning objectives</h2>
          <ul className="mt-8 divide-y border-y">
            {["Foster a committed culture of prayer in your church", "Lead regular prayer gatherings for church members", "Develop a prayer rhythm that enhances staff unity and alignment", "Guide members in “planting prayer” at home, work and school", "Access resources, training and a supportive cohort"].map((x) => (
              <li key={x} className="py-4">{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="display-md">Outcomes</h2>
          <ul className="mt-8 divide-y border-y">
            {["A comprehensive, customized prayer plan for each church", "One-on-one coaching for action plan development", "Connections with pastors and leaders across the Bay Area", "Exposure to national guest speakers and prayer leaders"].map((x) => (
              <li key={x} className="py-4">{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-20 bg-ink p-10 text-center text-ivory md:p-16">
        <p className="display-md">Join Jesus in building His praying church.</p>
        <div className="mt-8"><Cta to={cohortSignupHref} variant="light">Sign Up for the Cohort</Cta></div>
      </div>
    </Section>
  );
}

