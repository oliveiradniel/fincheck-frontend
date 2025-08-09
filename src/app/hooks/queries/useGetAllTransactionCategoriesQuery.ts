import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeTransactionCategoryService } from "@/app/factories/makeTransactionCategoryService";

export function useGetAllTransactionCategoriesQuery() {
  const { clearSession } = useAuthContext();

  const transactionCategoryService =
    makeTransactionCategoryService(clearSession);

  const {
    data = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["transactionCategories"],
    queryFn: () => {
      return transactionCategoryService.getAll();
    },
  });

  return {
    transactionCategories: data,
    isLoadingTransactionCategories: isLoading,
    isRefetchingTransactionCategories: isFetching,
  };
}
