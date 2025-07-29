import { useSwiper } from "swiper/react";

import { cn } from "@/app/utils/cn";

interface SliderOptionProps {
  index: number;
  isActive: boolean;
  month: string;
}

export function SliderOption({ isActive, month, index }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      onClick={() => swiper.slideTo(index)}
      className={cn(
        "flex h-12 w-full cursor-pointer items-center justify-center rounded-full text-sm font-medium tracking-[-0.5px] text-gray-800 transition-colors duration-300 ease-in-out",
        isActive && "bg-white",
      )}
    >
      {month}
    </button>
  );
}
