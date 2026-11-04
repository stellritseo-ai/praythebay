import { Section } from "@/components/site/Section";
import { Faq, JsonLd } from "@/components/site/primitives";
import { faqLd } from "@/lib/seo";

const faqs = [
  { q: "When are Pray The Bay prayer gatherings?", a: "Online and in-person prayer gatherings run Monday through Friday, hosted by prayer and worship leaders from across the Bay. See the online and in-person pages for current times." },
  { q: "Do I need experience to join?", a: "No. Gatherings are participatory, Scripture-centered, and simple — designed to help us remain faithful in prayer morning, noon, and night." },
  { q: "Where is the prayer room?", a: "Our prayer room is a physical space set apart to minister to Jesus and intercede for the Bay Area. Visit the In-Person Prayer page for the current location and schedule." },
];

export function PrayFaqSection() {
  return (
    <Section tone="paper">
      <JsonLd data={faqLd(faqs)} />
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <h2 className="display-md">Before you come</h2>
        <Faq items={faqs} />
      </div>
    </Section>
  );
}

