import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Breadcrumbs, JsonLd, Photo } from "./primitives";
import { breadcrumbLd } from "@/lib/seo";

export type Trail = { name: string; path: string }[];

/** Full-bleed cinematic image hero with parallax. */
export function ImageHero({
  photo,
  alt,
  eyebrow,
  title,
  intro,
  trail,
  children,
  align = "bottom",
}: {
  photo: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  trail: Trail;
  children?: ReactNode;
  align?: "bottom" | "center";
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const isCentered = align === "center";

  return (
    <section ref={ref} className="relative flex min-h-[88svh] overflow-hidden bg-night text-ivory">
      <JsonLd data={breadcrumbLd(trail)} />

      {/* Parallax Image with Slow Scale Reveal */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 scale-110">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduce ? 0 : 8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <Photo src={photo} alt={alt} eager w={2500} />
        </motion.div>
      </motion.div>

      {/* Multi-layered Editorial Scrims */}
      <div className="overlay-hero pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night/70 via-night/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night via-night/60 to-transparent" />

      <div
        className={`relative z-10 mx-auto flex w-full max-w-[1600px] flex-col px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40 ${
          isCentered ? "items-center justify-center text-center" : "justify-between"
        }`}
      >
        <div className={isCentered ? "mb-auto self-start" : ""}>
          <Breadcrumbs trail={trail} light />
        </div>

        <div className={`mt-12 ${isCentered ? " flex flex-col items-center" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`flex items-center gap-3.5 ${isCentered ? "justify-center" : ""}`}
          >
            {!isCentered && <span aria-hidden="true" className="h-px w-8 bg-sky/80" />}
            <p className="eyebrow text-sky">{eyebrow}</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl mt-5 max-w-5xl tracking-[-0.02em]"
          >
            {title}
          </motion.h1>

          {(intro || children) && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-10 border-t border-ivory/15 pt-8 ${
                isCentered
                  ? "flex flex-col items-center gap-8"
                  : "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
              }`}
            >
              {intro ? (
                <div className="prose-body max-w-2xl text-ivory/80">{intro}</div>
              ) : (
                <div />
              )}
              {children && <div className="flex flex-wrap gap-3.5">{children}</div>}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
