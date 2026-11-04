import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Breadcrumbs, JsonLd } from "./primitives";
import { breadcrumbLd } from "@/lib/seo";
import type { Trail } from "./ImageHero";

/** Typographic ivory hero, used for library-style pages. */
export function TypeHero({
  eyebrow,
  title,
  intro,
  trail,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  trail: Trail;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-ink/10 bg-ivory">
      <JsonLd data={breadcrumbLd(trail)} />
      <div className="mx-auto max-w-[1600px] px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <Breadcrumbs trail={trail} />
        <div className="mt-12 grid gap-10 border-t border-ink/15 pt-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="flex items-start gap-3.5 pt-2">
            <span aria-hidden="true" className="mt-2 h-px w-8 shrink-0 bg-ink/40" />
            <p className="eyebrow text-muted-foreground">{eyebrow}</p>
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl tracking-[-0.02em]"
            >
              {title}
            </motion.h1>
            {(intro || children) && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                {intro && <div className="prose-body max-w-2xl text-muted-foreground">{intro}</div>}
                {children && <div className="mt-8 flex flex-wrap gap-3.5">{children}</div>}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
