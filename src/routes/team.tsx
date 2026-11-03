import { createFileRoute } from "@tanstack/react-router";
import { TypeHero, Section } from "@/components/site/PageHero";
import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { team } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () =>
    pageHead({
      title: "Our Team — Founders & Regional Equipping Team | Pray The Bay",
      description: "Meet the co-founders, executive directors and regional equipping teams leading Pray The Bay across San Francisco, the Peninsula, North Bay, Monterey and Santa Rosa.",
      path: "/team",
    }),
  component: Team,
});

function Team() {
  const [lead, ...rest] = [team.slice(0, 2), team.slice(2)];
  return (
    <>
      <TypeHero
        eyebrow="Our team"
        title={<>Local church people, <em>across the Bay.</em></>}
        intro="Our leadership team represents five Bay Area regions — pastors and leaders who carry a shared cry for revival through the local Church."
        trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Team", path: "/team" }]}
      />
      <Section tone="paper">
        <h2 className="eyebrow mb-12 text-muted-foreground">Founders & Executive Leadership</h2>
        <div className="space-y-24">
          {lead.map((t, i) => (
            <Reveal key={t.name}>
              <article className={`grid items-center gap-10 lg:grid-cols-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="aspect-[4/5] overflow-hidden bg-muted lg:col-span-5">
                  <Photo src={t.photo} alt={`Portrait of ${t.name}`} w={1000} />
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="eyebrow text-muted-foreground">{t.role}</p>
                  <h3 className="display-lg mt-4">{t.name}</h3>
                  <p className="prose-body mt-6 text-muted-foreground">{t.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="eyebrow mb-12 text-muted-foreground">Regional Equipping Team</h2>
        <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {rest[0].map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.1}>
              <li className="grid gap-6 sm:grid-cols-[180px_1fr]">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <Photo src={t.photo} alt={`Portrait of ${t.name}`} w={500} />
                </div>
                <div>
                  <p className="eyebrow text-muted-foreground">{t.role}</p>
                  <h3 className="display-md mt-3">{t.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <div className="mt-20 border-t pt-10">
          <Cta to="/serve-with-us">Serve With Us</Cta>
        </div>
      </Section>
    </>
  );
}
