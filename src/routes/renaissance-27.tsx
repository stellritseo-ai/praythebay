import { createFileRoute } from "@tanstack/react-router";
import { ImageHero, Section } from "@/components/site/PageHero";
import { Cta, JsonLd, Photo, Reveal } from "@/components/site/primitives";
import { events, img, org, photos } from "@/content/site";
import { eventLd, pageHead } from "@/lib/seo";

const e = events.renaissance;

export const Route = createFileRoute("/renaissance-27")({
  head: () =>
    pageHead({
      title: "Renaissance '27 — Prayer & Worship Gathering, Feb 12–13, Redwood City | Pray The Bay",
      description: "The 6th annual Renaissance prayer and worship gathering, February 12–13, 2027 at Rise City Church, Redwood City. Unified worship, prayer for revival, equipping and activation.",
      path: "/renaissance-27",
      image: img(photos.hall),
    }),
  component: Renaissance,
});

const expect = [
  ["Unified Worship", "Voices and churches from across the Bay Area gathered as one."],
  ["Prayer for Revival", "Contending together for spiritual awakening in our region."],
  ["Equipping & Impartation", "Voices for revival from around the U.S. pouring into the local Body."],
  ["Activation", "Practical tools to carry this fire back into your church and city."],
];

function Renaissance() {
  return (
    <>
      <JsonLd
        data={eventLd({
          name: "Renaissance '27 — 6th Annual Prayer & Worship Gathering",
          description: e.summary,
          startDate: e.startDate,
          endDate: e.endDate,
          location: { name: "Rise City Church", address: "Redwood City, CA" },
          url: `${org.url}/renaissance-27`,
          offerUrl: org.renaissanceTickets,
          image: img(photos.hall),
        })}
      />
      <ImageHero
        photo={photos.stage}
        alt="A speaker sits on stage under the word MISSION at a Pray The Bay gathering"
        eyebrow={e.tagline}
        title={<>RENAISSANCE <em className="text-gold">’27</em></>}
        intro={<><strong className="text-ivory">{e.dates}</strong> · {e.location}</>}
        trail={[{ name: "Home", path: "/" }, { name: "Gather", path: "/pray-with-us" }, { name: "Renaissance '27", path: "/renaissance-27" }]}
        align="center"
      >
        <Cta to={org.renaissanceTickets} variant="gold">Purchase Tickets</Cta>
      </ImageHero>
      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-muted-foreground">Our vision</p>
            <h2 className="display-lg mt-6">Rediscover our shared identity as a people rooted in prayer.</h2>
          </Reveal>
          <Reveal className="prose-body space-y-6 text-muted-foreground lg:col-span-5 lg:col-start-8">
            <p>Join us for this powerful time bringing together churches from across the Bay Area with voices for revival from around the U.S.</p>
            <p>Together, we will rediscover our shared identity as a people rooted in prayer and the mission of God — a people who are together being formed into God's dwelling place. Grow in passion for God's presence as you are equipped and activated to steward revival and transformation in our region.</p>
          </Reveal>
        </div>
      </Section>
      <Section tone="night">
        <h2 className="display-lg">What to expect</h2>
        <ul className="mt-14 grid gap-px bg-line-dark md:grid-cols-2">
          {expect.map(([t, d], i) => (
            <li key={t} className="bg-night p-8 md:p-12">
              <span className="eyebrow text-gold">0{i + 1}</span>
              <h3 className="display-md mt-6">{t}</h3>
              <p className="mt-3 text-ivory/65">{d}</p>
            </li>
          ))}
        </ul>
      </Section>
      <section className="grid bg-ivory lg:grid-cols-2">
        <div className="min-h-[50svh]"><Photo src={photos.hall} alt="Churches gathered in prayer at a previous Renaissance" /></div>
        <div className="flex flex-col justify-center px-5 py-20 md:px-16">
          <Reveal>
            <h2 className="display-lg">Six years of seeking His face.</h2>
            <p className="prose-body mt-6 text-muted-foreground">
              For six years, Renaissance has brought together pastors, leaders, and everyday believers from across the Bay Area and
              beyond with one shared cry — that God would move powerfully in our region. This year, we believe He's inviting us deeper.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t pt-6 text-sm">
              <div><dt className="eyebrow text-muted-foreground">Dates</dt><dd className="mt-2">{e.dates}</dd></div>
              <div><dt className="eyebrow text-muted-foreground">Venue</dt><dd className="mt-2">{e.location}</dd></div>
              <div className="col-span-2"><dt className="eyebrow text-muted-foreground">Speakers</dt><dd className="mt-2">Guest speakers will be announced soon.</dd></div>
            </dl>
            <p className="mt-10 font-display text-2xl italic">Bring your church, your team, your friends — and come expectant.</p>
            <div className="mt-8"><Cta to={org.renaissanceTickets}>Register Today</Cta></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
