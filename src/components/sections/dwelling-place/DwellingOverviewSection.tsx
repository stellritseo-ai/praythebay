import { Section } from "@/components/site/Section";
import { Photo } from "@/components/site/primitives";
import { photos } from "@/content/site";

export function DwellingOverviewSection() {
  return (
    <Section tone="paper">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="display-md">Program overview</h2>
          <dl className="mt-10 divide-y border-y">
            {[
              ["Length", "9 months (Sept–May)"],
              ["Format", "Hybrid — 2 days in person, 2 days online"],
              ["Focus", "Encounter with Jesus, leadership training, intercession, worship leading, evangelism, and justice work"],
              ["Instructors", "Local pastors, missionaries, and national leaders"],
              ["Cost", "$4,995 (payment plans available)"],
              ["Start date", "September 2026"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[120px_1fr] gap-6 py-5">
                <dt className="eyebrow pt-1 text-muted-foreground">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] overflow-hidden"><Photo src={photos.studyChairs} alt="Students studying Scripture" w={800} /></div>
          <div className="mt-16 aspect-[3/4] overflow-hidden"><Photo src={photos.micBW} alt="A student leading a prayer set" w={800} /></div>
        </div>
      </div>
    </Section>
  );
}

