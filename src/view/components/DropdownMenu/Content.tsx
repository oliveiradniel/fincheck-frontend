import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";

import type { ClassValue } from "clsx";
import { cn } from "@/app/utils/cn";

interface ContentProps {
  children: React.ReactNode;
  className?: ClassValue;
}

export function Content({ children, className }: ContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          "space-y-2 rounded-2xl bg-white/20 p-2 shadow-[0_11px_20px_0_rgba(0,0,0,0.1)] backdrop-blur-sm data-[state=closed]:animate-dropdown-menu-close data-[state=open]:animate-dropdown-menu-open",
          className,
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}
