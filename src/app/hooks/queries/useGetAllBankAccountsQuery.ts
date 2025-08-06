import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeBankAccountService } from "@/app/factories/makeBankAccountService";

export function useGetAllBankAccountsQuery() {
  const { clearSession } = useAuthContext();

  const bankAccountService = makeBankAccountService(clearSession);

  const { data = [], isFetching } = useQuery({
    queryKey: ["bank-accounts"],
    queryFn: async () => {
      return bankAccountService.getAll();
    },
  });

  return { data, isLoading: isFetching };
}
