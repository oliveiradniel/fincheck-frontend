import type { ComponentProps } from "react";

import { cn } from "@/app/utils/cn";

export function Button({ className, ...props }: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "h-12 cursor-pointer rounded-2xl bg-moss-green px-6 font-medium text-white transition-colors duration-300 ease-in-out hover:bg-moss-green-hover disabled:cursor-default disabled:bg-gray-100 disabled:text-gray-400",
        className,
      )}
    />
  );
}
