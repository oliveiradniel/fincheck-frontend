import { useSwiper } from "swiper/react";

import { cn } from "@/app/utils/cn";

interface SliderOptionProps {
  index: number;
  month: string;
  isActive: boolean;
  isDisabled: boolean;
}

export function SliderOption({
  index,
  month,
  isActive,
  isDisabled,
}: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={() => swiper.slideTo(index)}
      className={cn(
        "flex h-12 w-full items-center justify-center rounded-full text-sm font-medium tracking-[-0.5px] text-gray-800 transition-all duration-300 ease-in-out enabled:cursor-pointer",
        isActive && "cursor-default bg-white",
        !isActive && !isDisabled && "hover:bg-white/40",
        isDisabled && "opacity-60",
      )}
    >
      {month}
    </button>
  );
}
