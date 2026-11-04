import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/primitives";

export function CohortDetailsSection() {
  return (
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
  );
}

