import { useSwiper } from "swiper/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface SliderNavigationProps {
  isDisabled: boolean;
}

export function SliderNavigation({ isDisabled }: SliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <>
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => swiper.slidePrev()}
        className="absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 mask-r-from-50% transition-all duration-300 ease-in-out enabled:cursor-pointer enabled:hover:-translate-x-1 enabled:hover:scale-106 disabled:opacity-60"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => swiper.slideNext()}
        className="absolute top-1/2 right-0 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 mask-l-from-50% transition-all duration-300 ease-in-out enabled:cursor-pointer enabled:hover:translate-x-1 enabled:hover:scale-106 disabled:opacity-60"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </>
  );
}
