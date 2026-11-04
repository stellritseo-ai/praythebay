import { Section } from "@/components/site/Section";
import { Photo, Reveal } from "@/components/site/primitives";
import { team } from "@/content/site";

export function TeamFoundersSection() {
  const lead = team.slice(0, 2);
  return (
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
  );
}

