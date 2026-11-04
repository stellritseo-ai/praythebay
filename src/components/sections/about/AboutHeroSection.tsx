import { ImageHero } from "@/components/site/ImageHero";
import { photos } from "@/content/site";

export function AboutHeroSection() {
  return (
    <ImageHero
      photo={photos.embrace}
      alt="Believers embrace in prayer inside a Bay Area church"
      eyebrow="Who we are"
      title={<>Followers of Jesus who love <em className="text-sky">the local Church.</em></>}
      trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
    />
  );
}

