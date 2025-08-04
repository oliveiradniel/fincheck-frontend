import { useState } from "react";

import { useDashboardContext } from "../DashboardContext/useDashboardContext";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboardContext();

  const [isFilteredModalOpen, setIsFilteredModalOpen] = useState(false);

  const transactions = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  function handleOpenFiltersModal() {
    setIsFilteredModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFilteredModalOpen(false);
  }

  return {
    transactions,
    hasTransactions: transactions.length > 0,
    emptyTransactions: transactions.length === 0,
    areValuesVisible,
    isLoading: false,
    isFilteredModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
