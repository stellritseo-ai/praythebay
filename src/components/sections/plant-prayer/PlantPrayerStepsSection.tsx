import { Section } from "@/components/site/Section";
import { Cta } from "@/components/site/primitives";
import { org } from "@/content/site";

export function PlantPrayerStepsSection() {
  const steps = [
    ["How to plant prayer", "Where to start — a simple guide to beginning a prayer group.", org.plantPrayerHowTo, "View Resource"],
    ["Register your prayer group", "Add your group to our directory so others can find and join.", org.plantPrayerRegister, "Register Now"],
    ["View all groups", "Find a prayer group near you anywhere in the Bay.", org.plantPrayerGroups, "View Now"],
  ] as const;
  return (
    <Section tone="night">
      <ol className="grid gap-px bg-line-dark lg:grid-cols-3">
        {steps.map(([t, d, u, c], i) => (
          <li key={t} className="flex flex-col justify-between gap-16 bg-night p-8 md:p-12">
            <span className="font-display text-8xl text-sky">{i + 1}</span>
            <div>
              <h2 className="display-md">{t}</h2>
              <p className="mt-3 text-ivory/65">{d}</p>
              <div className="mt-8"><Cta to={u} variant="light">{c}</Cta></div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-14 text-center"><Cta to="/prayer-map" variant="outlineLight">Open the Prayer Map</Cta></div>
    </Section>
  );
}

