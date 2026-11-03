import { createFileRoute } from "@tanstack/react-router";
import { ImageHero, Section } from "@/components/site/PageHero";
import { Cta, Faq, JsonLd, Photo, Reveal } from "@/components/site/primitives";
import { img, org, photos } from "@/content/site";
import { faqLd, pageHead } from "@/lib/seo";

const faqs = [
  { q: "When are Pray The Bay prayer gatherings?", a: "Online and in-person prayer gatherings run Monday through Friday, hosted by prayer and worship leaders from across the Bay. See the online and in-person pages for current times." },
  { q: "Do I need experience to join?", a: "No. Gatherings are participatory, Scripture-centered, and simple — designed to help us remain faithful in prayer morning, noon, and night." },
  { q: "Where is the prayer room?", a: "Our prayer room is a physical space set apart to minister to Jesus and intercede for the Bay Area. Visit the In-Person Prayer page for the current location and schedule." },
];

export const Route = createFileRoute("/pray-with-us")({
  head: () =>
    pageHead({
      title: "Prayer Gatherings in the San Francisco Bay Area — Online & In-Person | Pray The Bay",
      description: "Join Christian prayer gatherings across the Bay Area. Pray online morning, noon and night, or come to the Pray The Bay prayer room in person, Monday to Friday.",
      path: "/pray-with-us",
      image: img(photos.prayerRoomDark),
    }),
  component: PrayWithUs,
});

function PrayWithUs() {
  return (
    <>
      <ImageHero
        photo={photos.prayerRoomDark}
        alt="People praying in the dim light of the Pray The Bay prayer room"
        eyebrow="Prayer gatherings"
        title={<>Prayer is how we stay before the Lord <em className="text-sky">together.</em></>}
        intro="Pray the Bay exists to minister to Jesus, to stand in the gap for our region, and to be formed as a people who know how to pray with both intimacy and authority."
        trail={[{ name: "Home", path: "/" }, { name: "Prayer Gatherings", path: "/pray-with-us" }]}
      >
        <Cta to={org.onlinePrayer} variant="light">Join Online Prayer</Cta>
        <Cta to={org.inPersonPrayer} variant="outlineLight">In-Person Prayer</Cta>
      </ImageHero>
      <Section>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="display-md">
            Throughout the week, we gather in two expressions — <em>online and in person</em> — carrying the same heart, the same
            Scriptures, and the same burden for the Bay Area. Choose the way that best fits your season.
          </p>
        </Reveal>
      </Section>
      {[
        {
          n: "01", t: "Online Prayer", s: "Praying together across the Bay", photo: photos.online, alt: "A woman praying online from her laptop",
          d: "Throughout the week, people from across the Bay Area gather online to minister to the Lord, pray from Scripture, and contend for revival in our cities. These gatherings are participatory, Scripture-centered, and simple — designed to help us remain faithful in prayer morning, noon, and night.",
          q: "Online prayer allows us to stay aligned and watchful, even when we cannot be physically present.",
          steps: ["Open the online prayer page", "Pick a morning, noon or night session", "Join the call and pray from Scripture with us"],
          href: org.onlinePrayer, cta: "Join Online Prayer", tone: "paper" as const,
        },
        {
          n: "02", t: "In-Person Prayer", s: "Ministering to the Lord together", photo: photos.circle, alt: "A circle of people praying together in the prayer room",
          d: "Our prayer room is a physical space set apart to minister to Jesus, stand in intercession for the Bay Area, and be formed through sustained, embodied prayer. Here, we gather to behold Him, pray from Scripture, and offer our full presence — our voices, our bodies, and our time — before the Lord.",
          q: "As we return day after day, this rhythm forms us into a people shaped by intimacy and authority in prayer.",
          steps: ["Check the in-person schedule", "Come to the prayer room", "Join a led set or pray at your own pace"],
          href: org.inPersonPrayer, cta: "In-Person Prayer", tone: "night" as const,
        },
      ].map((x, i) => (
        <Section key={x.t} tone={x.tone}>
          <div className={`grid items-center gap-14 lg:grid-cols-2 ${i ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal className="aspect-[4/5] overflow-hidden">
              <Photo src={x.photo} alt={x.alt} />
            </Reveal>
            <Reveal>
              <p className={`eyebrow ${i ? "text-sky" : "text-muted-foreground"}`}>{x.n} — {x.s}</p>
              <h2 className="display-lg mt-5 uppercase">{x.t}</h2>
              <p className={`prose-body mt-6 ${i ? "text-ivory/70" : "text-muted-foreground"}`}>{x.d}</p>
              <p className="mt-6 font-display text-2xl italic">{x.q}</p>
              <h3 className="eyebrow mt-10">How to join</h3>
              <ol className="mt-4 space-y-3">
                {x.steps.map((s, k) => (
                  <li key={s} className="flex gap-4"><span className="font-display text-xl text-stone">{k + 1}.</span>{s}</li>
                ))}
              </ol>
              <div className="mt-10"><Cta to={x.href} variant={i ? "light" : "dark"}>{x.cta}</Cta></div>
            </Reveal>
          </div>
        </Section>
      ))}
      <Section tone="paper">
        <JsonLd data={faqLd(faqs)} />
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <h2 className="display-md">Before you come</h2>
          <Faq items={faqs} />
        </div>
      </Section>
    </>
  );
}
