import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { events, org, photos } from "@/content/site";

const e = events.renaissance;

export function RenaissanceHistorySection() {
  return (
    <section className="grid bg-ivory lg:grid-cols-2">
      <div className="min-h-[50svh]"><Photo src={photos.hall} alt="Churches gathered in prayer at a previous Renaissance" /></div>
      <div className="flex flex-col justify-center px-5 py-20 md:px-16">
        <Reveal>
          <h2 className="display-lg">Six years of seeking His face.</h2>
          <p className="prose-body mt-6 text-muted-foreground">
            For six years, Renaissance has brought together pastors, leaders, and everyday believers from across the Bay Area and
            beyond with one shared cry — that God would move powerfully in our region. This year, we believe He's inviting us deeper.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t pt-6 text-sm">
            <div><dt className="eyebrow text-muted-foreground">Dates</dt><dd className="mt-2">{e.dates}</dd></div>
            <div><dt className="eyebrow text-muted-foreground">Venue</dt><dd className="mt-2">{e.location}</dd></div>
            <div className="col-span-2"><dt className="eyebrow text-muted-foreground">Speakers</dt><dd className="mt-2">Guest speakers will be announced soon.</dd></div>
          </dl>
          <p className="mt-10 font-display text-2xl italic">Bring your church, your team, your friends — and come expectant.</p>
          <div className="mt-8"><Cta to={org.renaissanceTickets}>Register Today</Cta></div>
        </Reveal>
      </div>
    </section>
  );
}

