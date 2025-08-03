import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";

import type { ClassValue } from "clsx";
import { cn } from "@/app/utils/cn";

interface ContentProps {
  children: React.ReactNode;
  side?: "top" | "bottom";
  className?: ClassValue;
}

export function Content({ children, side = "top", className }: ContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          "z-50 space-y-2 rounded-2xl bg-white/20 p-2 shadow-box backdrop-blur-sm",
          className,
          side === "top"
            ? "data-[state=closed]:animate-dropdown-menu-close-top data-[state=open]:animate-dropdown-menu-open-top"
            : "data-[state=closed]:animate-dropdown-menu-close-bottom data-[state=open]:animate-dropdown-menu-open-bottom",
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}
