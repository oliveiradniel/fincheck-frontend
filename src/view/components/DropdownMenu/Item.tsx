import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";

import type { ClassValue } from "clsx";
import { cn } from "@/app/utils/cn";

interface ItemProps {
  children: React.ReactNode;
  onSelect?(): void;
  className?: ClassValue;
}

export function Item({ children, onSelect, className }: ItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        "flex min-h-10 cursor-pointer items-center rounded-2xl px-4 py-2 text-sm text-gray-800 transition-colors duration-300 ease-in-out data-[highlighted]:bg-moss-green/4",
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
