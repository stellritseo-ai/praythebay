import { Photo } from "@/components/site/primitives";
import { photos } from "@/content/site";

export function CohortBannerSection() {
  return (
    <div className="h-[55svh] overflow-hidden">
      <Photo src={photos.layingHands} alt="Pastors praying together during a cohort gathering" />
    </div>
  );
}

