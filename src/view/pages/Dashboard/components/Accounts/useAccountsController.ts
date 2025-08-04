import { useEffect, useState } from "react";

import { useDashboardContext } from "../DashboardContext/useDashboardContext";

import { useWindowWidth } from "@/app/hooks/useWindowWidth";

export function useAccountsController() {
  const { areValuesVisible, onToogleValuesVisibility, openNewAccountModal } =
    useDashboardContext();

  const windowWidth = useWindowWidth();

  const accounts = [];

  const slidesPerScreen = windowWidth >= 500 ? 2 : 1;

  const isEnd = accounts.length <= slidesPerScreen;

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd,
  });

  useEffect(() => {
    setSliderState((prevState) => {
      return {
        isBeginning: prevState.isBeginning,
        isEnd,
      };
    });
  }, [isEnd]);

  return {
    accounts,
    hasAccounts: accounts.length > 0,
    emptyAccounts: accounts.length === 0,
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoading: false,
    setSliderState,
    onToogleValuesVisibility,
    openNewAccountModal,
  };
}
