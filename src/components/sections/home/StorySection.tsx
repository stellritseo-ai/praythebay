import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { photos } from "@/content/site";

export function StorySection() {
  return (
    <section aria-labelledby="story-h" className="bg-ivory">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 py-28 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-muted-foreground">Our story</p>
          <h2 id="story-h" className="display-lg mt-6">
            We are not a local church. <em>We are local church people.</em>
          </h2>
          <div className="mt-10 aspect-[4/5] overflow-hidden">
            <Photo src={photos.friends} alt="Friends from Pray The Bay laughing together" />
          </div>
        </Reveal>
        <div className="space-y-8 lg:col-span-6 lg:col-start-7 lg:pt-24">
          <Reveal>
            <p className="font-display text-3xl leading-snug md:text-4xl">
              We are followers of Jesus that love and serve the local church — a family of faithful intercessors,
              pastors, prayer directors, marketplace leaders, and zealous Gen-Zers.
            </p>
          </Reveal>
          <Reveal className="prose-body space-y-6 text-muted-foreground">
            <p>
              Pray The Bay began as Experience Church’s Prayer Ministry and quickly expanded into a prayer movement for the
              entire Bay Area. The Pray The Bay Leadership Team represents five Bay Area regions, with plans for the other five.
            </p>
            <p>
              We host online and in-person prayer gatherings Monday through Friday, led by prayer and worship leaders from
              across the Bay, and provide resources and training for people to grow their own prayer life.
            </p>
            <p>
              We see a future of 24/7 prayer rooms with led prayer and worship sessions every morning, noon, and night in
              each region across the Bay.
            </p>
          </Reveal>
          <Reveal>
            <blockquote className="border-l-2 border-sky pl-6 font-display text-3xl italic">
              We believe a united, praying Church is unstoppable.
            </blockquote>
          </Reveal>
          <Cta to="/about" variant="outlineDark">Read Our Story</Cta>
        </div>
      </div>
    </section>
  );
}

