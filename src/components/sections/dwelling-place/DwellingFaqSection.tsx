import { Section } from "@/components/site/Section";
import { Cta, Faq, JsonLd } from "@/components/site/primitives";
import { org } from "@/content/site";
import { faqLd } from "@/lib/seo";
import { dwellingInterestHref } from "./DwellingHeroSection";

const faqs = [
  { q: "How long is Dwelling Place School?", a: "Nine months, September through May. The school start date is September 2026." },
  { q: "Is it in person or online?", a: "Hybrid — two days in person in San Francisco and two days online each week." },
  { q: "How much does it cost?", a: "$4,995, with payment plans available." },
  { q: "Who teaches?", a: "Local pastors, missionaries, and national leaders." },
  { q: "How do I apply?", a: `Join the interest list by emailing ${org.dwellingEmail}, or visit the Dwelling Place Linktree for the latest application information.` },
];

export function DwellingFaqSection() {
  return (
    <Section tone="ink">
      <JsonLd data={faqLd(faqs)} />
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="display-md">Questions</h2>
          <p className="mt-6 text-ivory/60">If your heart burns for revival and you’re ready to be trained as a missionary of prayer and presence, this is your invitation.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta to={dwellingInterestHref} variant="sky">Join the Interest List</Cta>
          </div>
          <p className="mt-6 text-sm text-ivory/50">{org.dwellingEmail}</p>
        </div>
        <Faq items={faqs} dark />
      </div>
    </Section>
  );
}

