import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/PageHero";
import { Breadcrumbs, Cta, JsonLd } from "@/components/site/primitives";
import { org } from "@/content/site";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/the-shining-one")({
  head: () =>
    pageHead({
      title: "The Shining One — Praying with the Prayer Leader of Heaven | Pray The Bay",
      description: "The Shining One: our mustard seed of faith for awakening. Find the book, upcoming gatherings, FAQ and the gathering interest form.",
      path: "/the-shining-one",
    }),
  component: Shining,
});

const trail = [{ name: "Home", path: "/" }, { name: "Get Involved", path: "/serve-with-us" }, { name: "The Shining One", path: "/the-shining-one" }];

function Shining() {
  const line = "Our mustard seed of faith for awakening has arrived — February 2nd — ";
  return (
    <>
      <JsonLd data={breadcrumbLd(trail)} />
      <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden bg-night text-ivory">
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
      <Section>
        <ul className="grid gap-px bg-border md:grid-cols-3">
          {[
            ["The book", "Available through Seedbed.", org.shiningOneBook, "Order"],
            ["Gatherings", "Register your interest in an upcoming Shining One gathering.", org.shiningOneGathering, "Interest form"],
            ["FAQ", "Answers to common questions about The Shining One.", org.shiningOneFaq, "Read FAQ"],
          ].map(([t, d, u, c]) => (
            <li key={t} className="bg-ivory p-8 md:p-10">
              <h2 className="display-md">{t}</h2>
              <p className="mt-3 text-muted-foreground">{d}</p>
              <a href={u} target="_blank" rel="noopener noreferrer" className="eyebrow link-underline mt-8 inline-block">{c} ↗</a>
            </li>
          ))}
        </ul>
        <div className="mt-16 border-t pt-10">
          <h2 className="eyebrow text-muted-foreground">Upcoming gatherings</h2>
          <p className="mt-4 font-display text-2xl">Gathering dates will be shared soon. Follow along on{" "}
            <a className="link-underline italic" href={org.shiningOneInstagram} target="_blank" rel="noopener noreferrer">Instagram</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
