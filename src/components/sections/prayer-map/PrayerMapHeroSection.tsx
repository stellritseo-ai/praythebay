import { TypeHero } from "@/components/site/TypeHero";

export function PrayerMapHeroSection() {
  return (
    <TypeHero
      eyebrow="Prayer map"
      title={<>Bay Area <em>prayer groups.</em></>}
      intro="Click on the pins to view more info. Toggle the sidebar to browse by category."
      trail={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: "Prayer Map", path: "/prayer-map" }]}
    />
  );
}

