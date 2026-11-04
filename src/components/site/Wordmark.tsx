import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-[0.18em] font-display text-[1.6rem] leading-none tracking-[0.03em] select-none",
        className,
      )}
    >
      <span>Pray</span>
      <em className="font-script not-italic text-[1.22em] leading-none text-sky -mx-[0.04em] translate-y-[0.04em]">
        the
      </em>
      <span>Bay</span>
    </span>
  );
}
