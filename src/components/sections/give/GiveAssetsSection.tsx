import { Section } from "@/components/site/Section";
import { org } from "@/content/site";

export function GiveAssetsSection() {
  return (
    <Section tone="paper">
      <div className="grid gap-10 md:grid-cols-2">
        <h2 className="display-md">Donor advised funds & appreciated assets</h2>
        <div className="text-muted-foreground">
          <p>You can also give appreciated assets like stocks and crypto simply and securely through Charityvest — search “Pray The Bay Area”.</p>
          <p className="mt-4">EIN <strong className="text-ink">{org.ein}</strong>. If Pray The Bay doesn’t appear, contact us at{" "}
            <a href={`mailto:${org.email}`} className="link-underline text-ink">{org.email}</a>.
          </p>
        </div>
      </div>
    </Section>
  );
}

