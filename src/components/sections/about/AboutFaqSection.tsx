import { Section } from "@/components/site/Section";
import { Faq, JsonLd } from "@/components/site/primitives";
import { faqLd } from "@/lib/seo";

const faqs = [
  { q: "Is Pray The Bay a church?", a: "No. We are not a local church. We are local church people that long to see the Church reach her full potential through prayer. We exist to strengthen the Church, not replace it." },
  { q: "How did Pray The Bay begin?", a: "Pray The Bay began as Experience Church’s Prayer Ministry and quickly expanded into a prayer movement for the entire Bay Area." },
  { q: "Which regions does Pray The Bay serve?", a: "The Pray The Bay Leadership Team represents five Bay Area regions, currently with plans for the other five regions." },
];

export function AboutFaqSection() {
  return (
    <Section tone="paper">
      <JsonLd data={faqLd(faqs)} />
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <h2 className="display-md">About the movement</h2>
        <Faq items={faqs} />
      </div>
    </Section>
  );
}

