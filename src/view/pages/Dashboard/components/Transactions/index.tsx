import { useTransactionsController } from "./useTransactionsController";

import { Swiper, SwiperSlide } from "swiper/react";

import { FilterIcon } from "@/view/components/icons/FilterIcon";
import { TransactionsIcon } from "@/view/components/icons/TransactionsIcon";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/app/utils/cn";
import { formatCurrency } from "@/app/utils/formatCurrency";

import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";

import { MONTHS } from "@/app/config/constants";

import { CategoryIcon } from "@/view/components/icons/categories/CategoryIcon";

export function Transactions() {
  const { areValuesVisible } = useTransactionsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
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

        <div className="relative mt-6 p-3">
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

      <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
        {[...Array(10)].map(() => (
          <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
            <div className="flex flex-1 items-center gap-3">
              <CategoryIcon type="income" />

              <div>
                <strong className="block tracking-[-0.5px]">Almoço</strong>
                <span className="text-sm text-gray-600">04/06/2025</span>
              </div>
            </div>

            <span
              className={cn(
                "font-medium tracking-[-0.5px] text-green-800 transition-all duration-300 ease-in-out",
                !areValuesVisible && "blur-sm",
              )}
            >
              {formatCurrency(123)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
