import { Link } from "@tanstack/react-router";
import { Cta, JsonLd, Photo, Reveal } from "@/components/site/primitives";
import { events, org, photos } from "@/content/site";
import { eventLd } from "@/lib/seo";

export function EventsSection() {
  const list = [
    {
      to: "/seek-week-2026",
      e: events.seekWeek,
      photo: photos.prayerRoomWindow,
      alt: "A woman prays beneath stained glass in the Pray The Bay prayer room",
      cta: "Get Your Church Involved",
      href: "/seek-week-2026",
    },
    {
      to: "/renaissance-27",
      e: events.renaissance,
      photo: photos.hall,
      alt: "Worshippers fill a hall at a past Renaissance prayer and worship gathering",
      cta: "Purchase Tickets",
      href: org.renaissanceTickets,
    },
  ];
  return (
    <section aria-labelledby="events-h" className="bg-ivory">
      <JsonLd
        data={[
          eventLd({
            name: events.seekWeek.title,
            description: events.seekWeek.summary,
            startDate: events.seekWeek.startDate,
            endDate: events.seekWeek.endDate,
            location: { name: "Churches across the Bay Area", address: "San Francisco Bay Area, CA" },
            url: `${org.url}/seek-week-2026`,
          }),
          eventLd({
            name: "Renaissance '27 — 6th Annual Prayer & Worship Gathering",
            description: events.renaissance.summary,
            startDate: events.renaissance.startDate,
            endDate: events.renaissance.endDate,
            location: { name: "Rise City Church", address: "Redwood City, CA" },
            url: `${org.url}/renaissance-27`,
            offerUrl: org.renaissanceTickets,
          }),
        ]}
      />
      <div className="mx-auto max-w-[1600px] px-5 py-28 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b pb-8">
          <h2 id="events-h" className="display-lg">Gather with us</h2>
          <p className="eyebrow text-muted-foreground">Upcoming · 2026 — 2027</p>
        </Reveal>
        <div className="mt-14 space-y-24">
          {list.map((x, i) => (
            <Reveal key={x.to}>
              <article className={`grid items-center gap-10 lg:grid-cols-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Link to={x.to} className="group block aspect-[4/3] overflow-hidden lg:col-span-7">
                  <Photo src={x.photo} alt={x.alt} className="img-zoom group-hover:scale-105" />
                </Link>
                <div className="lg:col-span-5">
                  <p className="eyebrow text-gold">{x.e.dates}</p>
                  <h3 className="display-lg mt-4">{x.e.title}</h3>
                  <p className="mt-2 font-display text-2xl italic text-muted-foreground">{x.e.tagline}</p>
                  <p className="prose-body mt-6 text-muted-foreground">{x.e.summary}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-6 border-t pt-6 text-sm">
                    <div><dt className="eyebrow text-muted-foreground">When</dt><dd className="mt-2">{x.e.dates}</dd></div>
                    <div><dt className="eyebrow text-muted-foreground">Where</dt><dd className="mt-2">{x.e.location}</dd></div>
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Cta to={x.href}>{x.cta}</Cta>
                    <Cta to={x.to} variant="outlineDark">Details</Cta>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

