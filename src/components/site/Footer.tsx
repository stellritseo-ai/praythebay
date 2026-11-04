import { Link } from "@tanstack/react-router";
import { nav, org } from "@/content/site";
import { Wordmark } from "./Wordmark";
import { Newsletter } from "./Newsletter";

export { Newsletter };

export function Footer() {
  return (
    <footer className="bg-night text-ivory">
      <Newsletter />
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 py-20 md:px-10 lg:grid-cols-[1.3fr_3fr]">
        <div className="space-y-6">
          <Wordmark className="text-4xl" />
          <p className="max-w-sm text-sm leading-relaxed text-ivory/60">{org.summary}</p>
          <ul className="space-y-2 text-sm">
            <li><a className="link-underline" href={`mailto:${org.email}`}>{org.email}</a></li>
            <li className="text-ivory/50">EIN {org.ein}</li>
          </ul>
          <ul className="flex gap-6 eyebrow text-ivory/70">
            <li><a href={org.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-sky">Instagram</a></li>
            <li><a href={org.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-sky">Spotify</a></li>
            <li><a href={org.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-sky">YouTube</a></li>
          </ul>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {nav.map((g) => (
            <div key={g.label}>
              <p className="eyebrow mb-5 text-sky">{g.label}</p>
              <ul className="space-y-3 text-sm text-ivory/70">
                {g.items.map((it) => (
                  <li key={it.to}>
                    <Link to={it.to} className="link-underline hover:text-ivory">{it.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-5 py-8 text-xs text-ivory/40 md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Pray The Bay. A movement for and through the local Church.</p>
          <a href={org.give} target="_blank" rel="noopener noreferrer" className="eyebrow text-gold hover:text-ivory">
            Sow for Awakening
          </a>
        </div>
      </div>
    </footer>
  );
}
