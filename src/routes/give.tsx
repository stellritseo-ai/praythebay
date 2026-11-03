import { createFileRoute } from "@tanstack/react-router";
import { ImageHero, Section } from "@/components/site/PageHero";
import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { img, org, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/give")({
  head: () =>
    pageHead({
      title: "Sow for Awakening — Give to Pray The Bay",
      description: "Give toward the Pray The Bay headquarters and first 24/7 prayer room in the Bay Area, and support prayer and worship missionaries. EIN 93-3285784.",
      path: "/give",
      image: img(photos.sunsetPrayer),
    }),
  component: Give,
});

function Give() {
  return (
    <>
      <ImageHero
        photo={photos.sunsetPrayer}
        alt="Friends kneel together in prayer as the sun sets over the Bay"
        eyebrow="Sow for awakening"
        title={<>From the most prayerless region <em className="text-sky">to the most prayerful.</em></>}
        intro="We envision a unified church with 24/7 prayer across all 10 regions of the Bay, fueled by worship and led prayer day and night — and we are committed to training and sending missionaries to steward these prayer spaces and serve local churches with love."
        trail={[{ name: "Home", path: "/" }, { name: "Partner", path: "/movement-partners" }, { name: "Sow for Awakening", path: "/give" }]}
      >
        <Cta to={org.give} variant="gold">Sow for Awakening Today</Cta>
      </ImageHero>
      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-gold">Headquarters & first 24/7 prayer room</p>
            <h2 className="display-lg mt-6">A spiritual and strategic hub for the Bay.</h2>
            <p className="prose-body mt-6 text-muted-foreground">
              We believe God is inviting us to step out in faith to establish the Pray The Bay Headquarters and launch our first 24/7
              prayer room in the Bay Area — paving the way for nine more 24/7 prayer rooms across the region, just as our first All
              Night Prayer Gathering sparked gatherings throughout the Bay.
            </p>
            <div className="mt-10"><Cta to={org.give}>Sow for Headquarters</Cta></div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8">
            <h3 className="eyebrow text-muted-foreground">Why this matters</h3>
            <ul className="mt-6 divide-y border-y">
              {["Home to Pray the Bay Headquarters & the first 24/7 Prayer Room", "Capacity to train 100 students through our prayer and leadership school", "90 parking spaces located just half a block away", "A visible space for worship, intercession, & regional unity"].map((x) => (
                <li key={x} className="py-5 font-display text-xl">{x}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
      <section className="grid bg-night text-ivory lg:grid-cols-2">
        <div className="min-h-[50svh]"><Photo src={photos.micBW} alt="A prayer missionary leading prayer" /></div>
        <div className="flex flex-col justify-center px-5 py-20 md:px-16">
          <p className="eyebrow text-sky">Missionaries</p>
          <h2 className="display-lg mt-6">Standing on the wall for our cities.</h2>
          <p className="prose-body mt-6 text-ivory/70">
            Prayer & worship missionaries are essential to the life of the Church. We believe God is calling us to deploy hundreds of
            missionaries to serve in 24/7 prayer rooms across the Bay Area, supported through partnership, matching funds and housing.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Cta to={org.give} variant="light">Sow for Missionaries</Cta>
            <Cta to="/missionaries" variant="outlineLight">Meet Our Missionaries</Cta>
          </div>
        </div>
      </section>
      <Section tone="paper">
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="display-md">Donor advised funds & appreciated assets</h2>
          <div className="text-muted-foreground">
            <p>You can also give appreciated assets like stocks and crypto simply and securely through Charityvest — search “Pray The Bay Area”.</p>
            <p className="mt-4">EIN <strong className="text-ink">{org.ein}</strong>. If Pray The Bay doesn’t appear, contact us at{" "}
              <a href={`mailto:${org.email}`} className="link-underline text-ink">{org.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
