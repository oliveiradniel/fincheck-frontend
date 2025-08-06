import { useState } from "react";

import * as RdxSelect from "@radix-ui/react-select";

import { cn } from "@/app/utils/cn";

import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

import { ErrorInputMessage } from "./ErrorInputMessage";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value?: string;
  onChange?(value: string): void;
  placeholder?: string;
  error?: string;
  options: Option[];
  className?: string;
}

export function Select({
  value,
  onChange,
  placeholder,
  error,
  options,
  className,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value);

  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }

  return (
    <div>
      <div className="relative">
        <label
          className={cn(
            "pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 text-gray-700 transition-all duration-300 ease-in-out",
            selectedValue && "top-2 left-[13px] translate-y-0 text-xs",
          )}
        >
          {placeholder}
        </label>

        <RdxSelect.Root value={value} onValueChange={handleSelect}>
          <RdxSelect.Trigger
            aria-label="Selecione o tipo de conta"
            className={cn(
              "relative flex h-[52px] w-full cursor-pointer items-center rounded-lg border border-gray-400 bg-white px-3 pt-4 text-gray-800 transition-colors duration-300 ease-in-out outline-none focus:border-gray-800",
              error && "!border-red-500",
              className,
            )}
          >
            <RdxSelect.Value />

            <RdxSelect.Icon className="absolute top-1/2 right-3 -translate-y-1/2">
              <ChevronDownIcon className="h-6 w-6 text-gray-800" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content className="z-50 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-box data-[state=open]:animate-fade-in">
              <RdxSelect.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
                <ChevronUpIcon />
              </RdxSelect.ScrollUpButton>

              <RdxSelect.Viewport className="p-[5px]">
                {options.map(({ value, label }) => (
                  <RdxSelect.Item
                    key={value}
                    value={value}
                    className={cn(
                      "cursor-pointer rounded-lg p-2 transition-colors duration-300 ease-in-out outline-none data-[highlighted]:bg-gray-50 data-[state=checked]:cursor-default data-[state=checked]:!bg-white data-[state=checked]:font-bold",
                    )}
                  >
                    <RdxSelect.ItemText className="p-2 text-sm text-gray-800">
                      {label}
                    </RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>

              <RdxSelect.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
                <ChevronDownIcon />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>

      {error && <ErrorInputMessage error={error} />}
    </div>
  );
}
