import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "@/app/contexts/auth/useAuthContext";

import { makeTransactionService } from "@/app/factories/makeTransactionService";

import type { TransactionCreate } from "@/@types/transaction/Transaction";

export function useCreateTransactionMutation() {
  const { clearSession } = useAuthContext();

  const transactionService = makeTransactionService(clearSession);

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: (transactionCreate: TransactionCreate) => {
      return transactionService.create(transactionCreate);
    },
  });

  return {
    createTransaction: mutateAsync,
    isCreatingTransaction: isPending,
    hasCreateErrorTransaction: isError,
  };
}
