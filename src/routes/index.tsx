import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Cta, Faq, JsonLd, Photo, Reveal } from "@/components/site/primitives";
import { events, img, org, photos, team } from "@/content/site";
import { eventLd, faqLd, pageHead } from "@/lib/seo";

const faqs = [
  {
    q: "What is Pray The Bay?",
    a: "Pray The Bay is a unifying prayer and worship movement for and through the local Church of the San Francisco Bay Area. We are not a local church — we are local church people who long to see the Church reach her full potential through prayer.",
  },
  {
    q: "Where and when can I pray with Pray The Bay?",
    a: "We host online and in-person prayer gatherings Monday through Friday, led by prayer and worship leaders from across the Bay Area. Visit Prayer Gatherings to join online or find the prayer room.",
  },
  {
    q: "How can I support the movement?",
    a: "You can serve with us, become a community or movement partner, support our prayer missionaries, or sow toward the Pray The Bay headquarters and first 24/7 prayer room.",
  },
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Pray The Bay — Prayer & Worship Movement in the San Francisco Bay Area",
      description:
        "Join a unifying prayer and worship movement for the local Church of the Bay Area. Daily online and in-person prayer gatherings, SEEK WEEK, Renaissance '27 and Dwelling Place School.",
      path: "/",
      image: img(photos.worshipNight, 1500),
    }),
  component: Home,
});

const words = ["A Praying Church.", "A Revived City.", "An Awakened Generation."];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return (
    <section ref={ref} className="relative flex h-[100svh] min-h-[640px] overflow-hidden bg-night text-ivory">
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduce ? 0 : 9, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Photo
            src={photos.worshipNight}
            alt="A young man worships with lifted hands at a Pray The Bay night of prayer"
            eager
            w={2500}
            className="object-[60%_center]"
          />
        </motion.div>
      </motion.div>
      <div className="overlay-hero absolute inset-0" />
      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex w-full max-w-[1600px] flex-col justify-end px-5 pb-24 md:px-10 md:pb-28"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="eyebrow text-sky"
        >
          San Francisco Bay Area · Est. through the local Church
        </motion.p>
        <h1 className="display-xl mt-6 uppercase">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i === 1 ? "italic normal-case text-sky" : ""}`}
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45 + i * 0.18, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 1 ? "a revived city." : w}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.1 }}
          className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end"
        >
          <p className="prose-body max-w-xl text-ivory/80">{org.summary}</p>
          <div className="flex flex-wrap gap-3">
            <Cta to="/pray-with-us" variant="light">Join the Movement</Cta>
            <Cta to="/vision" variant="outlineLight">Discover Our Vision</Cta>
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-6 left-1/2 hidden md:flex -translate-x-1/2 flex-col items-center gap-2 text-ivory/60" aria-hidden>
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-ivory/20">
          <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-ivory" />
        </span>
      </div>
    </section>
  );
}

function Announcement() {
  return (
    <Link to="/seek-week-2026" className="block overflow-hidden border-b border-line-dark bg-night py-4 text-ivory">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="eyebrow flex items-center gap-12 text-ivory/80">
            SEEK WEEK · November 2–6, 2026 · Online + In-Person Prayer
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </Link>
  );
}

const pillars = [
  { n: "01", word: "Revival", line: "Revive the Local Church.", photo: photos.layingHands, alt: "Leaders lay hands and pray over one another" },
  { n: "02", word: "Renewal", line: "Renew Our Cities.", photo: photos.embrace, alt: "A group embraces in prayer inside a Bay Area church" },
  { n: "03", word: "Awakening", line: "Awaken People to the Presence of God.", photo: photos.sunsetPrayer, alt: "Friends kneel in prayer at sunset over the Bay" },
];

function Vision() {
  const [active, setActive] = useState(0);
  return (
    <section aria-labelledby="vision-h" className="bg-night text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <h2 id="vision-h" className="display-lg">
            Our vision, <em className="text-sky">in three movements.</em>
          </h2>
          <p className="prose-body max-w-xl text-ivory/70">
            We are believing for revival in the Church, renewal in our cities, and an awakening to the presence of God —
            with 24/7 prayer rooms leading prayer and worship every morning, noon, and night in each region across the Bay.
          </p>
        </Reveal>
      </div>
      <div className="mt-16 flex flex-col lg:h-[82vh] lg:flex-row">
        {pillars.map((p, i) => (
          <button
            type="button"
            key={p.word}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`group relative h-[60svh] overflow-hidden text-left transition-[flex] duration-[1200ms] ease-[var(--ease-cinema)] lg:h-auto ${active === i ? "lg:flex-[2.4]" : "lg:flex-1"}`}
          >
            <Photo src={p.photo} alt={p.alt} className={`img-zoom ${active === i ? "scale-105" : "scale-100 grayscale-[40%]"}`} />
            <div className="overlay-bottom absolute inset-0" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
              <span className="eyebrow text-sky">{p.n}</span>
              <div>
                <h3 className="font-display text-5xl uppercase tracking-wide md:text-7xl">{p.word}</h3>
                <p className={`mt-3 max-w-sm font-display text-2xl italic text-ivory/85 transition-opacity duration-700 ${active === i ? "lg:opacity-100" : "lg:opacity-0"}`}>
                  {p.line}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function Events() {
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

function School() {
  const p = [
    ["Behold", "The beauty of Jesus."],
    ["Become", "His dwelling."],
    ["Build", "His house of prayer."],
  ];
  return (
    <section aria-labelledby="school-h" className="relative overflow-hidden bg-ink text-ivory">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[60svh]">
          <Photo src={photos.studyChairs} alt="Dwelling Place School students reading Scripture in the prayer room" />
        </div>
        <div className="flex flex-col justify-center px-5 py-20 md:px-16">
          <Reveal>
            <p className="eyebrow text-sky">Discipleship Prayer School · San Francisco</p>
            <h2 id="school-h" className="display-lg mt-6 uppercase">Dwelling Place School</h2>
            <p className="prose-body mt-6 max-w-lg text-ivory/70">
              A place to behold Jesus, become His dwelling, and build His house of prayer — a nine-month missionary
              training program devoted to forming men and women of prayer, worship, and mission.
            </p>
          </Reveal>
          <ol className="mt-12 divide-y divide-line-dark border-y border-line-dark">
            {p.map(([w, l], i) => (
              <Reveal key={w} delay={i * 0.1}>
                <li className="flex items-baseline justify-between gap-6 py-6">
                  <span className="font-display text-4xl uppercase tracking-wide md:text-5xl">{w}</span>
                  <span className="font-display text-xl italic text-ivory/60">{l}</span>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12"><Cta to="/dwelling-place" variant="sky">Discover the School</Cta></div>
        </div>
      </div>
    </section>
  );
}

function PrayWithUs() {
  return (
    <section aria-labelledby="pray-h" className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-28 md:px-10">
        <Reveal className="text-center">
          <h2 id="pray-h" className="display-xl uppercase">Pray with us.</h2>
          <p className="prose-body mx-auto mt-6 max-w-xl text-muted-foreground">
            Come pray with us as we go from being the most prayerless to the most prayerful region.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            { t: "Online Prayer", d: "Participatory, Scripture-centered gatherings morning, noon, and night — join from anywhere in the Bay.", photo: photos.online, alt: "A woman joins Pray The Bay online prayer from her laptop", href: org.onlinePrayer, cta: "Join Online Prayer" },
            { t: "In-Person Prayer", d: "A physical space set apart to minister to Jesus and stand in intercession for the Bay Area, day after day.", photo: photos.prayerRoomDark, alt: "People praying quietly in the dim Pray The Bay prayer room", href: org.inPersonPrayer, cta: "Visit the Prayer Room" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.12}>
              <article className="group relative aspect-[4/5] overflow-hidden bg-night text-ivory md:aspect-[5/6]">
                <Photo src={c.photo} alt={c.alt} className="img-zoom opacity-80 group-hover:scale-105" />
                <div className="overlay-bottom absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <h3 className="display-md uppercase">{c.t}</h3>
                  <p className="mt-3 max-w-md text-ivory/75">{c.d}</p>
                  <div className="mt-6"><Cta to={c.href} variant="light">{c.cta}</Cta></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center"><Cta to="/pray-with-us" variant="outlineDark">Explore Prayer Gatherings</Cta></div>
      </div>
    </section>
  );
}

const gallery = [
  { p: photos.worshipLeader, a: "A worship leader prays during a night of worship" },
  { p: photos.outdoorPrayer, a: "Women pray together outdoors at a Bay Area gathering" },
  { p: photos.beachWalk, a: "Young adults walk along the coast at sunset" },
  { p: photos.micBW, a: "A young leader prays into a microphone, black and white" },
  { p: photos.womenPrayer, a: "Women embrace in prayer at an outdoor gathering" },
  { p: photos.circle, a: "A circle of believers prays together in the prayer room" },
  { p: photos.outdoorPrayer2, a: "A prayer team prays for one another outdoors" },
];

function Gallery() {
  const [i, setI] = useState(0);
  const n = gallery.length;
  return (
    <section aria-labelledby="gallery-h" className="bg-night py-28 text-ivory">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-6 px-5 md:px-10">
        <h2 id="gallery-h" className="display-lg">Experience <em className="text-sky">the movement</em></h2>
        <div className="flex items-center gap-4">
          <span className="eyebrow tabular-nums text-ivory/50">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
          <button type="button" aria-label="Previous photo" onClick={() => setI((i - 1 + n) % n)} className="border border-line-dark p-3 hover:bg-ivory hover:text-ink"><ArrowLeft className="size-4" /></button>
          <button type="button" aria-label="Next photo" onClick={() => setI((i + 1) % n)} className="border border-line-dark p-3 hover:bg-ivory hover:text-ink"><ArrowRight className="size-4" /></button>
        </div>
      </div>
      <div className="mt-12 overflow-hidden">
        <motion.ul
          className="flex gap-4 pl-5 md:gap-6 md:pl-10"
          animate={{ x: `calc(${-i} * (min(82vw, 1100px) + 1.5rem))` }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {gallery.map((g, k) => (
            <li key={g.p} className="aspect-[16/10] w-[min(82vw,1100px)] shrink-0 overflow-hidden">
              <Photo src={g.p} alt={g.a} className={`transition-all duration-1000 ${k === i ? "" : "opacity-40 grayscale"}`} />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section aria-labelledby="story-h" className="bg-ivory">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 py-28 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-muted-foreground">Our story</p>
          <h2 id="story-h" className="display-lg mt-6">
            We are not a local church. <em>We are local church people.</em>
          </h2>
          <div className="mt-10 aspect-[4/5] overflow-hidden">
            <Photo src={photos.friends} alt="Friends from Pray The Bay laughing together" />
          </div>
        </Reveal>
        <div className="space-y-8 lg:col-span-6 lg:col-start-7 lg:pt-24">
          <Reveal>
            <p className="font-display text-3xl leading-snug md:text-4xl">
              We are followers of Jesus that love and serve the local church — a family of faithful intercessors,
              pastors, prayer directors, marketplace leaders, and zealous Gen-Zers.
            </p>
          </Reveal>
          <Reveal className="prose-body space-y-6 text-muted-foreground">
            <p>
              Pray The Bay began as Experience Church’s Prayer Ministry and quickly expanded into a prayer movement for the
              entire Bay Area. The Pray The Bay Leadership Team represents five Bay Area regions, with plans for the other five.
            </p>
            <p>
              We host online and in-person prayer gatherings Monday through Friday, led by prayer and worship leaders from
              across the Bay, and provide resources and training for people to grow their own prayer life.
            </p>
            <p>
              We see a future of 24/7 prayer rooms with led prayer and worship sessions every morning, noon, and night in
              each region across the Bay.
            </p>
          </Reveal>
          <Reveal>
            <blockquote className="border-l-2 border-sky pl-6 font-display text-3xl italic">
              We believe a united, praying Church is unstoppable.
            </blockquote>
          </Reveal>
          <Cta to="/about" variant="outlineDark">Read Our Story</Cta>
        </div>
      </div>
    </section>
  );
}

function People() {
  return (
    <section aria-labelledby="people-h" className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-28 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b pb-8">
          <h2 id="people-h" className="display-lg">Our people</h2>
          <Cta to="/team" variant="outlineDark">Meet the Team</Cta>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={(i % 6) * 0.06}>
              <li>
                <Link to="/team" className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <Photo src={t.photo} alt={`Portrait of ${t.name}`} w={750} className="img-zoom grayscale group-hover:scale-105 group-hover:grayscale-0" />
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-tight">{t.name}</h3>
                  <p className="eyebrow mt-2 text-[0.6rem] text-muted-foreground">{t.role}</p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ResourcesBand() {
  const items = [
    ["Resource Library", "Prayer guides, fasting guides, prayer room formats and devotionals — free to download.", "/resources"],
    ["Podcast", "Listen and watch on YouTube, Spotify and Apple Podcasts. Grow in your prayer life.", "/podcast"],
    ["Plant Prayer", "Start a prayer group in your home, workplace, school or church.", "/plant-prayer"],
    ["Prayer Map", "Find a prayer group near you anywhere across the Bay.", "/prayer-map"],
  ] as const;
  return (
    <section aria-labelledby="res-h" className="bg-sky">
      <div className="mx-auto max-w-[1600px] px-5 py-28 md:px-10">
        <Reveal><h2 id="res-h" className="display-lg max-w-3xl">Build a life of prayer.</h2></Reveal>
        <ul className="mt-14 grid border-t border-ink/20 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([t, d, to], i) => (
            <li key={t} className="border-b border-ink/20 md:border-r lg:last:border-r-0">
              <Link to={to} className="group flex h-full flex-col justify-between gap-12 p-6 transition-colors duration-500 hover:bg-ink hover:text-ivory md:p-8">
                <span className="eyebrow">0{i + 1}</span>
                <div>
                  <h3 className="display-md">{t}</h3>
                  <p className="mt-3 text-sm opacity-75">{d}</p>
                  <ArrowRight className="mt-6 size-5 transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServePartner() {
  const ways = [
    ["Serve With Us", "Lead online, serve on prayer teams, help with logistics, intercede for the Church.", "/serve-with-us"],
    ["Community Partner", "Pray and fast with us — daily online prayer and Fast Wednesdays.", "/community-partners"],
    ["Movement Partner", "Lead daily prayer with us and give to build a dwelling place for God.", "/movement-partners"],
    ["Missionaries", "Support prayer and worship missionaries serving regional prayer rooms.", "/missionaries"],
    ["Sow for Awakening", "Help establish the Pray The Bay headquarters and first 24/7 prayer room.", "/give"],
  ] as const;
  return (
    <section aria-labelledby="serve-h" className="bg-ivory">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 py-28 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Take your place</p>
            <h2 id="serve-h" className="display-lg mt-6">Carry the vision with us.</h2>
            <div className="mt-10 aspect-square overflow-hidden">
              <Photo src={photos.brightRoom} alt="Students pray in a sunlit room at Dwelling Place" />
            </div>
          </Reveal>
        </div>
        <ul className="divide-y border-y lg:col-span-6 lg:col-start-7 lg:self-end">
          {ways.map(([t, d, to]) => (
            <li key={t}>
              <Link to={to} className="group grid gap-2 py-8 md:grid-cols-[1fr_1.3fr_auto] md:items-center md:gap-8">
                <h3 className="display-md transition-colors group-hover:text-stone">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
                <ArrowRight className="hidden size-5 transition-transform duration-500 group-hover:translate-x-2 md:block" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section aria-labelledby="close-h" className="relative overflow-hidden bg-night text-ivory">
      <div className="absolute inset-0">
        <Photo src={photos.beachWalk} alt="" className="opacity-50" />
      </div>
      <div className="overlay-hero absolute inset-0" />
      <div className="relative mx-auto flex min-h-[90svh] max-w-[1600px] flex-col items-center justify-center px-5 py-28 text-center md:px-10">
        <Reveal>
          <h2 id="close-h" className="display-xl mx-auto max-w-5xl uppercase">
            Let the Bay Area become <em className="normal-case text-sky">a house of prayer.</em>
          </h2>
          <p className="prose-body mx-auto mt-8 max-w-xl text-ivory/75">
            Join us as we believe for revival in the Church, renewal in our cities, and awakening to the presence of Jesus.
          </p>
          <div className="mt-10"><Cta to="/pray-with-us" variant="light">Join the Movement</Cta></div>
        </Reveal>
      </div>
    </section>
  );
}

function HomeFaq() {
  return (
    <section aria-labelledby="faq-h" className="bg-paper">
      <JsonLd data={faqLd(faqs)} />
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-[1fr_2fr]">
        <h2 id="faq-h" className="display-md">Questions, answered.</h2>
        <Faq items={faqs} />
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Announcement />
      <Vision />
      <Events />
      <School />
      <PrayWithUs />
      <Gallery />
      <Story />
      <People />
      <ResourcesBand />
      <ServePartner />
      <HomeFaq />
      <Closing />
    </>
  );
}
