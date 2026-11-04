import { Section } from "@/components/site/Section";
import { Cta, Photo, Reveal } from "@/components/site/primitives";
import { org, photos } from "@/content/site";

export function AboutStorySection() {
  return (
    <Section tone="night">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal className="aspect-[4/5] overflow-hidden">
          <Photo src={photos.layingHands} alt="Pastors from across the Bay pray over each other" />
        </Reveal>
        <Reveal>
          <p className="eyebrow text-sky">Our story</p>
          <h2 className="display-lg mt-6">From one church’s prayer ministry to a Bay-wide movement.</h2>
          <p className="prose-body mt-8 text-ivory/70">
            Pray The Bay began as{" "}
            <a href={org.experienceChurch} target="_blank" rel="noopener noreferrer" className="link-underline text-ivory">Experience Church</a>’s
            Prayer Ministry and quickly expanded into a prayer movement for the entire Bay Area. The Pray The Bay Leadership Team
            represents five Bay Area regions, currently with plans for the other five regions.
          </p>
          <dl className="mt-12 grid gap-10 border-t border-line-dark pt-10 sm:grid-cols-2">
            <div>
              <dt className="eyebrow text-sky">We host</dt>
              <dd className="mt-3 text-ivory/75">Online and in-person prayer gatherings Monday through Friday, hosted by prayer and worship leaders from across the Bay.</dd>
            </div>
            <div>
              <dt className="eyebrow text-sky">We provide</dt>
              <dd className="mt-3 text-ivory/75">Resources for people to grow their own prayer life, plus opportunities and training for prayer and worship leaders.</dd>
            </div>
          </dl>
          <div className="mt-12 flex flex-wrap gap-3">
            <Cta to="/vision" variant="light">Our Vision</Cta>
            <Cta to="/team" variant="outlineLight">Meet Our Team</Cta>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

