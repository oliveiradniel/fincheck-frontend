import { useState } from "react";

import { useDashboardContext } from "../DashboardContext/useDashboardContext";
import { useGetAllTransactionsQuery } from "@/app/hooks/queries/useGetAllTransactionsQuery";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboardContext();

  const [isFilteredModalOpen, setIsFilteredModalOpen] = useState(false);

  const { transactions, isLoadingTransactions, isRefetchingTransactions } =
    useGetAllTransactionsQuery({ month: 7, year: 2025 });

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
    isLoadingTransactions,
    isRefetchingTransactions,
    isFilteredModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
