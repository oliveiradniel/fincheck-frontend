import { useEffect, useState } from "react";

import { useDashboardContext } from "../DashboardContext/useDashboardContext";
import { useGetAllTransactionsQuery } from "@/app/hooks/queries/useGetAllTransactionsQuery";

import type { TransactionsFilters } from "@/@types/transaction/Transaction";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboardContext();

  const [isFilteredModalOpen, setIsFilteredModalOpen] = useState(false);
  const [filters, setFilters] = useState<TransactionsFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const {
    transactions,
    isLoadingTransactions,
    isRefetchingTransactions,
    refetchTransactions,
  } = useGetAllTransactionsQuery(filters);

  function handleChangeFilters<TFilter extends keyof TransactionsFilters>(
    filter: TFilter,
  ) {
    return (value: TransactionsFilters[TFilter]) => {
      if (value === filters[filter]) return;

      setFilters((prevState) => ({
        ...prevState,
        [filter]: value,
      }));
    };
  }

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions]);

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
    filters,
    areValuesVisible,
    isLoadingTransactions,
    isRefetchingTransactions,
    isFilteredModalOpen,
    handleChangeFilters,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
