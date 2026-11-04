import { TypeHero } from "@/components/site/TypeHero";

export function PlantPrayerHeroSection() {
  return (
    <TypeHero
      eyebrow="Plant prayer"
      title={<>Plant prayer <em>where you are.</em></>}
      intro="Home, workplace, school, church, streets — every sphere of life can become a place of prayer."
      trail={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: "Plant Prayer", path: "/plant-prayer" }]}
    />
  );
}

