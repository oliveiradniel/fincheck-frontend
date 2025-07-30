import { useDashboardContext } from "../DashboardContext/useDashboardContext";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboardContext();

  return {
    transactions: [],
    areValuesVisible,
    isLoading: false,
  };
}
