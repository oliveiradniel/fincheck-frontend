import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeTransactionService } from "@/app/factories/makeTransactionService";

import type { TransactionsFilters } from "@/@types/transaction/Transaction";

export function useGetAllTransactionsQuery(filters: TransactionsFilters) {
  const { clearSession } = useAuthContext();

  const transactionService = makeTransactionService(clearSession);

  const {
    data = [],
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => {
      return transactionService.getAll(filters);
    },
  });
  return {
    transactions: data,
    isLoadingTransactions: isLoading,
    isRefetchingTransactions: isRefetching,
    refetchTransactions: refetch,
  };
}
