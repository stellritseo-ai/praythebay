import { Cta } from "@/components/site/primitives";
import { org } from "@/content/site";

export function MovementWaysSection() {
  return (
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
  );
}

