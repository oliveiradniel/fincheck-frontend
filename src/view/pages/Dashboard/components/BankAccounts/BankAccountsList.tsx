import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import { useBankAccountsController } from "./useBankAccountsController";

import { Swiper, SwiperSlide } from "swiper/react";

import { Loader } from "@/view/components/Loader";
import { EmptyBankAccounts } from "./EmptyBankAccounts";
import { SkeletonCard } from "./SkeletonCard";

import { SliderNavigation } from "./SliderNavigation";
import { Card } from "./Card";

export function BankAccountsList() {
  const windowWidth = useWindowWidth();

  const {
    bankAccounts,
    hasBankAccounts,
    emptyBankAccounts,
    isLoadingBankAccounts,
    isRefetchingBankAccounts,
    sliderState,
    setSliderState,
  } = useBankAccountsController();

  return (
    <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
      {isLoadingBankAccounts && (
        <strong className="mb-4 text-lg tracking-[-1px] text-white">
          Minhas contas
        </strong>
      )}

      {!isLoadingBankAccounts && emptyBankAccounts && <EmptyBankAccounts />}

      <div>
        <Swiper
          role={hasBankAccounts ? "list" : undefined}
          aria-label={
            hasBankAccounts
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
          {!isLoadingBankAccounts && hasBankAccounts && (
            <div
              slot="container-start"
              className="mb-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <strong className="text-lg tracking-[-1px] text-white">
                  Minhas contas
                </strong>

                {isRefetchingBankAccounts && <Loader className="h-4 w-4" />}
              </div>

              <SliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
                isDisabled={isLoadingBankAccounts}
              />
            </div>
          )}

          {isLoadingBankAccounts &&
            [...Array(2)].map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonCard />
              </SwiperSlide>
            ))}

          {!isLoadingBankAccounts &&
            bankAccounts.map((account) => (
              <SwiperSlide key={account.id}>
                <Card data={account} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
