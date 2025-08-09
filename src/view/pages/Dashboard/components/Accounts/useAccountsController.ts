import { useEffect, useMemo, useState } from "react";

import { useDashboardContext } from "../DashboardContext/useDashboardContext";

import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import { useGetAllBankAccountsQuery } from "@/app/hooks/queries/useGetAllBankAccountsQuery";

export function useAccountsController() {
  const {
    isEditAccountModalOpen,
    areValuesVisible,
    openEditAccountModal,
    closeEditAccountModal,
    onToogleValuesVisibility,
  } = useDashboardContext();

  const windowWidth = useWindowWidth();

  const { bankAccounts, isLoadingBankAccounts, isRefetchingBankAccounts } =
    useGetAllBankAccountsQuery();

  const slidesPerScreen = windowWidth >= 500 ? 2 : 1;

  const isEnd = bankAccounts.length <= slidesPerScreen;

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

  const totalBalance = useMemo(() => {
    return bankAccounts.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);
  }, [bankAccounts]);

  return {
    isEditAccountModalOpen,
    bankAccounts,
    totalBalance,
    hasAccounts: bankAccounts?.length > 0,
    emptyAccounts: bankAccounts.length === 0,
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoadingBankAccounts,
    isRefetchingBankAccounts,
    openEditAccountModal,
    closeEditAccountModal,
    setSliderState,
    onToogleValuesVisibility,
  };
}
