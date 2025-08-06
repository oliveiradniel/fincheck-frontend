import { useEffect, useState } from "react";

import { useDashboardContext } from "../DashboardContext/useDashboardContext";

import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import { useGetAllBankAccountsQuery } from "@/app/hooks/queries/useGetAllBankAccountsQuery";

export function useAccountsController() {
  const { areValuesVisible, onToogleValuesVisibility, openNewAccountModal } =
    useDashboardContext();

  const windowWidth = useWindowWidth();

  const { data, isLoading, isRefetching } = useGetAllBankAccountsQuery();

  const slidesPerScreen = windowWidth >= 500 ? 2 : 1;

  const isEnd = data.length <= slidesPerScreen;

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd,
  });

  useEffect(() => {
    setSliderState((prevState) => {
      return {
        isBeginning: prevState.isBeginning,
        isEnd: isEnd,
      };
    });
  }, [isEnd]);

  return {
    accounts: data,
    hasAccounts: data?.length > 0,
    emptyAccounts: data.length === 0,
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoading,
    isRefetching,
    setSliderState,
    onToogleValuesVisibility,
    openNewAccountModal,
  };
}
