import { ImageHero } from "@/components/site/ImageHero";
import { Cta, JsonLd } from "@/components/site/primitives";
import { events, img, org, photos } from "@/content/site";
import { eventLd } from "@/lib/seo";

const e = events.seekWeek;

export function SeekWeekHeroSection() {
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
    </>
  );
}

