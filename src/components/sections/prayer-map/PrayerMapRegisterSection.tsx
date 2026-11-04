import { Section } from "@/components/site/Section";
import { Cta } from "@/components/site/primitives";
import { org } from "@/content/site";

export function PrayerMapRegisterSection() {
  return (
    <Section tone="sky">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <h2 className="display-lg">Register your prayer group</h2>
          <p className="prose-body mt-6 max-w-lg">Church, home, work or school prayer — add your group to the map so others across the Bay can find it.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Cta to={org.plantPrayerRegister}>Register Your Group</Cta>
          <Cta to="/plant-prayer" variant="outlineDark">How to Plant Prayer</Cta>
        </div>
      </div>
    </Section>
  );
}

