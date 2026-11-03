import { createFileRoute } from "@tanstack/react-router";
import { ImageHero, Section } from "@/components/site/PageHero";
import { Cta } from "@/components/site/primitives";
import { img, org, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/podcast")({
  head: () =>
    pageHead({
      title: "Pray The Bay Podcast — Grow in Your Prayer Life",
      description: "Listen and watch the Pray The Bay Podcast on Spotify, Apple Podcasts and YouTube. Conversations to help you grow in prayer.",
      path: "/podcast",
      image: img(photos.podcast),
    }),
  component: Podcast,
});

function Podcast() {
  return (
    <>
      <ImageHero
        photo={photos.podcast}
        alt="Two hosts record an episode of the Pray The Bay Podcast"
        eyebrow="Pray The Bay Podcast"
        title={<>Listen & watch. <em className="text-sky">Grow in your prayer life.</em></>}
        trail={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: "Podcast", path: "/podcast" }]}
      />
      <Section tone="night">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="display-lg">Play the latest episodes</h2>
            <p className="mt-6 text-ivory/60">Stream right here, or follow on your favourite platform.</p>
            <ul className="mt-10 divide-y divide-line-dark border-y border-line-dark">
              {[["Spotify", org.spotify], ["Apple Podcasts", org.apple], ["YouTube", org.youtube]].map(([n, u]) => (
                <li key={n}>
                  <a href={u} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-6 font-display text-3xl hover:text-sky">
                    {n} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <iframe
            title="Pray The Bay Podcast on Spotify"
            src="https://open.spotify.com/embed/show/1FO9cKAT5g51iQ1JPtyetL?theme=0"
            className="h-[480px] w-full"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </Section>
      <Section>
        <div className="flex flex-wrap items-center justify-between gap-8">
          <h2 className="display-md max-w-xl">Put it into practice with our free prayer guides.</h2>
          <Cta to="/resources">Resource Library</Cta>
        </div>
      </Section>
    </>
  );
}
