import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeBankAccountService } from "@/app/factories/makeBankAccountService";

import type { BankAccountCreate } from "@/@types/bankAccount/BankAccount";

export function useCreateBankAccountMutation() {
  const { clearSession } = useAuthContext();

  const bankAccountService = makeBankAccountService(clearSession);

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: (bankAccount: BankAccountCreate) => {
      return bankAccountService.create(bankAccount);
    },
  });

  return {
    createBankAccount: mutateAsync,
    isCreatingBankAccount: isPending,
    hasCreateErrorBankAccount: isError,
  };
}
