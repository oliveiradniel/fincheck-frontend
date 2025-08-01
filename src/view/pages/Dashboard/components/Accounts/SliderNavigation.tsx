import { useSwiper } from "swiper/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface SliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
  isDisabled: boolean;
}

export function SliderNavigation({
  isBeginning,
  isEnd,
  isDisabled,
}: SliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className="flex text-white">
      <button
        aria-label="Ver a conta bancária anterior"
        type="button"
        disabled={isBeginning || isDisabled}
        onClick={() => swiper.slidePrev()}
        className="cursor-pointer rounded-full py-3 pr-3.5 pl-2.5 transition-colors duration-300 ease-in-out enabled:hover:bg-black/6 disabled:cursor-default disabled:opacity-40"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      <button
        aria-label="Ver a conta bancária posterior"
        type="button"
        disabled={isEnd || isDisabled}
        onClick={() => swiper.slideNext()}
        className="cursor-pointer rounded-full py-3 pr-3.5 pl-2.5 transition-colors duration-300 ease-in-out enabled:hover:bg-black/6 disabled:cursor-default disabled:opacity-40"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
