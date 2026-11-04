import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/primitives";

const days = [
  ["Monday", "Family"],
  ["Tuesday", "Friends"],
  ["Wednesday", "Coworkers & Classmates"],
  ["Thursday", "Neighbors"],
  ["Friday", "Strangers & Enemies"],
];

export function SeekWeekDaysSection() {
  return (
    <Section tone="night">
      <p className="eyebrow text-sky">Five days. Five prayer focuses.</p>
      <h2 className="display-lg mt-5 max-w-3xl">Each day, a different sphere of relationships.</h2>
      <ol className="mt-16 grid border-t border-line-dark md:grid-cols-5">
        {days.map(([d, f], i) => (
          <Reveal key={d} delay={i * 0.08}>
            <li className="h-full border-b border-line-dark py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0">
              <p className="eyebrow text-gold">{d}</p>
              <p className="display-md mt-6">{f}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <p className="prose-body mt-12 max-w-2xl text-ivory/70">
        Each day, we will cry out for the lost in these areas of our lives, believing God for salvation and transformation —
        asking God to open hearts, draw people to Jesus, and give us opportunities to share the Gospel.
      </p>
    </Section>
  );
}

