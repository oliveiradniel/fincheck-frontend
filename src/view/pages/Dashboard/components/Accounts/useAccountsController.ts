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

  const { accounts, isLoadingAccounts, isRefetchingAccounts } =
    useGetAllBankAccountsQuery();

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
        isEnd: isEnd,
      };
    });
  }, [isEnd]);

  const totalBalance = useMemo(() => {
    if (!accounts) return 0;

    return accounts.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);
  }, [accounts]);

  return {
    isEditAccountModalOpen,
    accounts: accounts,
    totalBalance,
    hasAccounts: accounts?.length > 0,
    emptyAccounts: accounts.length === 0,
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoadingAccounts,
    isRefetchingAccounts,
    openEditAccountModal,
    closeEditAccountModal,
    setSliderState,
    onToogleValuesVisibility,
  };
}
