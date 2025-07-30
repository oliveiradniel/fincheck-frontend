import { useAccountsController } from "./useAccountsController";

import { cn } from "@/app/utils/cn";
import { formatCurrency } from "@/app/utils/formatCurrency";

import { Swiper, SwiperSlide } from "swiper/react";

import { EyeIcon } from "@/view/components/icons/EyeIcon";

import { SkeletonCard } from "./SkeletonCard";
import { Loader } from "@/view/components/Loader";
import { EmptyAccounts } from "./EmptyAccounts";

import { Card } from "./Card";
import { SliderNavigation } from "./SliderNavigation";

export function Accounts() {
  const {
    accounts,
    hasAccounts,
    emptyAccounts,
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoading,
    setSliderState,
    onToogleValuesVisibility,
  } = useAccountsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-moss-green px-4 py-8 md:p-10">
      <div className="flex flex-col text-white">
        <span className="tracking-[-0.5px]">Saldo total</span>

        <div
          role="region"
          aria-labelledby="sald"
          className={cn("flex items-center gap-2", isLoading && "gap-4")}
        >
          <strong
            id="sald"
            className={cn(
              "text-2xl tracking-[-1px] transition-all duration-300 ease-in-out",
              (!areValuesVisible || isLoading) && "blur-sm",
            )}
          >
            {isLoading ? "-------" : formatCurrency(1000)}
          </strong>

          {isLoading && <Loader className={"h-4 w-4"} />}

          {!isLoading && (
            <button
              aria-expanded={areValuesVisible}
              aria-label={
                areValuesVisible
                  ? "Esconder valores numéricos"
                  : "Mostrar valores numéricos"
              }
              type="button"
              disabled={isLoading}
              onClick={onToogleValuesVisibility}
              className="flex h-8 w-8 animate-fade-in cursor-pointer items-center justify-center disabled:cursor-default"
            >
              <EyeIcon open={!areValuesVisible} />
            </button>
          )}
        </div>
      </div>

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
                <strong className="text-lg tracking-[-1px] text-white">
                  Minhas contas
                </strong>

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
              accounts.map((_, index) => (
                <SwiperSlide key={index}>
                  <Card
                    color="#0f0"
                    name="Carteira"
                    balance={1000.23}
                    type="CHECKING"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
