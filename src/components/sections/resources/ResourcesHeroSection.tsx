import { TypeHero } from "@/components/site/TypeHero";

export function ResourcesHeroSection() {
  return (
    <TypeHero
      eyebrow="Resource library"
      title={<>Guides and teachings to build <em>a life of prayer.</em></>}
      intro="Every resource is free. Open a guide to read online or download the PDF."
      trail={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]}
    />
  );
}

