import { Section } from "@/components/site/Section";
import { org } from "@/content/site";

export function ShiningOneLinksSection() {
  return (
    <Section>
      <ul className="grid gap-px bg-border md:grid-cols-3">
        {[
          ["The book", "Available through Seedbed.", org.shiningOneBook, "Order"],
          ["Gatherings", "Register your interest in an upcoming Shining One gathering.", org.shiningOneGathering, "Interest form"],
          ["FAQ", "Answers to common questions about The Shining One.", org.shiningOneFaq, "Read FAQ"],
        ].map(([t, d, u, c]) => (
          <li key={t} className="bg-ivory p-8 md:p-10">
            <h2 className="display-md">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
            <a href={u} target="_blank" rel="noopener noreferrer" className="eyebrow link-underline mt-8 inline-block">{c} ↗</a>
          </li>
        ))}
      </ul>
      <div className="mt-16 border-t pt-10">
        <h2 className="eyebrow text-muted-foreground">Upcoming gatherings</h2>
        <p className="mt-4 font-display text-2xl">Gathering dates will be shared soon. Follow along on{" "}
          <a className="link-underline italic" href={org.shiningOneInstagram} target="_blank" rel="noopener noreferrer">Instagram</a>.
        </p>
      </div>
    </Section>
  );
}

