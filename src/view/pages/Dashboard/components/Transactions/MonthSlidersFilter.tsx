import { Swiper, SwiperSlide } from "swiper/react";

import { MONTHS } from "@/app/config/constants";

import { SliderNavigation } from "./SliderNavigation";
import { SliderOption } from "./SliderOption";

interface MonthSlidersFilterProps {
  isDisabled: boolean;
}

export function MonthSlidersFilter({ isDisabled }: MonthSlidersFilterProps) {
  return (
    <Swiper
      role="list"
      aria-live="polite"
      aria-label="Meses disponíveis para filtro"
      spaceBetween={6}
      slidesPerView={3}
      centeredSlides
    >
      <SliderNavigation isDisabled={isDisabled} />
      {MONTHS.map((month, index) => (
        <SwiperSlide aria-label={month} key={month}>
          {({ isActive }) => (
            <SliderOption
              index={index}
              month={month}
              isActive={isActive}
              isDisabled={isDisabled}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
