import { Photo, Reveal } from "@/components/site/primitives";
import { photos } from "@/content/site";

const lines = [
  ["Revive", "the Local Church", photos.layingHands, "Leaders praying over one another"],
  ["Renew", "Our Cities", photos.outdoorPrayer, "Believers praying outdoors in a Bay Area city"],
  ["Awaken", "People to the Presence of God", photos.sunsetPrayer, "Friends praying at sunset"],
] as const;

export function VisionPillarsSection() {
  return (
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
  );
}

