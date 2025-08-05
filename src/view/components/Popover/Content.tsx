import * as RdxPopover from "@radix-ui/react-popover";

import type { ClassValue } from "clsx";

import { cn } from "@/app/utils/cn";

interface ContentProps {
  children: React.ReactNode;
  className?: ClassValue;
}

export function Content({ children, className }: ContentProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          "z-[99] space-y-2 rounded-2xl bg-white/80 p-4 shadow-box backdrop-blur-sm",
          className,
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
}
