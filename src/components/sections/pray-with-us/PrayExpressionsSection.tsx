import { Section } from "@/components/site/Section";
import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { org, photos } from "@/content/site";

const expressions = [
  {
    n: "01", t: "Online Prayer", s: "Praying together across the Bay", photo: photos.online, alt: "A woman praying online from her laptop",
    d: "Throughout the week, people from across the Bay Area gather online to minister to the Lord, pray from Scripture, and contend for revival in our cities. These gatherings are participatory, Scripture-centered, and simple — designed to help us remain faithful in prayer morning, noon, and night.",
    q: "Online prayer allows us to stay aligned and watchful, even when we cannot be physically present.",
    steps: ["Open the online prayer page", "Pick a morning, noon or night session", "Join the call and pray from Scripture with us"],
    href: org.onlinePrayer, cta: "Join Online Prayer", tone: "paper" as const,
  },
  {
    n: "02", t: "In-Person Prayer", s: "Ministering to the Lord together", photo: photos.circle, alt: "A circle of people praying together in the prayer room",
    d: "Our prayer room is a physical space set apart to minister to Jesus, stand in intercession for the Bay Area, and be formed through sustained, embodied prayer. Here, we gather to behold Him, pray from Scripture, and offer our full presence — our voices, our bodies, and our time — before the Lord.",
    q: "As we return day after day, this rhythm forms us into a people shaped by intimacy and authority in prayer.",
    steps: ["Check the in-person schedule", "Come to the prayer room", "Join a led set or pray at your own pace"],
    href: org.inPersonPrayer, cta: "In-Person Prayer", tone: "night" as const,
  },
];

export function PrayExpressionsSection() {
  return (
    <>
      {expressions.map((x, i) => (
        <Section key={x.t} tone={x.tone}>
          <div className={`grid items-center gap-14 lg:grid-cols-2 ${i ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal className="aspect-[4/5] overflow-hidden">
              <Photo src={x.photo} alt={x.alt} />
            </Reveal>
            <Reveal>
              <p className={`eyebrow ${i ? "text-sky" : "text-muted-foreground"}`}>{x.n} — {x.s}</p>
              <h2 className="display-lg mt-5 uppercase">{x.t}</h2>
              <p className={`prose-body mt-6 ${i ? "text-ivory/70" : "text-muted-foreground"}`}>{x.d}</p>
              <p className="mt-6 font-display text-2xl italic">{x.q}</p>
              <h3 className="eyebrow mt-10">How to join</h3>
              <ol className="mt-4 space-y-3">
                {x.steps.map((s, k) => (
                  <li key={s} className="flex gap-4"><span className="font-display text-xl text-stone">{k + 1}.</span>{s}</li>
                ))}
              </ol>
              <div className="mt-10"><Cta to={x.href} variant={i ? "light" : "dark"}>{x.cta}</Cta></div>
            </Reveal>
          </div>
        </Section>
      ))}
    </>
  );
}

