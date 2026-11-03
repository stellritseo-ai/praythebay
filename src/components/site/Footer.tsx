import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { nav, org } from "@/content/site";
import { Wordmark } from "./Header";

export function Newsletter() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Please add me to the Pray The Bay newsletter.\n\nFirst name: ${f.get("first")}\nLast name: ${f.get("last")}\nEmail: ${f.get("email")}`;
    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent("Newsletter sign-up")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  const field =
    "w-full border-0 border-b border-line-dark bg-transparent py-3 text-ivory placeholder:text-ivory/40 focus:border-sky focus:outline-none";
  return (
    <section aria-labelledby="newsletter-h" className="border-b border-line-dark">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-sky">Stay in the rhythm</p>
          <h2 id="newsletter-h" className="display-lg mt-5">
            News from the prayer room, <em className="text-sky">to your inbox.</em>
          </h2>
        </div>
        <form onSubmit={submit} className="grid gap-6 self-end sm:grid-cols-2">
          <label className="sr-only" htmlFor="nl-first">First name</label>
          <input id="nl-first" name="first" required placeholder="First name" className={field} />
          <label className="sr-only" htmlFor="nl-last">Last name</label>
          <input id="nl-last" name="last" required placeholder="Last name" className={field} />
          <label className="sr-only" htmlFor="nl-email">Email address</label>
          <input id="nl-email" name="email" type="email" required placeholder="Email address" className={`${field} sm:col-span-2`} />
          <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
            <button type="submit" className="eyebrow bg-ivory px-7 py-4 text-ink transition-colors hover:bg-sky">
              Subscribe
            </button>
            <p className="text-sm text-ivory/50" aria-live="polite">
              {sent ? "Your email app should open to send the request." : "Opens your email app to confirm."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

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
