import { ImageHero } from "@/components/site/ImageHero";
import { Cta } from "@/components/site/primitives";
import { org, photos } from "@/content/site";

export const dwellingInterestHref = `mailto:${org.dwellingEmail}?subject=${encodeURIComponent("Interest list — Dwelling Place School")}&body=${encodeURIComponent("Name:\nCity:\nChurch:\nI'm interested as: Student / Pastor or Church Partner / Supporter or Prayer Partner\n")}`;

export function DwellingHeroSection() {
  return (
    <ImageHero
      photo={photos.brightRoom}
      alt="Students pray and read in the sunlit Dwelling Place prayer room"
      eyebrow="Dwelling Place — Discipleship Prayer School"
      title={<><em>Behold</em> the beauty of Jesus. <em className="text-sky">Become</em> His dwelling. Build His house of prayer.</>}
      trail={[{ name: "Home", path: "/" }, { name: "Dwelling Place School", path: "/dwelling-place" }]}
    >
      <Cta to={dwellingInterestHref} variant="light">Join the Interest List</Cta>
      <Cta to={org.dwellingLinktree} variant="outlineLight">Learn More</Cta>
    </ImageHero>
  );
}

