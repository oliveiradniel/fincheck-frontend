import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeTransactionService } from "@/app/factories/makeTransactionService";

import type { TransactionId } from "@/@types/transaction/Transaction";

export function useDeleteTransactionMutation() {
  const { clearSession } = useAuthContext();

  const transactionService = makeTransactionService(clearSession);

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (transactionId: TransactionId) => {
      return transactionService.delete(transactionId);
    },
  });

  return {
    deleteTransaction: mutateAsync,
    isDeletingTransaction: isPending,
    hasErrorDeleteTransaction: isError,
  };
}
