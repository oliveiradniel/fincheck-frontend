import type { ComponentProps } from "react";

import * as RdxPopover from "@radix-ui/react-popover";

import { cn } from "@/app/utils/cn";

interface TriggerProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export function Trigger({ children, className, ...props }: TriggerProps) {
  return (
    <RdxPopover.Trigger {...props} className={cn("outline-none", className)}>
      {children}
    </RdxPopover.Trigger>
  );
}
