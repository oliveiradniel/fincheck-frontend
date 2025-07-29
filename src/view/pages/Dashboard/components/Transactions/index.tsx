import { Swiper, SwiperSlide } from "swiper/react";

import { FilterIcon } from "@/view/components/icons/FilterIcon";
import { TransactionsIcon } from "@/view/components/icons/TransactionsIcon";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { MONTHS } from "@/app/config/constants";

import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";

export function Transactions() {
  return (
    <div className="h-full w-full rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      <header>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2"
          >
            <TransactionsIcon />
            <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button type="button">
            <FilterIcon />
          </button>
        </div>

        <div className="relative mt-6">
          <Swiper spaceBetween={6} slidesPerView={3} centeredSlides>
            <SliderNavigation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    index={index}
                    isActive={isActive}
                    month={month}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4">Conteúdo</div>
    </div>
  );
}
