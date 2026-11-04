import { TypeHero } from "@/components/site/TypeHero";

export function MissionariesHeroSection() {
  return (
    <TypeHero
      eyebrow="Isaiah 6:8"
      title={<>“Here I am. <em>Send me.</em>”</>}
      intro="“Whom shall I send, and who will go for us?” Our prayer and worship missionaries serve regional prayer rooms and local churches across the Bay."
      trail={[{ name: "Home", path: "/" }, { name: "Partner", path: "/movement-partners" }, { name: "Missionaries", path: "/missionaries" }]}
    />
  );
}

