import { Breadcrumbs, JsonLd, Photo } from "@/components/site/primitives";
import { photos } from "@/content/site";
import { breadcrumbLd } from "@/lib/seo";

const trail = [{ name: "Home", path: "/" }, { name: "Partner", path: "/movement-partners" }, { name: "Movement Partners", path: "/movement-partners" }];

export function MovementHeroSection() {
  return (
    <section className="grid min-h-[100svh] bg-night text-ivory lg:grid-cols-2">
      <JsonLd data={breadcrumbLd(trail)} />
      <div className="flex flex-col justify-end px-5 pb-16 pt-36 md:px-10">
        <Breadcrumbs trail={trail} light />
        <p className="eyebrow mt-10 text-sky">Movement partner</p>
        <h1 className="display-xl mt-5">Build a dwelling place for God <em className="text-sky">across the Bay.</em></h1>
      </div>
      <div className="min-h-[50svh]"><Photo src={photos.worshipLeader} alt="A worship leader praying with eyes closed during a set" eager /></div>
    </section>
  );
}

