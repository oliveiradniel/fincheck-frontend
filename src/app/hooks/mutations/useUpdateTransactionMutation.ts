import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../useAuthContext";

import { makeTransactionService } from "@/app/factories/makeTransactionService";

import type { TranasactionUpdate } from "@/@types/transaction/Transaction";

export function useUpdateTransactionMutation() {
  const { clearSession } = useAuthContext();

  const transactionService = makeTransactionService(clearSession);

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: (transactionData: TranasactionUpdate) => {
      return transactionService.update(transactionData);
    },
  });

  return {
    updateTransaction: mutateAsync,
    isUpdatingTransaction: isPending,
    hasErrorUpdateTransaction: isError,
  };
}
