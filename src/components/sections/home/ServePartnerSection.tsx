import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Photo, Reveal } from "@/components/site/primitives";
import { photos } from "@/content/site";

export function ServePartnerSection() {
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

