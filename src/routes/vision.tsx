import { createFileRoute } from "@tanstack/react-router";
import { TypeHero, Section } from "@/components/site/PageHero";
import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { photos } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/vision")({
  head: () =>
    pageHead({
      title: "Our Vision — Revival, Renewal & Awakening | Pray The Bay",
      description: "Revive the local Church. Renew our cities. Awaken people to the presence of God. The vision for 24/7 prayer rooms in every region of the Bay Area.",
      path: "/vision",
    }),
  component: Vision,
});

const lines = [
  ["Revive", "the Local Church", photos.layingHands, "Leaders praying over one another"],
  ["Renew", "Our Cities", photos.outdoorPrayer, "Believers praying outdoors in a Bay Area city"],
  ["Awaken", "People to the Presence of God", photos.sunsetPrayer, "Friends praying at sunset"],
] as const;

function Vision() {
  return (
    <>
      <TypeHero
        eyebrow="Our vision"
        title={<>Revival. Renewal. <em>Awakening.</em></>}
        intro="Pray the Bay is a unifying prayer & worship movement for and through the local Church of the San Francisco Bay Area. We are believing for revival in the Church, renewal in our cities, and an awakening to the presence of God."
        trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Vision", path: "/vision" }]}
      />
      <section className="bg-ivory">
        {lines.map(([v, rest, p, alt], i) => (
          <div key={v} className="mx-auto grid max-w-[1600px] items-center gap-8 border-t px-5 py-14 md:px-10 lg:grid-cols-12">
            <span className="eyebrow text-muted-foreground lg:col-span-1">0{i + 1}</span>
            <Reveal className="lg:col-span-6">
              <h2 className="display-xl">
                {v} <em className="text-stone">{rest}</em>
              </h2>
            </Reveal>
            <Reveal className="aspect-[16/10] overflow-hidden lg:col-span-4 lg:col-start-9">
              <Photo src={p} alt={alt} w={1000} />
            </Reveal>
          </div>
        ))}
      </section>
      <Section tone="night">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-sky">The future we see</p>
          <p className="display-lg mt-8">
            24/7 prayer rooms with led prayer & worship sessions every <em className="text-sky">morning, noon, and night</em> in each region across the Bay.
          </p>
        </Reveal>
        <ul className="mt-20 grid gap-px bg-line-dark md:grid-cols-3">
          {[
            ["10", "Regional 24/7 Prayer Rooms"],
            ["200", "Prayer & Worship Missionaries"],
            ["1", "United Praying Church"],
          ].map(([n, l]) => (
            <li key={l} className="bg-night p-10 text-center">
              <p className="font-display text-7xl text-sky md:text-8xl">{n}</p>
              <p className="eyebrow mt-4 text-ivory/70">{l}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-ivory/40">Goals as stated in the Pray The Bay vision.</p>
        <div className="mt-14 flex justify-center gap-3">
          <Cta to="/give" variant="light">Sow for Awakening</Cta>
          <Cta to="/pray-with-us" variant="outlineLight">Pray With Us</Cta>
        </div>
      </Section>
    </>
  );
}
