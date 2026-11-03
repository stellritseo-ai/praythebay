import { createFileRoute } from "@tanstack/react-router";
import { ImageHero, Section } from "@/components/site/PageHero";
import { Cta, Reveal } from "@/components/site/primitives";
import { img, org, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/community-partners")({
  head: () =>
    pageHead({
      title: "Community Partners — Pray & Fast for Revival in the Bay | Pray The Bay",
      description: "Become a Pray The Bay community partner: join daily online prayer, fast with us on Wednesdays, and plant prayer in your home, workplace, school and church.",
      path: "/community-partners",
      image: img(photos.womenPrayer),
    }),
  component: Community,
});

function Community() {
  return (
    <>
      <ImageHero
        photo={photos.womenPrayer}
        alt="Women embrace in prayer at an outdoor Bay Area gathering"
        eyebrow="Community partner"
        title={<>Pray + fast with us for <em className="text-sky">revival, renewal, and awakening.</em></>}
        trail={[{ name: "Home", path: "/" }, { name: "Partner", path: "/movement-partners" }, { name: "Community Partners", path: "/community-partners" }]}
      />
      <Section>
        <ul className="grid gap-16 md:grid-cols-3">
          {[
            ["Daily Online Prayer", "Pray with believers across the Bay every weekday.", org.onlinePrayer, "View Prayer Times"],
            ["Fast Wednesdays", "Set aside Wednesdays to fast and be in His presence with us.", org.instagram, "Join Us"],
            ["Plant Prayer", "Home, workplace, school, church, streets.", "/prayer-map", "View All Groups"],
          ].map(([t, d, u, c], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <li className="border-t border-ink pt-8">
                <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                <h2 className="display-md mt-4 italic">{t}</h2>
                <p className="mt-3 text-muted-foreground">{d}</p>
                <div className="mt-8"><Cta to={u} variant="outlineDark">{c}</Cta></div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
