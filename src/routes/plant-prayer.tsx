import { createFileRoute } from "@tanstack/react-router";
import { TypeHero, Section } from "@/components/site/PageHero";
import { Cta } from "@/components/site/primitives";
import { org } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/plant-prayer")({
  head: () =>
    pageHead({
      title: "Plant Prayer — Start a Prayer Group in Your Home, Work or School | Pray The Bay",
      description: "Learn how to plant prayer, register your prayer group in the Bay Area directory, and find a prayer group near you.",
      path: "/plant-prayer",
    }),
  component: Plant,
});

function Plant() {
  const steps = [
    ["How to plant prayer", "Where to start — a simple guide to beginning a prayer group.", org.plantPrayerHowTo, "View Resource"],
    ["Register your prayer group", "Add your group to our directory so others can find and join.", org.plantPrayerRegister, "Register Now"],
    ["View all groups", "Find a prayer group near you anywhere in the Bay.", org.plantPrayerGroups, "View Now"],
  ] as const;
  return (
    <>
      <TypeHero
        eyebrow="Plant prayer"
        title={<>Plant prayer <em>where you are.</em></>}
        intro="Home, workplace, school, church, streets — every sphere of life can become a place of prayer."
        trail={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: "Plant Prayer", path: "/plant-prayer" }]}
      />
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
    </>
  );
}
