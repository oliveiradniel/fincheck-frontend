import { useTransactionsController } from "./useTransactionsController";

import { Swiper, SwiperSlide } from "swiper/react";

import { MONTHS } from "@/app/config/constants";

import { SliderNavigation } from "./SliderNavigation";
import { SliderOption } from "./SliderOption";

interface MonthSlidersFilterProps {
  isDisabled: boolean;
}

export function MonthSlidersFilter({ isDisabled }: MonthSlidersFilterProps) {
  const { filters, handleChangeFilters } = useTransactionsController();

  return (
    <Swiper
      role="list"
      aria-live="polite"
      aria-label="Meses disponíveis para filtro"
      spaceBetween={6}
      slidesPerView={3}
      centeredSlides
      initialSlide={filters.month}
      onSlideChange={(swiper) => {
        handleChangeFilters("month")(swiper.realIndex);
      }}
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
