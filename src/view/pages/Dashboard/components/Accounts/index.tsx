import { useState } from "react";

import { useAccountsController } from "./useAccountsController";

import { cn } from "@/app/utils/cn";
import { formatCurrency } from "@/app/utils/formatCurrency";

import { Swiper, SwiperSlide } from "swiper/react";

import { EyeIcon } from "@/view/components/icons/EyeIcon";

import { Card } from "./Card";
import { SliderNavigation } from "./SliderNavigation";

export function Accounts() {
  const { sliderState, setSliderState, windowWidth } = useAccountsController();

  const [showSald, setShowSald] = useState(true);

  function handleToggleVisibilitySald() {
    setShowSald((prevState) => !prevState);
  }

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-moss-green px-4 py-8 md:p-10">
      <div className="flex flex-col text-white">
        <span className="tracking-[-0.5px]">Saldo total</span>

        <div className="flex gap-2">
          <strong
            className={cn(
              "text-2xl tracking-[-1px] transition-all duration-300 ease-in-out",
              !showSald && "blur-sm",
            )}
          >
            {formatCurrency(1000)}
          </strong>

          <button
            type="button"
            onClick={handleToggleVisibilitySald}
            className="flex h-8 w-8 cursor-pointer items-center justify-center"
          >
            <EyeIcon open={showSald} />
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
            onSlideChange={(swiper) =>
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd,
              })
            }
          >
            <div
              slot="container-start"
              className="mb-4 flex items-center justify-between"
            >
              <strong className="text-lg tracking-[-1px] text-white">
                Minhas contas
              </strong>

              <SliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </div>

            <SwiperSlide>
              <Card
                color="#7950f2"
                name="NuBank"
                balance={1000.23}
                type="CASH"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                color="#333"
                name="XP"
                balance={1000.23}
                type="INVESTMENT"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                color="#0f0"
                name="Carteira"
                balance={1000.23}
                type="CHECKING"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
