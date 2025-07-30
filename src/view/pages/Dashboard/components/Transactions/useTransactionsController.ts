import { useDashboardContext } from "../DashboardContext/useDashboardContext";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboardContext();

  const transactions = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return {
    transactions,
    hasTransactions: transactions.length > 0,
    emptyTransactions: transactions.length === 0,
    areValuesVisible,
    isLoading: false,
  };
}
