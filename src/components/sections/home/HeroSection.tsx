import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Cta, Photo } from "@/components/site/primitives";
import { events, org, photos } from "@/content/site";

const headlineLines = [
  { text: "A Praying Church.", accent: false },
  { text: "a revived city.", accent: true },
  { text: "An Awakened Generation.", accent: false },
] as const;

const heroMetrics = [
  { label: "Rhythm", value: "Morning · Noon · Night" },
  { label: "Expressions", value: "Online & In-Person" },
  { label: "Vision", value: "10 Regional 24/7 Rooms" },
] as const;

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  return (
    <section
      ref={ref}
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-night text-ivory"
    >
      {/* Background Parallax & Slow Ken Burns */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduce ? 0 : 10, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <Photo
            src={photos.worshipNight}
            alt="A young man worships with lifted hands at a Pray The Bay night of prayer"
            eager
            w={2500}
            className="object-[62%_center]"
          />
        </motion.div>
      </motion.div>

      {/* Multi-layered Editorial Lighting & Vignette */}
      <div className="overlay-hero pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night/80 via-night/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-night via-night/70 to-transparent" />

      {/* Main Hero Container */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-12 pt-32 md:px-10 md:pb-16 lg:pt-40"
      >
        {/* Top Eyebrow & Upcoming Event Pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <span aria-hidden="true" className="h-px w-8 bg-sky/80" />
            <p className="eyebrow text-[0.68rem] tracking-[0.28em] text-sky">
              San Francisco Bay Area · Est. through the local Church
            </p>
          </div>

          <Link
            to="/seek-week-2026"
            className="group hidden items-center gap-3 border border-ivory/15 bg-night/55 px-4 py-2 backdrop-blur-md transition-colors duration-300 hover:border-gold/60 sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
          >
            <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
            <span className="eyebrow text-[0.6rem] tracking-[0.24em] text-ivory/85 group-hover:text-ivory">
              {events.seekWeek.title} · {events.seekWeek.dates}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-3 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        {/* Monumental Staggered Headline */}
        <h1 className="mt-6 font-display text-[clamp(2.1rem,5vw,5rem)] leading-[0.98] uppercase tracking-[-0.02em] md:mt-8">
          {headlineLines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-1.5">
              <motion.span
                className={
                  line.accent
                    ? "flex items-center gap-5 italic normal-case text-sky md:pl-[5vw] lg:pl-[7vw]"
                    : "block"
                }
                initial={reduce ? false : { y: "112%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.38 + i * 0.16, duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {line.accent && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px w-12 shrink-0 bg-sky/50 md:inline-block lg:w-20"
                  />
                )}
                <span>{line.text}</span>
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Bottom Architectural Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 border-t border-ivory/15 pt-8 md:mt-14 md:pt-10"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            {/* Summary Copy */}
            <div className="lg:col-span-5">
              <p className="prose-body max-w-xl text-ivory/80">{org.summary}</p>
            </div>

            {/* Movement Pillars Micro-Ledger */}
            <dl className="hidden grid-cols-3 gap-6 border-l border-ivory/15 pl-8 xl:col-span-4 xl:grid">
              {heroMetrics.map((m) => (
                <div key={m.label}>
                  <dt className="eyebrow text-[0.58rem] tracking-[0.24em] text-ivory/45">{m.label}</dt>
                  <dd className="mt-2 font-display text-lg leading-snug text-ivory/90">{m.value}</dd>
                </div>
              ))}
            </dl>

            {/* Primary CTAs + Scroll Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 lg:col-span-7 lg:justify-end xl:col-span-3">
              <div className="flex flex-wrap gap-3">
                <Cta to="/pray-with-us" variant="light">
                  Join the Movement
                </Cta>
                <Cta to="/vision" variant="outlineLight">
                  Our Vision
                </Cta>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Right Editorial Scroll Cue */}
      <a
        href="#vision-h"
        aria-label="Scroll to vision section"
        className="group absolute bottom-6 right-6 z-20 hidden items-center gap-3 text-ivory/55 transition-colors hover:text-ivory 2xl:flex"
      >
        <span className="eyebrow text-[0.58rem] tracking-[0.28em]">Scroll</span>
        <span className="relative h-9 w-px overflow-hidden bg-ivory/20" aria-hidden="true">
          <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-sky" />
        </span>
      </a>
    </section>
  );
}
