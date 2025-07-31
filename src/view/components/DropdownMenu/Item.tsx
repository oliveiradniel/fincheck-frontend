import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";

import type { ClassValue } from "clsx";
import { cn } from "@/app/utils/cn";

interface ItemProps {
  children: React.ReactNode;
  className?: ClassValue;
}

export function Item({ children, className }: ItemProps) {
  return (
    <RdxDropdownMenu.Item
      className={cn(
        "flex min-h-12 cursor-pointer items-center rounded-2xl p-4 text-sm text-gray-800 transition-colors duration-300 ease-in-out outline-none data-[highlighted]:bg-moss-green/4",
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
