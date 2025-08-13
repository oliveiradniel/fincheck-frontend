import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "@/app/contexts/auth/useAuthContext";

import { makeBankAccountService } from "@/app/factories/makeBankAccountService";

import type { BankAccountId } from "@/@types/bankAccount/BankAccount";

export function useDeleteBankAccountMutation() {
  const { clearSession } = useAuthContext();

  const bankAccountService = makeBankAccountService(clearSession);

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (bankAccountId: BankAccountId) => {
      return bankAccountService.delete(bankAccountId);
    },
  });

  return {
    deleteBankAccount: mutateAsync,
    isDeletingBankAccount: isPending,
    hasErrorDeleteBankAccount: isError,
  };
}
