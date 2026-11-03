import { createFileRoute } from "@tanstack/react-router";
import { ImageHero, Section } from "@/components/site/PageHero";
import { Cta, JsonLd, Reveal } from "@/components/site/primitives";
import { events, img, org, photos } from "@/content/site";
import { eventLd, pageHead } from "@/lib/seo";

const e = events.seekWeek;
const days = [
  ["Monday", "Family"],
  ["Tuesday", "Friends"],
  ["Wednesday", "Coworkers & Classmates"],
  ["Thursday", "Neighbors"],
  ["Friday", "Strangers & Enemies"],
];

export const Route = createFileRoute("/seek-week-2026")({
  head: () =>
    pageHead({
      title: "SEEK WEEK 2026 — Bay-Wide Prayer for the Lost, Nov 2–6 | Pray The Bay",
      description: "SEEK WEEK 2026, November 2–6: a Bay-wide call to continuous prayer and worship for salvation, renewal and awakening across every region of the Bay Area.",
      path: "/seek-week-2026",
      image: img(photos.prayerRoomWindow),
    }),
  component: SeekWeek,
});

function SeekWeek() {
  return (
    <>
      <JsonLd
        data={eventLd({
          name: e.title,
          description: e.summary,
          startDate: e.startDate,
          endDate: e.endDate,
          location: { name: "Churches across the Bay Area", address: "San Francisco Bay Area, CA" },
          url: `${org.url}/seek-week-2026`,
          image: img(photos.prayerRoomWindow),
        })}
      />
      <ImageHero
        photo={photos.prayerRoomWindow}
        alt="A woman prays with an open Bible beneath stained glass"
        eyebrow={`${e.dates} · ${e.tagline}`}
        title={<>SEEK WEEK <span className="text-gold">2026</span></>}
        intro={e.summary}
        trail={[{ name: "Home", path: "/" }, { name: "Gather", path: "/pray-with-us" }, { name: "SEEK WEEK 2026", path: "/seek-week-2026" }]}
      >
        <Cta to={`mailto:${org.email}?subject=${encodeURIComponent("SEEK WEEK 2026 — our church wants to take part")}`} variant="light">Get Your Church Involved</Cta>
        <Cta to={org.seekWeekGuide} variant="outlineLight">SEEK WEEK Guide</Cta>
      </ImageHero>
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="display-lg">A Bay-wide call to prayer for the lost.</h2>
          </Reveal>
          <Reveal className="prose-body space-y-6 text-muted-foreground lg:col-span-6 lg:col-start-7">
            <p>For five days, we will intentionally cry out for people who need an encounter with Jesus — believing that God is drawing people to Himself and inviting His Church to respond with boldness, love, and faith.</p>
            <p className="font-display text-2xl leading-snug text-ink">
              We are seeking God for the lost. We are praying for salvation. We are preparing the way for awakening.
            </p>
          </Reveal>
        </div>
      </Section>
      <Section tone="night">
        <p className="eyebrow text-sky">Five days. Five prayer focuses.</p>
        <h2 className="display-lg mt-5 max-w-3xl">Each day, a different sphere of relationships.</h2>
        <ol className="mt-16 grid border-t border-line-dark md:grid-cols-5">
          {days.map(([d, f], i) => (
            <Reveal key={d} delay={i * 0.08}>
              <li className="h-full border-b border-line-dark py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0">
                <p className="eyebrow text-gold">{d}</p>
                <p className="display-md mt-6">{f}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="prose-body mt-12 max-w-2xl text-ivory/70">
          Each day, we will cry out for the lost in these areas of our lives, believing God for salvation and transformation —
          asking God to open hearts, draw people to Jesus, and give us opportunities to share the Gospel.
        </p>
      </Section>
      <Section tone="sky">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <h2 className="display-xl uppercase">Midnight <em className="normal-case">to</em> midnight.</h2>
          <p className="prose-body max-w-lg">
            Church doors will be open midnight to midnight each day across the Bay, creating a continuous rhythm of prayer and
            worship across the region.
          </p>
        </div>
      </Section>
      <Section>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="prose-body text-muted-foreground">
            There are people in our families, friendships, workplaces, classrooms, neighborhoods — and even those we consider
            strangers or enemies — who need to encounter the love and saving power of Jesus.
          </p>
          <p className="display-md mt-10">
            We pray until our hearts are moved with compassion. We pray until the Church is awakened.{" "}
            <em>We pray until the lost encounter Jesus.</em>
          </p>
          <div className="mt-14 border-t pt-10">
            <p className="eyebrow text-gold">Join us · {e.dates}</p>
            <p className="mt-4 text-muted-foreground">Gather your church. Gather your prayer team. Invite your community. Take your place in the prayer room.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Cta to={`mailto:${org.email}?subject=${encodeURIComponent("SEEK WEEK 2026 — our church wants to take part")}`}>Get Your Church Involved</Cta>
              <Cta to="/pray-with-us" variant="outlineDark">Find a Prayer Gathering</Cta>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
