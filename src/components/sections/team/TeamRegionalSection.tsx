import { Section } from "@/components/site/Section";
import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { team } from "@/content/site";

export function TeamRegionalSection() {
  const regional = team.slice(2);
  return (
    <Section>
      <h2 className="eyebrow mb-12 text-muted-foreground">Regional Equipping Team</h2>
      <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {regional.map((t, i) => (
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
  );
}

