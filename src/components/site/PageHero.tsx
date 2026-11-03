import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Breadcrumbs, JsonLd, Photo } from "./primitives";
import { breadcrumbLd } from "@/lib/seo";

type Trail = { name: string; path: string }[];

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
  return (
    <section ref={ref} className="relative flex min-h-[88svh] overflow-hidden bg-night text-ivory">
      <JsonLd data={breadcrumbLd(trail)} />
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Photo src={photo} alt={alt} eager w={2500} />
      </motion.div>
      <div className="overlay-hero absolute inset-0" />
      <div
        className={`relative mx-auto flex w-full max-w-[1600px] flex-col px-5 pb-16 pt-36 md:px-10 md:pb-20 ${align === "center" ? "items-center justify-center text-center" : "justify-end"}`}
      >
        <Breadcrumbs trail={trail} light />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow mt-10 text-sky"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl mt-5 max-w-5xl"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="prose-body mt-8 max-w-2xl text-ivory/80"
          >
            {intro}
          </motion.div>
        )}
        {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}

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
    <section className="bg-ivory">
      <JsonLd data={breadcrumbLd(trail)} />
      <div className="mx-auto max-w-[1600px] px-5 pb-16 pt-36 md:px-10 md:pt-44">
        <Breadcrumbs trail={trail} />
        <div className="mt-12 grid gap-10 border-t pt-10 lg:grid-cols-[1fr_1.4fr]">
          <p className="eyebrow text-muted-foreground">{eyebrow}</p>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl"
            >
              {title}
            </motion.h1>
            {intro && <div className="prose-body mt-8 max-w-2xl text-muted-foreground">{intro}</div>}
            {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  tone = "ivory",
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: "ivory" | "paper" | "night" | "ink" | "sky";
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  const tones = {
    ivory: "bg-ivory text-ink",
    paper: "bg-paper text-ink",
    night: "bg-night text-ivory",
    ink: "bg-ink text-ivory",
    sky: "bg-sky text-ink",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">{children}</div>
    </section>
  );
}
