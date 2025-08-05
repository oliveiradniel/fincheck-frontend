import { forwardRef, useState, type ComponentProps } from "react";

import { cn } from "@/app/utils/cn";

import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

import { ErrorInputMessage } from "./ErrorInputMessage";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string | null;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, placeholder, type, error, ...props }, ref) => {
    const inputId = id ?? name;

    const [isShowPassword, setIsShowPassword] = useState(false);

    const passwordType = isShowPassword ? "text" : "password";

    const parsedType = type !== "password" ? type : passwordType;

    function handleToggleInputType() {
      setIsShowPassword((prevState) => !prevState);
    }

    return (
      <div className="relative">
        <input
          {...props}
          id={inputId}
          ref={ref}
          type={parsedType}
          name={name}
          className={cn(
            "peer h-[52px] w-full rounded-lg border border-gray-400 bg-white px-3 pt-4 text-gray-800 transition-colors duration-300 ease-in-out outline-none placeholder-shown:pt-0 focus:border-gray-800",
            error && "!border-red-500",
          )}
          placeholder=""
        />

        {type === "password" && (
          <button
            aria-label={isShowPassword ? "Esconder senha" : "Mostrar senha"}
            aria-pressed={isShowPassword}
            type="button"
            onClick={handleToggleInputType}
            className="absolute top-4.5 right-[13px] cursor-pointer"
          >
            {isShowPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </button>
        )}

        <label
          htmlFor={inputId}
          className={cn(
            "peer-placeholder-shown: pointer-events-none absolute top-1/4 left-[13px] -translate-y-1 text-xs text-gray-700 transition-all duration-100 ease-in-out peer-placeholder-shown:top-5.5",
            error && "top-3",
          )}
        >
          {placeholder}
        </label>

        {error && <ErrorInputMessage error={error} />}
      </div>
    );
  },
);

Input.displayName = "Input";
