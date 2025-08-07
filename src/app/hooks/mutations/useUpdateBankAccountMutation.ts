import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeBankAccountService } from "@/app/factories/makeBankAccountService";

import type { BankAccountUpdate } from "@/@types/bankAccount/BankAccount";

export function useUpdateBankAccountMutation() {
  const { clearSession } = useAuthContext();

  const bankAccountService = makeBankAccountService(clearSession);

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (bankAccount: BankAccountUpdate) => {
      return bankAccountService.update(bankAccount);
    },
  });

  return {
    mutateAsync,
    isLoading: isPending,
    isError,
  };
}
