import { forwardRef, type ComponentProps } from "react";

import { cn } from "../../app/utils/cn";

import { CrossCircledIcon } from "@radix-ui/react-icons";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, placeholder, error, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          id={inputId}
          ref={ref}
          name={name}
          className={cn(
            "peer h-[52px] w-full rounded-lg border border-gray-400 bg-white px-3 pt-4 text-gray-800 transition-colors duration-300 ease-in-out outline-none placeholder-shown:pt-0 focus:border-gray-800",
            error && "!border-red-500",
          )}
          placeholder=""
        />

        <label
          htmlFor={inputId}
          className="peer-placeholder-shown: pointer-events-none absolute top-1/4 left-[13px] -translate-y-1 text-xs text-gray-700 transition-all duration-100 ease-in-out peer-placeholder-shown:top-5.5"
        >
          {placeholder}
        </label>

        {error && (
          <div className="mt-2 flex items-center gap-2 text-red-500">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
