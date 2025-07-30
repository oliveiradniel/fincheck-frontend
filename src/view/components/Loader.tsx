import { cn } from "@/app/utils/cn";

import type { ClassValue } from "clsx";

interface LoaderProps {
  indicatorColor?: string;
  trackColor?: string;
  className?: ClassValue;
}

export function Loader({ indicatorColor, trackColor, className }: LoaderProps) {
  return (
    <div
      className={cn(
        "h-5 w-5 animate-spin rounded-full border-[2px] border-white border-l-transparent select-none",
        className,
      )}
      style={{
        borderColor: indicatorColor,
        borderLeftColor: trackColor,
      }}
    />
  );
}
