import { createFileRoute } from "@tanstack/react-router";
import { ImageHero, Section } from "@/components/site/PageHero";
import { Cta, Faq, JsonLd, Photo, Reveal } from "@/components/site/primitives";
import { img, org, photos } from "@/content/site";
import { faqLd, pageHead } from "@/lib/seo";

const faqs = [
  { q: "Is Pray The Bay a church?", a: "No. We are not a local church. We are local church people that long to see the Church reach her full potential through prayer. We exist to strengthen the Church, not replace it." },
  { q: "How did Pray The Bay begin?", a: "Pray The Bay began as Experience Church’s Prayer Ministry and quickly expanded into a prayer movement for the entire Bay Area." },
  { q: "Which regions does Pray The Bay serve?", a: "The Pray The Bay Leadership Team represents five Bay Area regions, currently with plans for the other five regions." },
];

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Pray The Bay — Who We Are | Bay Area Prayer Movement",
      description: "Pray The Bay is a family of intercessors, pastors, prayer directors, marketplace leaders and Gen-Zers who love and serve the local Church of the San Francisco Bay Area.",
      path: "/about",
      image: img(photos.embrace),
    }),
  component: About,
});

function About() {
  return (
    <>
      <ImageHero
        photo={photos.embrace}
        alt="Believers embrace in prayer inside a Bay Area church"
        eyebrow="Who we are"
        title={<>Followers of Jesus who love <em className="text-sky">the local Church.</em></>}
        trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
      />
      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-3xl leading-snug md:text-5xl md:leading-tight">
              We are a family of faithful intercessors, pastors, prayer directors, marketplace leaders, and zealous Gen-Zers.
              We want to give Jesus what He wants… <em>a praying church that builds a dwelling place for Him.</em>
            </p>
          </Reveal>
          <Reveal className="prose-body space-y-6 text-muted-foreground lg:col-span-4 lg:col-start-9 lg:pt-4">
            <p>We are not a local church. We are local church people that long to see the Church reach her full potential through prayer.</p>
            <p className="font-display text-2xl italic text-ink">We believe a united, praying Church is unstoppable.</p>
          </Reveal>
        </div>
      </Section>
      <Section tone="night">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal className="aspect-[4/5] overflow-hidden">
            <Photo src={photos.layingHands} alt="Pastors from across the Bay pray over each other" />
          </Reveal>
          <Reveal>
            <p className="eyebrow text-sky">Our story</p>
            <h2 className="display-lg mt-6">From one church’s prayer ministry to a Bay-wide movement.</h2>
            <p className="prose-body mt-8 text-ivory/70">
              Pray The Bay began as{" "}
              <a href={org.experienceChurch} target="_blank" rel="noopener noreferrer" className="link-underline text-ivory">Experience Church</a>’s
              Prayer Ministry and quickly expanded into a prayer movement for the entire Bay Area. The Pray The Bay Leadership Team
              represents five Bay Area regions, currently with plans for the other five regions.
            </p>
            <dl className="mt-12 grid gap-10 border-t border-line-dark pt-10 sm:grid-cols-2">
              <div>
                <dt className="eyebrow text-sky">We host</dt>
                <dd className="mt-3 text-ivory/75">Online and in-person prayer gatherings Monday through Friday, hosted by prayer and worship leaders from across the Bay.</dd>
              </div>
              <div>
                <dt className="eyebrow text-sky">We provide</dt>
                <dd className="mt-3 text-ivory/75">Resources for people to grow their own prayer life, plus opportunities and training for prayer and worship leaders.</dd>
              </div>
            </dl>
            <div className="mt-12 flex flex-wrap gap-3">
              <Cta to="/vision" variant="light">Our Vision</Cta>
              <Cta to="/team" variant="outlineLight">Meet Our Team</Cta>
            </div>
          </Reveal>
        </div>
      </Section>
      <Section tone="paper">
        <JsonLd data={faqLd(faqs)} />
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <h2 className="display-md">About the movement</h2>
          <Faq items={faqs} />
        </div>
      </Section>
    </>
  );
}
