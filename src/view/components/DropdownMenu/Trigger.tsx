import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";

import type { ClassValue } from "clsx";
import { cn } from "@/app/utils/cn";

interface TriggerProps {
  children: React.ReactNode;
  className?: ClassValue;
}

export function Trigger({ children, className }: TriggerProps) {
  return (
    <RdxDropdownMenu.Trigger
      className={cn("cursor-pointer outline-none", className)}
    >
      <button className="cursor-pointer">{children}</button>
    </RdxDropdownMenu.Trigger>
  );
}
