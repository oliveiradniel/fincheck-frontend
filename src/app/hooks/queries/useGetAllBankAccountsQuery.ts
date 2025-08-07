import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeBankAccountService } from "@/app/factories/makeBankAccountService";
import { sleep } from "@/app/utils/sleep";

export function useGetAllBankAccountsQuery() {
  const { clearSession } = useAuthContext();

  const bankAccountService = makeBankAccountService(clearSession);

  const {
    data = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["bankAccounts"],
    queryFn: async () => {
      await sleep(5000);
      return bankAccountService.getAll();
    },
  });

  return { data, isLoading, isRefetching: isFetching };
}
