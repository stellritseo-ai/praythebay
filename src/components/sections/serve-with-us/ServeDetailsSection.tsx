import { Section } from "@/components/site/Section";
import { Cta, Reveal } from "@/components/site/primitives";
import { org } from "@/content/site";

export function ServeDetailsSection() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="display-lg">Why serve with us?</h2>
          <p className="prose-body mt-6 text-muted-foreground">
            We exist to support, carry, and pray for the local church and believers throughout the Bay Area. God is awakening people
            with a zeal for His house and a love to see His church radiant.
          </p>
          <ul className="mt-10 space-y-4 border-t pt-8">
            {["Be part of a community that prays and serves together", "Support local churches in tangible and spiritual ways", "Help carry the vision of a vibrant, radiant, praying church across the Bay"].map((x) => (
              <li key={x} className="flex gap-4"><span className="text-sky">—</span>{x}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="bg-ink p-8 text-ivory md:p-12">
          <h2 className="eyebrow text-sky">Ways you can serve</h2>
          <ol className="mt-8 divide-y divide-line-dark">
            {["Lead with us online", "Serve on a prayer team for local events and conferences", "Volunteer with administration or logistics", "Partner with us in interceding for the church of the Bay"].map((x, i) => (
              <li key={x} className="flex gap-6 py-5 font-display text-2xl">
                <span className="text-ivory/40">0{i + 1}</span>{x}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-ivory/60">Sign up to hear more and discover how you can take part in carrying this vision.</p>
          <div className="mt-6"><Cta to={org.serveForm} variant="light">Sign Up to Serve</Cta></div>
        </Reveal>
      </div>
    </Section>
  );
}

