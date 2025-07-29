import { useSwiper } from "swiper/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-100 mask-r-from-50% transition-all duration-300 ease-in-out hover:-translate-x-1 hover:scale-106"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="absolute top-1/2 right-0 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-100 mask-l-from-50% transition-all duration-300 ease-in-out hover:translate-x-1 hover:scale-106"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </>
  );
}
