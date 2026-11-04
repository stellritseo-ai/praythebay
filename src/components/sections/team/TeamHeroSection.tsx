import { TypeHero } from "@/components/site/TypeHero";

export function TeamHeroSection() {
  return (
    <TypeHero
      eyebrow="Our team"
      title={<>Local church people, <em>across the Bay.</em></>}
      intro="Our leadership team represents five Bay Area regions — pastors and leaders who carry a shared cry for revival through the local Church."
      trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Team", path: "/team" }]}
    />
  );
}

