import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeBankAccountService } from "@/app/factories/makeBankAccountService";

import type { CreateBankAccount } from "@/@types/bankAccount/BankAccount";

export function useCreateBankAccountMutation() {
  const { clearSession } = useAuthContext();

  const bankAccountService = makeBankAccountService(clearSession);

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (bankAccountData: CreateBankAccount) => {
      bankAccountService.create(bankAccountData);
    },
  });

  return {
    mutateAsync,
    isLoading: isPending,
    isError,
  };
}
