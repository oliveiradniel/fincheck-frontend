import { useState } from "react";

import { useWindowWidth } from "@/app/hooks/useWindowWidth";

export function useTransactionsController() {
  const windowWidth = useWindowWidth();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
  };
}
