import { ImageHero } from "@/components/site/ImageHero";
import { photos } from "@/content/site";

export function PodcastHeroSection() {
  return (
    <ImageHero
      photo={photos.podcast}
      alt="Two hosts record an episode of the Pray The Bay Podcast"
      eyebrow="Pray The Bay Podcast"
      title={<>Listen & watch. <em className="text-sky">Grow in your prayer life.</em></>}
      trail={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: "Podcast", path: "/podcast" }]}
    />
  );
}

