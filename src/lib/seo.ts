import { org } from "@/content/site";

type HeadInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
};

/** Per-route head(): unique title, description, canonical, Open Graph and Twitter tags. */
export function pageHead({ title, description, path, image, type = "website" }: HeadInput) {
  const url = `${org.url}${path === "/" ? "" : path}`;
  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: org.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image }, { name: "twitter:image", content: image });
  }
  return { meta, links: [{ rel: "canonical", href: url }] };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: org.name,
  legalName: org.legalName,
  url: org.url,
  email: org.email,
  taxID: org.ein,
  description: org.summary,
  areaServed: { "@type": "Place", name: org.region },
  sameAs: [org.instagram, org.spotify, org.apple],
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: org.name,
  url: org.url,
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${org.url}${it.path}`,
    })),
  };
}

export function eventLd(e: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: { name: string; address: string };
  url: string;
  offerUrl?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.name,
    description: e.description,
    startDate: e.startDate,
    endDate: e.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: { "@type": "Place", name: e.location.name, address: e.location.address },
    organizer: { "@type": "Organization", name: org.name, url: org.url },
    url: e.url,
    ...(e.image ? { image: [e.image] } : {}),
    ...(e.offerUrl ? { offers: { "@type": "Offer", url: e.offerUrl } } : {}),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
