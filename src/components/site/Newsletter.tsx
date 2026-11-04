import { useState, type FormEvent } from "react";
import { org } from "@/content/site";

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

