import { Breadcrumbs, Cta, JsonLd } from "@/components/site/primitives";
import { org } from "@/content/site";
import { breadcrumbLd } from "@/lib/seo";

const trail = [{ name: "Home", path: "/" }, { name: "Get Involved", path: "/serve-with-us" }, { name: "The Shining One", path: "/the-shining-one" }];

export function ShiningOneHeroSection() {
  const line = "Our mustard seed of faith for awakening has arrived — February 2nd — ";
  return (
    <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden bg-night text-ivory">
      <JsonLd data={breadcrumbLd(trail)} />
      <div className="mx-auto w-full max-w-[1600px] px-5 pt-32 md:px-10">
        <Breadcrumbs trail={trail} light />
      </div>
      <div className="mt-12 overflow-hidden border-y border-line-dark py-6" aria-hidden>
        <div className="marquee flex w-max whitespace-nowrap font-display text-3xl uppercase italic text-gold md:text-5xl">
          {line.repeat(6)}
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1600px] px-5 py-16 text-center md:px-10">
        <h1 className="display-xl uppercase">The Shining One</h1>
        <p className="mt-6 font-display text-2xl italic text-ivory/70 md:text-3xl">Praying with the Prayer Leader of Heaven</p>
        <p className="eyebrow mt-8 text-sky">Our mustard seed of faith for awakening has arrived</p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Cta to={org.shiningOneBook} variant="gold">Get the Book</Cta>
          <Cta to={org.shiningOneGathering} variant="outlineLight">Gathering Interest Form</Cta>
        </div>
      </div>
    </section>
  );
}

