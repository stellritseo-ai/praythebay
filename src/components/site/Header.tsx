import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { nav, org } from "@/content/site";

/** Pages whose opening section is light, so the header starts in its dark-on-ivory style. */
const LIGHT_TOP = new Set(["/resources", "/vision", "/team", "/prayer-map", "/plant-prayer", "/praying-churches-cohort"]);

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display text-2xl leading-none tracking-[0.04em]", className)}>
      Pray <em className="font-script not-italic text-[1.15em] text-sky">the</em> Bay
    </span>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
    setHover(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const lightTop = LIGHT_TOP.has(pathname);
  const solid = scrolled || lightTop;
  const darkBar = scrolled && !lightTop;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          solid ? "py-3 backdrop-blur-md" : "py-6",
          darkBar && "bg-night/90 text-ivory",
          solid && !darkBar && "bg-ivory/92 text-ink border-b",
          !solid && "text-ivory",
        )}
        onMouseLeave={() => setHover(null)}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10">
          <Link to="/" aria-label="Pray The Bay home">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((g) => (
                <li key={g.label} className="relative" onMouseEnter={() => setHover(g.label)}>
                  <button
                    type="button"
                    className="eyebrow py-3 opacity-90 hover:opacity-100"
                    aria-expanded={hover === g.label}
                    onFocus={() => setHover(g.label)}
                    onClick={() => setHover(hover === g.label ? null : g.label)}
                  >
                    {g.label}
                  </button>
                  <AnimatePresence>
                    {hover === g.label && (
                      <motion.ul
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full min-w-64 -translate-x-1/2 bg-night p-6 text-ivory shadow-2xl"
                      >
                        {g.items.map((it) => (
                          <li key={it.to}>
                            <Link
                              to={it.to}
                              className="block py-2 font-display text-xl text-ivory/80 transition-colors hover:text-sky"
                              activeProps={{ className: "text-sky" }}
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/give"
              className="eyebrow hidden px-4 py-3 opacity-90 hover:opacity-100 md:inline-block"
            >
              Give
            </Link>
            <Link
              to="/pray-with-us"
              className={cn(
                "eyebrow hidden px-5 py-3 transition-colors duration-500 sm:inline-block",
                solid && !darkBar ? "bg-ink text-ivory hover:bg-sky hover:text-ink" : "bg-ivory text-ink hover:bg-sky",
              )}
            >
              Join Us
            </Link>
            <button
              type="button"
              className="p-2 lg:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-night text-ivory"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between px-5 py-6">
              <Wordmark />
              <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                <X className="size-6" />
              </button>
            </div>
            <nav aria-label="Mobile" className="px-5 pb-10">
              {nav.map((g, gi) => (
                <motion.div
                  key={g.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + gi * 0.06, duration: 0.6 }}
                  className="border-t border-line-dark py-6"
                >
                  <p className="eyebrow mb-3 text-sky">{g.label}</p>
                  <ul className="space-y-1">
                    {g.items.map((it) => (
                      <li key={it.to}>
                        <Link to={it.to} className="font-display text-3xl leading-tight">
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/pray-with-us" className="eyebrow bg-ivory px-6 py-4 text-ink">
                  Join Us
                </Link>
                <a href={org.give} target="_blank" rel="noopener noreferrer" className="eyebrow border border-ivory/40 px-6 py-4">
                  Give
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
