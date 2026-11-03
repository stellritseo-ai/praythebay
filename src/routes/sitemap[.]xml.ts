import { createFileRoute } from "@tanstack/react-router";
import { nav, org } from "@/content/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", ...nav.flatMap((g) => g.items.map((i) => i.to))];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...new Set(paths)].map((p) => `  <url><loc>${org.url}${p === "/" ? "" : p}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(body, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
