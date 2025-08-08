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
    isLoadingAccounts,
    isRefetchingAccounts,
    sliderState,
    setSliderState,
  } = useAccountsController();

  return (
    <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
      {isLoadingAccounts && (
        <strong className="mb-4 text-lg tracking-[-1px] text-white">
          Minhas contas
        </strong>
      )}

      {!isLoadingAccounts && emptyAccounts && <EmptyAccounts />}

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
          {!isLoadingAccounts && hasAccounts && (
            <div
              slot="container-start"
              className="mb-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <strong className="text-lg tracking-[-1px] text-white">
                  Minhas contas
                </strong>

                {isRefetchingAccounts && <Loader className="h-4 w-4" />}
              </div>

              <SliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
                isDisabled={isLoadingAccounts}
              />
            </div>
          )}

          {isLoadingAccounts &&
            [...Array(2)].map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonCard />
              </SwiperSlide>
            ))}

          {!isLoadingAccounts &&
            accounts.map((account) => (
              <SwiperSlide key={account.id}>
                <Card data={account} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
