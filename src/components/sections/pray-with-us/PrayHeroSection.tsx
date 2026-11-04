import { ImageHero } from "@/components/site/ImageHero";
import { Cta } from "@/components/site/primitives";
import { org, photos } from "@/content/site";

export function PrayHeroSection() {
  return (
    <ImageHero
      photo={photos.prayerRoomDark}
      alt="People praying in the dim light of the Pray The Bay prayer room"
      eyebrow="Prayer gatherings"
      title={<>Prayer is how we stay before the Lord <em className="text-sky">together.</em></>}
      intro="Pray the Bay exists to minister to Jesus, to stand in the gap for our region, and to be formed as a people who know how to pray with both intimacy and authority."
      trail={[{ name: "Home", path: "/" }, { name: "Prayer Gatherings", path: "/pray-with-us" }]}
    >
      <Cta to={org.onlinePrayer} variant="light">Join Online Prayer</Cta>
      <Cta to={org.inPersonPrayer} variant="outlineLight">In-Person Prayer</Cta>
    </ImageHero>
  );
}

