import { useState } from "react";

import { useDashboardContext } from "../DashboardContext/useDashboardContext";

import { useWindowWidth } from "@/app/hooks/useWindowWidth";

export function useAccountsController() {
  const { areValuesVisible, onToogleValuesVisibility } = useDashboardContext();

  const windowWidth = useWindowWidth();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoading: false,
    setSliderState,
    onToogleValuesVisibility,
    accounts: [],
  };
}
