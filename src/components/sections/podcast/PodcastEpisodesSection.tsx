import { Section } from "@/components/site/Section";
import { org } from "@/content/site";

export function PodcastEpisodesSection() {
  return (
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
  );
}

