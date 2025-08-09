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
  const isDanger = variant === "danger";
  const isGhost = variant === "ghost";

  return (
    <button
      {...props}
      aria-disabled={isLoading}
      className={cn(
        "flex h-12 cursor-pointer items-center justify-center rounded-2xl bg-moss-green px-6 font-medium text-white transition-all duration-300 ease-in-out hover:bg-moss-green-hover disabled:cursor-default disabled:bg-gray-400 disabled:text-gray-100",
        isLoading && "pointer-events-auto cursor-default bg-moss-green-hover",
        isDanger && "bg-red-700 hover:bg-red-700/86",
        isDanger && isLoading && "!bg-red-700",
        isGhost &&
          "border border-gray-800 bg-white text-gray-800 hover:bg-gray-800/15",
        isGhost &&
          isLoading &&
          "cursor-not-allowed !bg-transparent !text-gray-800",
        className,
      )}
    >
      {isLoading && variant !== "ghost" ? <Loader /> : children}
    </button>
  );
}
