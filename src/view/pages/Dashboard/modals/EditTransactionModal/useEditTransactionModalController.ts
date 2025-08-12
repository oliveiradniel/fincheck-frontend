import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useGetAllTransactionCategoriesQuery } from "@/app/hooks/queries/useGetAllTransactionCategoriesQuery";
import { useGetAllBankAccountsQuery } from "@/app/hooks/queries/useGetAllBankAccountsQuery";

import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionSchema } from "@/app/schemas/transaction/TransactionSchema";

import { isEmptyObject } from "@/app/utils/isEmptyObject";

import type { Option } from "@/view/components/Select";

import type { Transaction } from "@/@entities/Transaction";
import type { TransactionForm } from "@/@types/transaction/Transaction";

export function useEditTransactionModalController(
  transaction: Transaction | null,
) {
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

  console.log(transaction);

  const {
    transactionCategories: transactionCategoriesList,
    isLoadingTransactionCategories,
    isRefetchingTransactionCategories,
  } = useGetAllTransactionCategoriesQuery();

  const { bankAccounts, isLoadingBankAccounts, isRefetchingBankAccounts } =
    useGetAllBankAccountsQuery();

  const isExpense = transaction?.type === "EXPENSE";

  const title = isExpense ? "Editar Despesa" : "Editar Receita";

  const description = isExpense ? "Editar despesa" : "Editar receita";

  const inputPlaceholder = `Nome da ${isExpense ? "despesa" : "receita"}`;
  const selectPlaceholder = `${isExpense ? "Pagar" : "Receber"} com`;

  const handleSubmit = hookFormHandleSubmit(async (transactionData) => {
    console.log(transactionData);
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
    hasFormErrors: !isEmptyObject(errors),
    isUpdatingTransaction: false,
    hasUpdateErrorTransaction: false,
    isLoadingTransactionCategories,
    isRefetchingTransactionCategories,
    isLoadingBankAccounts,
    isRefetchingBankAccounts,
    handleSubmit,
    register,
  };
}
