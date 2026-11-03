import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { img } from "@/content/site";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const variants = {
  light: "bg-ivory text-ink hover:bg-sky",
  dark: "bg-ink text-ivory hover:bg-night hover:text-sky",
  sky: "bg-sky text-ink hover:bg-ivory",
  outlineLight: "border border-ivory/50 text-ivory hover:bg-ivory hover:text-ink",
  outlineDark: "border border-ink/40 text-ink hover:bg-ink hover:text-ivory",
  gold: "bg-gold text-ink hover:bg-ivory",
} as const;

export type CtaVariant = keyof typeof variants;

/** Primary call to action. Internal paths use the router; http(s) links open in a new tab. */
export function Cta({
  to,
  children,
  variant = "dark",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
}) {
  const cls = cn(
    "group inline-flex items-center gap-3 px-7 py-4 eyebrow transition-colors duration-500",
    variants[variant],
    className,
  );
  const external = /^(https?:|mailto:)/.test(to);
  const Icon = external ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      <span>{children}</span>
      <Icon className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
    </>
  );
  if (external) {
    return (
      <a href={to} className={cls} target={to.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  );
}

export function Photo({
  src,
  alt,
  className,
  w = 1500,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  w?: number;
  eager?: boolean;
}) {
  return (
    <img
      src={img(src, w)}
      srcSet={`${img(src, 750)} 750w, ${img(src, 1500)} 1500w, ${img(src, 2500)} 2500w`}
      sizes="(max-width: 768px) 100vw, 60vw"
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow flex items-center gap-3", className)}>{children}</p>;
}

export function Breadcrumbs({ trail, light }: { trail: { name: string; path: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("eyebrow", light ? "text-ivory/60" : "text-muted-foreground")}>
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((t, i) => (
          <li key={t.path} className="flex items-center gap-2">
            {i < trail.length - 1 ? (
              <Link to={t.path} className="link-underline hover:opacity-100">
                {t.name}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-ivory" : "text-ink"}>
                {t.name}
              </span>
            )}
            {i < trail.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Faq({ items, dark }: { items: { q: string; a: string }[]; dark?: boolean }) {
  return (
    <div className={cn("divide-y border-y", dark ? "divide-line-dark border-line-dark" : "")}>
      {items.map((f) => (
        <details key={f.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-2xl leading-snug">
            <h3>{f.q}</h3>
            <span className="mt-1 text-xl transition-transform duration-500 group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className={cn("prose-body mt-4 max-w-2xl", dark ? "text-ivory/70" : "text-muted-foreground")}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
