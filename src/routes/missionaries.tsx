import { createFileRoute } from "@tanstack/react-router";
import { TypeHero, Section } from "@/components/site/PageHero";
import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { missionaries } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/missionaries")({
  head: () =>
    pageHead({
      title: "Prayer & Worship Missionaries — Support Their Work | Pray The Bay",
      description: "Meet the Pray The Bay missionaries serving regional prayer rooms across Marin, Sonoma, San Francisco, Alameda, Solano and Santa Clara, and support them monthly.",
      path: "/missionaries",
    }),
  component: Missionaries,
});

function Missionaries() {
  return (
    <>
      <TypeHero
        eyebrow="Isaiah 6:8"
        title={<>“Here I am. <em>Send me.</em>”</>}
        intro="“Whom shall I send, and who will go for us?” Our prayer and worship missionaries serve regional prayer rooms and local churches across the Bay."
        trail={[{ name: "Home", path: "/" }, { name: "Partner", path: "/movement-partners" }, { name: "Missionaries", path: "/missionaries" }]}
      />
      {missionaries.map((m, i) => (
        <Section key={m.name} tone={i % 2 ? "ivory" : "paper"}>
          <Reveal>
            <article className={`grid items-center gap-12 lg:grid-cols-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden bg-muted lg:col-span-5">
                <Photo src={m.photo} alt={`Portrait of missionary ${m.name}`} w={1000} />
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="eyebrow text-muted-foreground">Serving regional prayer rooms · {m.serving}</p>
                <h2 className="display-lg mt-4">{m.name}</h2>
                <div className="prose-body mt-6 space-y-4 text-muted-foreground">
                  {m.bio.map((b) => <p key={b}>{b}</p>)}
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Cta to={m.links.m30}>Monthly $30</Cta>
                  <Cta to={m.links.m100}>Monthly $100</Cta>
                  <Cta to={m.links.once} variant="outlineDark">One-time Gift</Cta>
                </div>
              </div>
            </article>
          </Reveal>
        </Section>
      ))}
    </>
  );
}
