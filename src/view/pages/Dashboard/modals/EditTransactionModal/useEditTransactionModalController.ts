import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useGetAllTransactionCategoriesQuery } from "@/app/hooks/queries/useGetAllTransactionCategoriesQuery";
import { useGetAllBankAccountsQuery } from "@/app/hooks/queries/useGetAllBankAccountsQuery";
import { useUpdateTransactionMutation } from "@/app/hooks/mutations/useUpdateTransactionMutation";

import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionSchema } from "@/app/schemas/transaction/TransactionSchema";

import { AxiosError } from "axios";

import toast from "react-hot-toast";

import { isEmptyObject } from "@/app/utils/isEmptyObject";
import { currencyStringToNumber } from "@/app/utils/currencyStringToNumber";

import type { Option } from "@/view/components/Select";

import type { Transaction } from "@/@entities/Transaction";
import type { TransactionForm } from "@/@types/transaction/Transaction";

export function useEditTransactionModalController(
  transaction: Transaction | null,
  onClose: () => void,
) {
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<TransactionForm>({
    resolver: zodResolver(TransactionSchema),
    defaultValues: {
      bankAccountId: transaction?.bankAccountId,
      transactionCategoryId: transaction?.transactionCategoryId,
      name: transaction?.name,
      value: transaction?.value,
      date: transaction ? new Date(transaction.date) : new Date(),
    },
  });

  const {
    transactionCategories: transactionCategoriesList,
    isLoadingTransactionCategories,
    isRefetchingTransactionCategories,
  } = useGetAllTransactionCategoriesQuery();

  const { bankAccounts, isLoadingBankAccounts, isRefetchingBankAccounts } =
    useGetAllBankAccountsQuery();

  const {
    updateTransaction,
    isUpdatingTransaction,
    hasErrorUpdateTransaction,
  } = useUpdateTransactionMutation();

  const isExpense = transaction?.type === "EXPENSE";

  const title = isExpense ? "Editar Despesa" : "Editar Receita";

  const description = isExpense ? "Editar despesa" : "Editar receita";

  const inputPlaceholder = `Nome da ${isExpense ? "despesa" : "receita"}`;
  const selectPlaceholder = `${isExpense ? "Pagar" : "Receber"} com`;

  const handleSubmit = hookFormHandleSubmit(async (transactionForm) => {
    try {
      await updateTransaction({
        ...transactionForm,
        id: transaction!.id,
        value: currencyStringToNumber(transactionForm.value),
        type: transaction!.type,
        date: transactionForm.date.toISOString(),
      });

      queryClient.invalidateQueries({ queryKey: ["transactions"] });

      onClose();

      toast.success(`${isExpense ? "Despesa" : "Receita"} salva com sucesso!'`);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (
          error.response?.data.message.includes(
            "value must be a positive number",
          )
        ) {
          toast.error(
            `Se quiser zerar sua ${isExpense ? "despesa" : "receita"} é recomendado apagá-la!`,
          );
          return;
        }
      }

      toast.error(
        `Ocorreu um erro ao salvar sua ${isExpense ? "despesa" : "receita"}!`,
      );
    }
  });

  const transactionCategories = useMemo(() => {
    return transactionCategoriesList.filter(
      (category) => category.type === transaction?.type,
    );
  }, [transactionCategoriesList, transaction?.type]);

  const transactionCategoriesMap: Option[] = transactionCategories.map(
    ({ id, name }) => ({ value: id, label: name }),
  );

  const accountsMap: Option[] = bankAccounts.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return {
    accountsMap,
    isExpense,
    title,
    description,
    inputPlaceholder,
    selectPlaceholder,
    control,
    transactionCategoriesMap,
    bankAccounts,
    formErrors: errors,
    isUpdatingTransaction,
    hasFormError: !isEmptyObject(errors),
    hasErrorUpdateTransaction,
    hasUpdateErrorTransaction: false,
    isLoadingTransactionCategories,
    isRefetchingTransactionCategories,
    isLoadingBankAccounts,
    isRefetchingBankAccounts,
    handleSubmit,
    register,
  };
}
