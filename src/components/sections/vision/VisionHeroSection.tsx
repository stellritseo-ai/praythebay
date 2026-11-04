import { TypeHero } from "@/components/site/TypeHero";

export function VisionHeroSection() {
  return (
    <TypeHero
      eyebrow="Our vision"
      title={<>Revival. Renewal. <em>Awakening.</em></>}
      intro="Pray the Bay is a unifying prayer & worship movement for and through the local Church of the San Francisco Bay Area. We are believing for revival in the Church, renewal in our cities, and an awakening to the presence of God."
      trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Vision", path: "/vision" }]}
    />
  );
}

