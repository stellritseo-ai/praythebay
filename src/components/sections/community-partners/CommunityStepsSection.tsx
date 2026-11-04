import { Section } from "@/components/site/Section";
import { Cta, Reveal } from "@/components/site/primitives";
import { org } from "@/content/site";

export function CommunityStepsSection() {
  return (
    <Section>
      <ul className="grid gap-16 md:grid-cols-3">
        {[
          ["Daily Online Prayer", "Pray with believers across the Bay every weekday.", org.onlinePrayer, "View Prayer Times"],
          ["Fast Wednesdays", "Set aside Wednesdays to fast and be in His presence with us.", org.instagram, "Join Us"],
          ["Plant Prayer", "Home, workplace, school, church, streets.", "/prayer-map", "View All Groups"],
        ].map((x) => x as [string, string, string, string]).map(([t, d, u, c], i) => (
          <Reveal key={t} delay={i * 0.1}>
            <li className="border-t border-ink pt-8">
              <span className="eyebrow text-muted-foreground">0{i + 1}</span>
              <h2 className="display-md mt-4 italic">{t}</h2>
              <p className="mt-3 text-muted-foreground">{d}</p>
              <div className="mt-8"><Cta to={u} variant="outlineDark">{c}</Cta></div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

