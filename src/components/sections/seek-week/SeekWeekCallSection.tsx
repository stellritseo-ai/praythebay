import { Section } from "@/components/site/Section";
import { Cta, Reveal } from "@/components/site/primitives";
import { events, org } from "@/content/site";

const e = events.seekWeek;

export function SeekWeekCallSection() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="prose-body text-muted-foreground">
          There are people in our families, friendships, workplaces, classrooms, neighborhoods — and even those we consider
          strangers or enemies — who need to encounter the love and saving power of Jesus.
        </p>
        <p className="display-md mt-10">
          We pray until our hearts are moved with compassion. We pray until the Church is awakened.{" "}
          <em>We pray until the lost encounter Jesus.</em>
        </p>
        <div className="mt-14 border-t pt-10">
          <p className="eyebrow text-gold">Join us · {e.dates}</p>
          <p className="mt-4 text-muted-foreground">Gather your church. Gather your prayer team. Invite your community. Take your place in the prayer room.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta to={`mailto:${org.email}?subject=${encodeURIComponent("SEEK WEEK 2026 — our church wants to take part")}`}>Get Your Church Involved</Cta>
            <Cta to="/pray-with-us" variant="outlineDark">Find a Prayer Gathering</Cta>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

