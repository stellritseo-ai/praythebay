import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/PageHero";
import { Breadcrumbs, Cta, JsonLd, Photo } from "@/components/site/primitives";
import { org, photos } from "@/content/site";
import { breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/movement-partners")({
  head: () =>
    pageHead({
      title: "Movement Partners — Build a Dwelling Place for God in the Bay | Pray The Bay",
      description: "Lead daily prayer with Pray The Bay and give generously to build a dwelling place for God across the San Francisco Bay Area.",
      path: "/movement-partners",
    }),
  component: Movement,
});

const trail = [{ name: "Home", path: "/" }, { name: "Partner", path: "/movement-partners" }, { name: "Movement Partners", path: "/movement-partners" }];

function Movement() {
  return (
    <>
      <JsonLd data={breadcrumbLd(trail)} />
      <section className="grid min-h-[100svh] bg-night text-ivory lg:grid-cols-2">
        <div className="flex flex-col justify-end px-5 pb-16 pt-36 md:px-10">
          <Breadcrumbs trail={trail} light />
          <p className="eyebrow mt-10 text-sky">Movement partner</p>
          <h1 className="display-xl mt-5">Build a dwelling place for God <em className="text-sky">across the Bay.</em></h1>
        </div>
        <div className="min-h-[50svh]"><Photo src={photos.worshipLeader} alt="A worship leader praying with eyes closed during a set" eager /></div>
      </section>
      <section className="grid md:grid-cols-2">
        <div className="bg-ivory p-10 md:p-16">
          <p className="eyebrow text-muted-foreground">01</p>
          <h2 className="display-lg mt-6">Lead daily prayer with us.</h2>
          <p className="mt-4 text-muted-foreground">Sign up to be equipped as a prayer or worship leader.</p>
          <div className="mt-10"><Cta to={org.serveForm}>Join Here</Cta></div>
        </div>
        <div className="bg-sky p-10 md:p-16">
          <p className="eyebrow">02</p>
          <h2 className="display-lg mt-6">Give generously.</h2>
          <p className="mt-4">Help build a dwelling place for God in the Bay Area.</p>
          <div className="mt-10"><Cta to={org.give}>Give Here</Cta></div>
        </div>
      </section>
      <Section tone="paper">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="display-md max-w-xl">Want to pray and fast with us first?</p>
          <Cta to="/community-partners" variant="outlineDark">Community Partners</Cta>
        </div>
      </Section>
    </>
  );
}
