import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { org, photos } from "@/content/site";

export function PrayWithUsSection() {
  return (
    <section aria-labelledby="pray-h" className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-28 md:px-10">
        <Reveal className="text-center">
          <h2 id="pray-h" className="display-xl uppercase">Pray with us.</h2>
          <p className="prose-body mx-auto mt-6 max-w-xl text-muted-foreground">
            Come pray with us as we go from being the most prayerless to the most prayerful region.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            { t: "Online Prayer", d: "Participatory, Scripture-centered gatherings morning, noon, and night — join from anywhere in the Bay.", photo: photos.online, alt: "A woman joins Pray The Bay online prayer from her laptop", href: org.onlinePrayer, cta: "Join Online Prayer" },
            { t: "In-Person Prayer", d: "A physical space set apart to minister to Jesus and stand in intercession for the Bay Area, day after day.", photo: photos.prayerRoomDark, alt: "People praying quietly in the dim Pray The Bay prayer room", href: org.inPersonPrayer, cta: "Visit the Prayer Room" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.12}>
              <article className="group relative aspect-[4/5] overflow-hidden bg-night text-ivory md:aspect-[5/6]">
                <Photo src={c.photo} alt={c.alt} className="img-zoom opacity-80 group-hover:scale-105" />
                <div className="overlay-bottom absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <h3 className="display-md uppercase">{c.t}</h3>
                  <p className="mt-3 max-w-md text-ivory/75">{c.d}</p>
                  <div className="mt-6"><Cta to={c.href} variant="light">{c.cta}</Cta></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center"><Cta to="/pray-with-us" variant="outlineDark">Explore Prayer Gatherings</Cta></div>
      </div>
    </section>
  );
}

