import { useMutation } from "@tanstack/react-query";

import { makeBankAccountService } from "@/app/factories/makeBankAccountService";

import type { BankAccountId } from "@/@types/bankAccount/BankAccount";

export function useDeleteBankAccountMutation() {
  const bankAccountService = makeBankAccountService();

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
