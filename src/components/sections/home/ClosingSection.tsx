import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { photos } from "@/content/site";

export function ClosingSection() {
  return (
    <section aria-labelledby="close-h" className="relative overflow-hidden bg-night text-ivory">
      <div className="absolute inset-0">
        <Photo src={photos.beachWalk} alt="" className="opacity-50" />
      </div>
      <div className="overlay-hero absolute inset-0" />
      <div className="relative mx-auto flex min-h-[90svh] max-w-[1600px] flex-col items-center justify-center px-5 py-28 text-center md:px-10">
        <Reveal>
          <h2 id="close-h" className="display-xl mx-auto max-w-5xl uppercase">
            Let the Bay Area become <em className="normal-case text-sky">a house of prayer.</em>
          </h2>
          <p className="prose-body mx-auto mt-8 max-w-xl text-ivory/75">
            Join us as we believe for revival in the Church, renewal in our cities, and awakening to the presence of Jesus.
          </p>
          <div className="mt-10"><Cta to="/pray-with-us" variant="light">Join the Movement</Cta></div>
        </Reveal>
      </div>
    </section>
  );
}

