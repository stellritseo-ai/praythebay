import type { ReactNode } from "react";

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

