import { createFileRoute } from "@tanstack/react-router";
import { ImageHero, Section } from "@/components/site/PageHero";
import { Cta, Faq, JsonLd, Photo, Reveal } from "@/components/site/primitives";
import { img, org, photos } from "@/content/site";
import { faqLd, pageHead } from "@/lib/seo";

const faqs = [
  { q: "How long is Dwelling Place School?", a: "Nine months, September through May. The school start date is September 2026." },
  { q: "Is it in person or online?", a: "Hybrid — two days in person in San Francisco and two days online each week." },
  { q: "How much does it cost?", a: "$4,995, with payment plans available." },
  { q: "Who teaches?", a: "Local pastors, missionaries, and national leaders." },
  { q: "How do I apply?", a: `Join the interest list by emailing ${org.dwellingEmail}, or visit the Dwelling Place Linktree for the latest application information.` },
];

export const Route = createFileRoute("/dwelling-place")({
  head: () =>
    pageHead({
      title: "Dwelling Place School — 9-Month Prayer & Worship Training in San Francisco | Pray The Bay",
      description: "Dwelling Place Discipleship Prayer School: a nine-month hybrid missionary training program in San Francisco forming men and women of prayer, worship and mission.",
      path: "/dwelling-place",
      image: img(photos.studyChairs),
    }),
  component: School,
});

function School() {
  const interest = `mailto:${org.dwellingEmail}?subject=${encodeURIComponent("Interest list — Dwelling Place School")}&body=${encodeURIComponent("Name:\nCity:\nChurch:\nI'm interested as: Student / Pastor or Church Partner / Supporter or Prayer Partner\n")}`;
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <ImageHero
        photo={photos.brightRoom}
        alt="Students pray and read in the sunlit Dwelling Place prayer room"
        eyebrow="Dwelling Place — Discipleship Prayer School"
        title={<><em>Behold</em> the beauty of Jesus. <em className="text-sky">Become</em> His dwelling. Build His house of prayer.</>}
        trail={[{ name: "Home", path: "/" }, { name: "Dwelling Place School", path: "/dwelling-place" }]}
      >
        <Cta to={interest} variant="light">Join the Interest List</Cta>
        <Cta to={org.dwellingLinktree} variant="outlineLight">Learn More</Cta>
      </ImageHero>
      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="display-lg">What is Dwelling Place?</h2>
          </Reveal>
          <Reveal className="prose-body space-y-6 text-muted-foreground lg:col-span-6 lg:col-start-7">
            <p>Dwelling Place — Discipleship Prayer School is a <strong className="text-ink">nine-month missionary training program</strong> in San Francisco devoted to forming men and women of prayer, worship, and mission.</p>
            <p>Through immersive rhythms of Scripture, worship, prayer rooms, discipleship, and outreach, students are marked by the presence of God and sent to strengthen the Church.</p>
            <p className="font-display text-2xl italic text-ink">This isn’t a traditional classroom. It’s a place of encounter.</p>
          </Reveal>
        </div>
      </Section>
      <Section tone="night">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-sky">The vision</p>
          <p className="display-lg mt-8">The Bay Area is one of the most prayerless regions in America. <em className="text-sky">We believe Jesus is turning it into one of the most prayerful.</em></p>
          <p className="prose-body mx-auto mt-10 max-w-2xl text-ivory/70">
            Dwelling Place exists to train and send a generation who will build dwelling places for God — altars of prayer, worship,
            and mission in their local churches and cities. Every student becomes part of a story: the Bay becoming a resting place for the presence of God.
          </p>
        </Reveal>
      </Section>
      <Section tone="paper">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="display-md">Program overview</h2>
            <dl className="mt-10 divide-y border-y">
              {[
                ["Length", "9 months (Sept–May)"],
                ["Format", "Hybrid — 2 days in person, 2 days online"],
                ["Focus", "Encounter with Jesus, leadership training, intercession, worship leading, evangelism, and justice work"],
                ["Instructors", "Local pastors, missionaries, and national leaders"],
                ["Cost", "$4,995 (payment plans available)"],
                ["Start date", "September 2026"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[120px_1fr] gap-6 py-5">
                  <dt className="eyebrow pt-1 text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden"><Photo src={photos.studyChairs} alt="Students studying Scripture" w={800} /></div>
            <div className="mt-16 aspect-[3/4] overflow-hidden"><Photo src={photos.micBW} alt="A student leading a prayer set" w={800} /></div>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="display-lg">What makes us different</h2>
        <ul className="mt-14 grid gap-10 md:grid-cols-2">
          {[
            ["Presence First", "Everything begins with Jesus. We’re not training people to use Him for ministry — we’re learning to love Him as the reward."],
            ["Rooted in the Local Church", "We exist to strengthen the Church, not replace it. Every student is sent back to their home church equipped to build prayer and worship at the local level."],
            ["Prayer Room Leadership", "Students don’t just study prayer — they live it. Each week, they help lead sets in the Dwelling Place Prayer Room."],
            ["Mission in the City", "Every week, we go into the streets to love people, share the gospel, and serve the poor. Presence leads to compassion."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 0.1}>
              <li className="border-t pt-6">
                <h3 className="display-md">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="display-md">Questions</h2>
            <p className="mt-6 text-ivory/60">If your heart burns for revival and you’re ready to be trained as a missionary of prayer and presence, this is your invitation.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta to={interest} variant="sky">Join the Interest List</Cta>
            </div>
            <p className="mt-6 text-sm text-ivory/50">{org.dwellingEmail}</p>
          </div>
          <Faq items={faqs} dark />
        </div>
      </Section>
    </>
  );
}
