import { forwardRef, type ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, placeholder, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          id={inputId}
          ref={ref}
          name={name}
          className="peer h-[52px] w-full rounded-lg border border-gray-400 bg-white px-3 pt-4 text-gray-800 transition-colors duration-300 ease-in-out outline-none placeholder-shown:pt-0 focus:border-gray-800"
          placeholder=""
        />

        <label
          htmlFor={inputId}
          className="pointer-events-none absolute top-1/4 left-[13px] -translate-y-1 text-xs text-gray-700 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2"
        >
          {placeholder}
        </label>
      </div>
    );
  },
);

Input.displayName = "Input";
