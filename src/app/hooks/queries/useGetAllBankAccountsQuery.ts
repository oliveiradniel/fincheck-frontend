import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeBankAccountService } from "@/app/factories/makeBankAccountService";

export function useGetAllBankAccountsQuery() {
  const { clearSession } = useAuthContext();

  const bankAccountService = makeBankAccountService(clearSession);

  const {
    data = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["bankAccounts"],
    queryFn: () => {
      return bankAccountService.getAll();
    },
  });

  return {
    bankAccounts: data,
    isLoadingBankAccounts: isLoading,
    isRefetchingBankAccounts: isFetching,
  };
}
