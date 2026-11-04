import { Cta, Photo } from "@/components/site/primitives";
import { org, photos } from "@/content/site";

export function GiveMissionariesSection() {
  return (
    <section className="grid bg-night text-ivory lg:grid-cols-2">
      <div className="min-h-[50svh]"><Photo src={photos.micBW} alt="A prayer missionary leading prayer" /></div>
      <div className="flex flex-col justify-center px-5 py-20 md:px-16">
        <p className="eyebrow text-sky">Missionaries</p>
        <h2 className="display-lg mt-6">Standing on the wall for our cities.</h2>
        <p className="prose-body mt-6 text-ivory/70">
          Prayer & worship missionaries are essential to the life of the Church. We believe God is calling us to deploy hundreds of
          missionaries to serve in 24/7 prayer rooms across the Bay Area, supported through partnership, matching funds and housing.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Cta to={org.give} variant="light">Sow for Missionaries</Cta>
          <Cta to="/missionaries" variant="outlineLight">Meet Our Missionaries</Cta>
        </div>
      </div>
    </section>
  );
}

