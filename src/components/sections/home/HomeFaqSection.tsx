import { Faq, JsonLd } from "@/components/site/primitives";
import { faqLd } from "@/lib/seo";

const faqs = [
  {
    q: "What is Pray The Bay?",
    a: "Pray The Bay is a unifying prayer and worship movement for and through the local Church of the San Francisco Bay Area. We are not a local church — we are local church people who long to see the Church reach her full potential through prayer.",
  },
  {
    q: "Where and when can I pray with Pray The Bay?",
    a: "We host online and in-person prayer gatherings Monday through Friday, led by prayer and worship leaders from across the Bay Area. Visit Prayer Gatherings to join online or find the prayer room.",
  },
  {
    q: "How can I support the movement?",
    a: "You can serve with us, become a community or movement partner, support our prayer missionaries, or sow toward the Pray The Bay headquarters and first 24/7 prayer room.",
  },
];

export function HomeFaqSection() {
  return (
    <section aria-labelledby="faq-h" className="bg-paper">
      <JsonLd data={faqLd(faqs)} />
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-[1fr_2fr]">
        <h2 id="faq-h" className="display-md">Questions, answered.</h2>
        <Faq items={faqs} />
      </div>
    </section>
  );
}

