import { ImageHero } from "@/components/site/ImageHero";
import { photos } from "@/content/site";

export function CommunityHeroSection() {
  return (
    <ImageHero
      photo={photos.womenPrayer}
      alt="Women embrace in prayer at an outdoor Bay Area gathering"
      eyebrow="Community partner"
      title={<>Pray + fast with us for <em className="text-sky">revival, renewal, and awakening.</em></>}
      trail={[{ name: "Home", path: "/" }, { name: "Partner", path: "/movement-partners" }, { name: "Community Partners", path: "/community-partners" }]}
    />
  );
}

