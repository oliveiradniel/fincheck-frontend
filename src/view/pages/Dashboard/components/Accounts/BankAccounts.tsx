import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import { useAccountsController } from "./useAccountsController";

import { Swiper, SwiperSlide } from "swiper/react";

import { Loader } from "@/view/components/Loader";
import { EmptyAccounts } from "./EmptyAccounts";
import { SkeletonCard } from "./SkeletonCard";

import { SliderNavigation } from "./SliderNavigation";
import { Card } from "./Card";

export function BankAccounts() {
  const windowWidth = useWindowWidth();

  const {
    accounts,
    hasAccounts,
    emptyAccounts,
    isLoading,
    isRefetching,
    sliderState,
    setSliderState,
  } = useAccountsController();

  return (
    <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
      {isLoading && (
        <strong className="mb-4 text-lg tracking-[-1px] text-white">
          Minhas contas
        </strong>
      )}

      {!isLoading && emptyAccounts && <EmptyAccounts />}

      <div>
        <Swiper
          role={hasAccounts ? "list" : undefined}
          aria-label={
            hasAccounts
              ? "Suas contas bancárias cadastradas"
              : "Não há contas bancárias"
          }
          spaceBetween={16}
          slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
          onSlideChange={(swiper) =>
            setSliderState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd,
            })
          }
        >
          {!isLoading && hasAccounts && (
            <div
              slot="container-start"
              className="mb-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <strong className="text-lg tracking-[-1px] text-white">
                  Minhas contas
                </strong>

                {isRefetching && <Loader className="h-4 w-4" />}
              </div>

              <SliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
                isDisabled={isLoading}
              />
            </div>
          )}

          {isLoading &&
            [...Array(2)].map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonCard />
              </SwiperSlide>
            ))}

          {!isLoading &&
            accounts.map(({ initialBalance, name, type, color }, index) => (
              <SwiperSlide key={index}>
                <Card
                  color={color}
                  name={name}
                  balance={initialBalance}
                  type={type}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
