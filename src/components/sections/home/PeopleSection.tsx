import { Link } from "@tanstack/react-router";
import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { team } from "@/content/site";

export function PeopleSection() {
  return (
    <section aria-labelledby="people-h" className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-28 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b pb-8">
          <h2 id="people-h" className="display-lg">Our people</h2>
          <Cta to="/team" variant="outlineDark">Meet the Team</Cta>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={(i % 6) * 0.06}>
              <li>
                <Link to="/team" className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <Photo src={t.photo} alt={`Portrait of ${t.name}`} w={750} className="img-zoom grayscale group-hover:scale-105 group-hover:grayscale-0" />
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-tight">{t.name}</h3>
                  <p className="eyebrow mt-2 text-[0.6rem] text-muted-foreground">{t.role}</p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

