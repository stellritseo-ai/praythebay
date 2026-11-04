import { ImageHero } from "@/components/site/ImageHero";
import { Cta } from "@/components/site/primitives";
import { org, photos } from "@/content/site";

export function GiveHeroSection() {
  return (
    <ImageHero
      photo={photos.sunsetPrayer}
      alt="Friends kneel together in prayer as the sun sets over the Bay"
      eyebrow="Sow for awakening"
      title={<>From the most prayerless region <em className="text-sky">to the most prayerful.</em></>}
      intro="We envision a unified church with 24/7 prayer across all 10 regions of the Bay, fueled by worship and led prayer day and night — and we are committed to training and sending missionaries to steward these prayer spaces and serve local churches with love."
      trail={[{ name: "Home", path: "/" }, { name: "Partner", path: "/movement-partners" }, { name: "Sow for Awakening", path: "/give" }]}
    >
      <Cta to={org.give} variant="gold">Sow for Awakening Today</Cta>
    </ImageHero>
  );
}

