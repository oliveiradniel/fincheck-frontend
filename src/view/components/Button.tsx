import type { ComponentProps } from "react";

import { cn } from "@/app/utils/cn";
import { Loader } from "./Loader";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "danger" | "ghost";
  isLoading?: boolean;
}

export function Button({
  variant,
  className,
  children,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      aria-disabled={isLoading}
      className={cn(
        "flex h-12 cursor-pointer items-center justify-center rounded-2xl bg-moss-green px-6 font-medium text-white transition-all duration-300 ease-in-out hover:bg-moss-green-hover disabled:cursor-default disabled:bg-gray-100 disabled:text-gray-400",
        isLoading && "pointer-events-auto cursor-default bg-moss-green-hover",
        variant === "danger" && "bg-red-700 hover:bg-red-700/86",
        variant === "ghost" &&
          "border border-gray-800 bg-white text-gray-800 hover:bg-gray-800/5",
        className,
      )}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
}
