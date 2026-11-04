import { ImageHero } from "@/components/site/ImageHero";
import { Cta } from "@/components/site/primitives";
import { org, photos } from "@/content/site";

export function ServeHeroSection() {
  return (
    <ImageHero
      photo={photos.outdoorPrayer2}
      alt="A prayer team prays for a young man at an outdoor gathering"
      eyebrow="Serve with us"
      title={<>We believe He’s calling <em className="text-sky">you</em> to join us.</>}
      intro="For the past five years, together with churches across the Bay, we’ve been carrying prayer non-stop and we hope to continue until Jesus returns."
      trail={[{ name: "Home", path: "/" }, { name: "Get Involved", path: "/serve-with-us" }, { name: "Serve With Us", path: "/serve-with-us" }]}
    >
      <Cta to={org.serveForm} variant="light">Serve With Us Form</Cta>
    </ImageHero>
  );
}

