import type { ComponentProps } from "react";

import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";

import { cn } from "@/app/utils/cn";

interface TriggerProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export function Trigger({ children, className, ...props }: TriggerProps) {
  return (
    <RdxDropdownMenu.Trigger
      {...props}
      className={cn("outline-none", className)}
    >
      {children}
    </RdxDropdownMenu.Trigger>
  );
}
