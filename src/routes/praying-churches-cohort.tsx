import { createFileRoute } from "@tanstack/react-router";
import { TypeHero, Section } from "@/components/site/PageHero";
import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { org, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/praying-churches-cohort")({
  head: () =>
    pageHead({
      title: "Building Praying Churches Cohort — For Pastors & Prayer Leaders | Pray The Bay",
      description: "An 8-week interactive cohort and retreat empowering Bay Area pastors and leaders to cultivate praying churches, with a customized prayer plan for each church.",
      path: "/praying-churches-cohort",
    }),
  component: Cohort,
});

const signup = `mailto:${org.email}?subject=${encodeURIComponent("Building Praying Churches Cohort — sign up")}&body=${encodeURIComponent("Full name:\nPhone:\nChurch:\n")}`;

function Cohort() {
  return (
    <>
      <TypeHero
        eyebrow="For pastors & prayer leaders"
        title={<>Building <em>Praying Churches</em> Cohort</>}
        intro="To empower pastors and leaders to cultivate praying churches that inspire and sustain vibrant communities of prayer."
        trail={[{ name: "Home", path: "/" }, { name: "Get Involved", path: "/serve-with-us" }, { name: "Praying Churches Cohort", path: "/praying-churches-cohort" }]}
      >
        <Cta to={signup}>Sign Up</Cta>
      </TypeHero>
      <div className="h-[55svh] overflow-hidden"><Photo src={photos.layingHands} alt="Pastors praying together during a cohort gathering" /></div>
      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            ["Timeline", ["Wednesdays from Sept 2nd — 8 weeks", "Retreat Oct 25th – 26th (Sunday night – Monday afternoon)"]],
            ["Format", ["Interactive learning cohort for lead pastors and prayer leaders", "Weekly gatherings Wednesdays at 1 PM via Zoom, plus office hours", "Guest teachers, Q&A, best practices and a customized prayer plan"]],
            ["Cost — $999", ["2 tickets for Renaissance Conference", "Cohort materials for two", "Cohort retreat for two at the Home of Peace"]],
          ].map(([t, items]) => (
            <Reveal key={t as string}>
              <h2 className="eyebrow border-t border-ink pt-6">{t as string}</h2>
              <ul className="mt-6 space-y-3">
                {(items as string[]).map((i) => <li key={i} className="text-muted-foreground">{i}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>
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
          <div className="mt-8"><Cta to={signup} variant="light">Sign Up for the Cohort</Cta></div>
        </div>
      </Section>
    </>
  );
}
