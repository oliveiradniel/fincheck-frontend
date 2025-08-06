import { useState } from "react";

import { cn } from "@/app/utils/cn";

import { COLORS } from "@/app/config/constants";

import { ChevronDownIcon } from "@radix-ui/react-icons";

import { DropdownMenu } from "./DropdownMenu";
import { ErrorInputMessage } from "./ErrorInputMessage";
import { ColorIcon } from "./icons/ColorIcon";

import type { Color } from "@/@types/Color";

interface ColorsDropdownInputProps {
  value?: string;
  onChange?(color: string): void;
  className?: string;
  error?: string;
}

export function ColorsDropdownInput({
  value,
  onChange,
  className,
  error,
}: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(() => {
    if (!value) {
      return null;
    }

    return COLORS.find((c) => c.color === value) ?? null;
  });

  function handleSelect(color: Color) {
    setSelectedColor(color);
    onChange?.(color.color);
  }

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          className={cn(
            "relative flex h-[52px] w-full cursor-pointer items-center rounded-lg border border-gray-400 bg-white px-3 text-gray-700 transition-colors duration-300 ease-in-out outline-none focus:border-gray-800",
            error && "!border-red-500",
            className,
          )}
        >
          Cor
          <div className="absolute top-1/2 right-3 -translate-y-1/2">
            {selectedColor ? (
              <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-gray-800" />
            )}
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="grid grid-cols-4 bg-white/80">
          {COLORS.map((color) => (
            <DropdownMenu.Item
              key={color.color}
              onSelect={() => handleSelect(color)}
            >
              <ColorIcon color={color.color} bg={color.bg} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error && <ErrorInputMessage error={error} />}
    </div>
  );
}
