import { ImageHero } from "@/components/site/ImageHero";
import { Cta, JsonLd } from "@/components/site/primitives";
import { events, img, org, photos } from "@/content/site";
import { eventLd } from "@/lib/seo";

const e = events.renaissance;

export function RenaissanceHeroSection() {
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
    </>
  );
}

