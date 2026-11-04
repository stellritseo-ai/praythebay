import { Section } from "@/components/site/Section";
import { Cta, Reveal } from "@/components/site/primitives";
import { org } from "@/content/site";

export function GiveHeadquartersSection() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-gold">Headquarters & first 24/7 prayer room</p>
          <h2 className="display-lg mt-6">A spiritual and strategic hub for the Bay.</h2>
          <p className="prose-body mt-6 text-muted-foreground">
            We believe God is inviting us to step out in faith to establish the Pray The Bay Headquarters and launch our first 24/7
            prayer room in the Bay Area — paving the way for nine more 24/7 prayer rooms across the region, just as our first All
            Night Prayer Gathering sparked gatherings throughout the Bay.
          </p>
          <div className="mt-10"><Cta to={org.give}>Sow for Headquarters</Cta></div>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8">
          <h3 className="eyebrow text-muted-foreground">Why this matters</h3>
          <ul className="mt-6 divide-y border-y">
            {["Home to Pray the Bay Headquarters & the first 24/7 Prayer Room", "Capacity to train 100 students through our prayer and leadership school", "90 parking spaces located just half a block away", "A visible space for worship, intercession, & regional unity"].map((x) => (
              <li key={x} className="py-5 font-display text-xl">{x}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

