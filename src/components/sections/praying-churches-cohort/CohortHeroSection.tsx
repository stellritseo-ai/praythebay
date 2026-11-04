import { TypeHero } from "@/components/site/TypeHero";
import { Cta } from "@/components/site/primitives";
import { org } from "@/content/site";

export const cohortSignupHref = `mailto:${org.email}?subject=${encodeURIComponent("Building Praying Churches Cohort — sign up")}&body=${encodeURIComponent("Full name:\nPhone:\nChurch:\n")}`;

export function CohortHeroSection() {
  return (
    <TypeHero
      eyebrow="For pastors & prayer leaders"
      title={<>Building <em>Praying Churches</em> Cohort</>}
      intro="To empower pastors and leaders to cultivate praying churches that inspire and sustain vibrant communities of prayer."
      trail={[{ name: "Home", path: "/" }, { name: "Get Involved", path: "/serve-with-us" }, { name: "Praying Churches Cohort", path: "/praying-churches-cohort" }]}
    >
      <Cta to={cohortSignupHref}>Sign Up</Cta>
    </TypeHero>
  );
}

