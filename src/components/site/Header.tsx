import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { nav, org } from "@/content/site";
import { Wordmark } from "./Wordmark";

export { Wordmark };

/** Pages whose opening section is light, so the header starts in its dark-on-ivory style. */
const LIGHT_TOP = new Set([
  "/resources",
  "/vision",
  "/team",
  "/prayer-map",
  "/plant-prayer",
  "/praying-churches-cohort",
]);

/** Short editorial descriptions for each navigation destination to give the dropdown a curated feel. */
const ITEM_SUBTITLES: Record<string, string> = {
  "/about": "Our story, heart & local church family",
  "/vision": "Revival, renewal & 24/7 regional prayer",
  "/team": "Founders & regional equipping leaders",
  "/pray-with-us": "Daily online & in-person prayer rhythms",
  "/renaissance-27": "Feb 12–13, 2027 · Annual Bay gathering",
  "/seek-week-2026": "Nov 2–6, 2026 · Five days for the lost",
  "/dwelling-place": "9-month discipleship & prayer school",
  "/serve-with-us": "Lead, intercede & build with our team",
  "/the-shining-one": "Book, gatherings & awakening resources",
  "/praying-churches-cohort": "8-week cohort & retreat for pastors",
  "/resources": "Free guides, devotionals & training PDFs",
  "/podcast": "Conversations on Spotify, Apple & YouTube",
  "/plant-prayer": "Start a prayer group where you are",
  "/prayer-map": "Explore prayer groups across the Bay",
  "/community-partners": "Pray & fast with us weekly",
  "/movement-partners": "Lead prayer & build a dwelling place",
  "/give": "Sow toward HQ & 24/7 prayer rooms",
  "/missionaries": "Support regional prayer missionaries",
};

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setHover(null);
  }, [pathname]);

  // Lock scroll, set outside content inert, and manage focus for the mobile dialog
  useEffect(() => {
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (open) {
      document.body.style.overflow = "hidden";
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }
    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  // Escape key closes open dropdown or mobile menu
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (open) {
          setOpen(false);
          openBtnRef.current?.focus();
        } else if (hover) {
          setHover(null);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, hover]);

  const lightTop = LIGHT_TOP.has(pathname);
  const solid = scrolled || lightTop;
  const isLightSurface = solid && lightTop && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding,box-shadow] duration-500 ease-[var(--ease-cinema)]",
          scrolled ? "py-3.5" : "py-5 lg:py-6",
          scrolled &&
            "bg-night/88 text-ivory backdrop-blur-xl border-b border-ivory/10 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.55)]",
          isLightSurface &&
            "bg-ivory/90 text-ink backdrop-blur-xl border-b border-ink/10",
          !solid &&
            "bg-gradient-to-b from-night/70 via-night/25 to-transparent text-ivory border-b border-ivory/10",
        )}
        onMouseLeave={() => setHover(null)}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* Left: Brand Wordmark + Region Tag */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              aria-label="Pray The Bay home"
              className="group inline-flex items-center gap-3 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
            >
              <Wordmark className="transition-opacity duration-300 group-hover:opacity-85" />
            </Link>
            <span
              aria-hidden="true"
              className={cn(
                "hidden xl:inline-block h-3.5 w-px transition-colors duration-500",
                isLightSurface ? "bg-ink/20" : "bg-ivory/20",
              )}
            />
            <span
              className={cn(
                "hidden xl:inline-block eyebrow text-[0.58rem] tracking-[0.26em] transition-colors duration-500",
                isLightSurface ? "text-ink/50" : "text-ivory/50",
              )}
            >
              SF Bay Area
            </span>
          </div>

          {/* Center: Primary Navigation */}
          <nav aria-label="Primary" className="hidden lg:block lg:justify-self-center">
            <ul className="flex items-center gap-1 xl:gap-2">
              {nav.map((g, groupIdx) => {
                const isGroupActive = g.items.some((it) => it.to === pathname);
                const isOpen = hover === g.label;

                return (
                  <li
                    key={g.label}
                    className="relative"
                    onMouseEnter={() => setHover(g.label)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                        setHover((prev) => (prev === g.label ? null : prev));
                      }
                    }}
                  >
                    <button
                      type="button"
                      className={cn(
                        "group relative flex items-center gap-1.5 px-4 py-2.5 eyebrow text-[0.68rem] tracking-[0.24em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky",
                        isLightSurface
                          ? isOpen || isGroupActive
                            ? "text-ink"
                            : "text-ink/75 hover:text-ink"
                          : isOpen || isGroupActive
                            ? "text-ivory"
                            : "text-ivory/80 hover:text-ivory",
                      )}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onFocus={() => setHover(g.label)}
                      onClick={() => setHover(isOpen ? null : g.label)}
                    >
                      <span>{g.label}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "size-3 opacity-60 transition-transform duration-500 ease-[var(--ease-cinema)]",
                          isOpen && "rotate-180 text-sky opacity-100",
                        )}
                      />

                      {/* Active route dot or hover underline */}
                      {(isGroupActive || isOpen) && (
                        <motion.span
                          layoutId="header-nav-indicator"
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className={cn(
                            "pointer-events-none absolute inset-x-4 bottom-1 h-[1.5px]",
                            isLightSurface ? "bg-ink" : "bg-sky",
                          )}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.985 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.985 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full w-[360px] -translate-x-1/2 pt-3.5"
                        >
                          <div className="relative overflow-hidden border border-ivory/15 bg-night/96 text-ivory shadow-[0_28px_80px_-12px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
                            {/* Top sky hairline accent */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-sky/80 via-sky/30 to-transparent" />

                            {/* Dropdown Header Bar */}
                            <div className="flex items-center justify-between border-b border-line-dark px-6 py-3.5">
                              <span className="eyebrow text-[0.6rem] tracking-[0.28em] text-sky">
                                0{groupIdx + 1} · {g.label}
                              </span>
                              <span className="eyebrow text-[0.58rem] text-ivory/35">
                                {g.items.length} {g.items.length === 1 ? "Page" : "Pages"}
                              </span>
                            </div>

                            {/* Dropdown Links */}
                            <ul className="divide-y divide-line-dark/70 p-2">
                              {g.items.map((it, itemIdx) => {
                                const active = pathname === it.to;
                                return (
                                  <li key={it.to}>
                                    <Link
                                      to={it.to}
                                      onClick={() => setHover(null)}
                                      className={cn(
                                        "group/item flex items-start justify-between gap-4 px-4 py-3.5 transition-colors duration-300 hover:bg-ivory/[0.05] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-sky",
                                        active && "bg-ivory/[0.04]",
                                      )}
                                    >
                                      <div className="min-w-0">
                                        <div className="flex items-baseline gap-2.5">
                                          <span className="eyebrow text-[0.58rem] tabular-nums text-ivory/35 transition-colors group-hover/item:text-sky">
                                            0{itemIdx + 1}
                                          </span>
                                          <span
                                            className={cn(
                                              "font-display text-[1.35rem] leading-tight tracking-[-0.01em] transition-colors duration-300",
                                              active
                                                ? "text-sky italic"
                                                : "text-ivory/90 group-hover/item:text-ivory",
                                            )}
                                          >
                                            {it.label}
                                          </span>
                                        </div>
                                        {ITEM_SUBTITLES[it.to] && (
                                          <p className="mt-1 pl-6 text-xs leading-relaxed text-ivory/50 transition-colors duration-300 group-hover/item:text-ivory/70">
                                            {ITEM_SUBTITLES[it.to]}
                                          </p>
                                        )}
                                      </div>
                                      <ArrowRight
                                        aria-hidden="true"
                                        className={cn(
                                          "mt-1 size-3.5 shrink-0 transition-all duration-300",
                                          active
                                            ? "translate-x-0 text-sky opacity-100"
                                            : "-translate-x-1 text-ivory/40 opacity-0 group-hover/item:translate-x-0 group-hover/item:text-sky group-hover/item:opacity-100",
                                        )}
                                      />
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Actions + Mobile Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3 lg:justify-self-end">
            <Link
              to="/give"
              className={cn(
                "eyebrow hidden items-center gap-2 px-4 py-2.5 text-[0.68rem] tracking-[0.24em] transition-colors duration-300 md:inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky",
                isLightSurface
                  ? "text-ink/80 hover:text-ink"
                  : "text-ivory/80 hover:text-sky",
              )}
            >
              <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
              <span>Give</span>
            </Link>

            <Link
              to="/pray-with-us"
              className={cn(
                "group eyebrow hidden items-center gap-2.5 px-5 py-3 text-[0.68rem] tracking-[0.24em] transition-all duration-500 sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky",
                isLightSurface
                  ? "bg-ink text-ivory hover:bg-sky hover:text-ink"
                  : "bg-ivory text-ink hover:bg-sky hover:text-ink",
              )}
            >
              <span>Join Us</span>
              <ArrowRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-500 ease-[var(--ease-cinema)] group-hover:translate-x-0.5"
              />
            </Link>

            <button
              ref={openBtnRef}
              type="button"
              className={cn(
                "inline-flex size-11 items-center justify-center border transition-colors duration-300 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky",
                isLightSurface
                  ? "border-ink/20 text-ink hover:bg-ink hover:text-ivory"
                  : "border-ivory/25 text-ivory hover:bg-ivory hover:text-ink",
              )}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setOpen(true)}
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Editorial Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-night text-ivory"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            {/* Top Bar aligned with Header */}
            <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between border-b border-line-dark px-5 py-5 md:px-10">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                aria-label="Pray The Bay home"
                className="py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
              >
                <Wordmark />
              </Link>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close menu"
                onClick={() => {
                  setOpen(false);
                  openBtnRef.current?.focus();
                }}
                className="inline-flex size-11 items-center justify-center border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            {/* Navigation Groups */}
            <nav aria-label="Mobile" className="mx-auto w-full max-w-[1600px] flex-1 px-5 py-8 md:px-10">
              <div className="grid gap-8 sm:grid-cols-2">
                {nav.map((g, gi) => (
                  <motion.div
                    key={g.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + gi * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="border-t border-line-dark pt-5"
                  >
                    <p className="eyebrow mb-4 flex items-center gap-2 text-[0.65rem] text-sky">
                      <span className="text-ivory/35">0{gi + 1}</span>
                      <span>{g.label}</span>
                    </p>
                    <ul className="space-y-2.5">
                      {g.items.map((it) => {
                        const active = pathname === it.to;
                        return (
                          <li key={it.to}>
                            <Link
                              to={it.to}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "group inline-flex items-baseline gap-3 font-display text-3xl leading-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky",
                                active ? "italic text-sky" : "text-ivory/90 hover:text-sky",
                              )}
                            >
                              <span>{it.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer CTA & Socials */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.55 }}
                className="mt-10 border-t border-line-dark pt-8"
              >
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/pray-with-us"
                    onClick={() => setOpen(false)}
                    className="eyebrow inline-flex items-center gap-3 bg-ivory px-6 py-4 text-ink transition-colors hover:bg-sky"
                  >
                    <span>Join Us</span>
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </Link>
                  <a
                    href={org.give}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow inline-flex items-center gap-2.5 border border-ivory/35 px-6 py-4 text-ivory transition-colors hover:border-gold hover:text-gold"
                  >
                    <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <span>Sow for Awakening</span>
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-ivory/50">
                  <a href={`mailto:${org.email}`} className="link-underline hover:text-ivory">
                    {org.email}
                  </a>
                  <div className="flex gap-5 eyebrow text-[0.6rem] text-ivory/60">
                    <a href={org.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-sky">
                      Instagram
                    </a>
                    <a href={org.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-sky">
                      Spotify
                    </a>
                    <a href={org.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-sky">
                      YouTube
                    </a>
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
