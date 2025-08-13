import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDashboardContext } from "../../components/DashboardContext/useDashboardContext";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateTransactionMutation } from "@/app/hooks/mutations/useCreateTransactionMutation";
import { useGetAllTransactionCategoriesQuery } from "@/app/hooks/queries/useGetAllTransactionCategoriesQuery";
import { useGetAllBankAccountsQuery } from "@/app/hooks/queries/useGetAllBankAccountsQuery";

import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionSchema } from "@/app/schemas/transaction/TransactionSchema";

import toast from "react-hot-toast";

import { isEmptyObject } from "@/app/utils/isEmptyObject";
import { currencyStringToNumber } from "@/app/utils/currencyStringToNumber";

import type { TransactionForm } from "@/@types/transaction/Transaction";
import type { Option } from "@/view/components/Select";

export function useNewTransactionModalController() {
  const queryClient = useQueryClient();

  const {
    isNewTransactionModalOpen,
    newTransactionType,
    closeNewTransactionModal,
  } = useDashboardContext();

  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TransactionForm>({
    resolver: zodResolver(TransactionSchema),
  });

  const {
    createTransaction,
    isCreatingTransaction,
    hasCreateErrorTransaction,
  } = useCreateTransactionMutation();

  const {
    transactionCategories: transactionCategoriesList,
    isLoadingTransactionCategories,
    isRefetchingTransactionCategories,
  } = useGetAllTransactionCategoriesQuery();

  const { bankAccounts, isLoadingBankAccounts, isRefetchingBankAccounts } =
    useGetAllBankAccountsQuery();

  const handleSubmit = hookFormHandleSubmit(async (transactionData) => {
    if (isCreatingTransaction) return;

    try {
      const formattedValue = currencyStringToNumber(transactionData.value);

      await createTransaction({
        ...transactionData,
        value: formattedValue,
        date: transactionData.date.toISOString(),
        type: newTransactionType!,
      });

      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] });

      closeNewTransactionModal();

      toast.success(
        `${isExpense ? "Despesa" : "Receita"} cadastrada com sucesso!'`,
      );
      reset();
    } catch {
      toast.error(
        `Ocorreu um erro ao cadastrar sua ${isExpense ? "despesa" : "receita"}!`,
      );
    }
  });

  const isExpense = newTransactionType === "EXPENSE";

  const title = isExpense ? "Nova Despesa" : "Nova Receita";

  const description = isExpense
    ? "Criar uma nova despesa"
    : "Criar uma nova receita";

  const inputPlaceholder = `Nome da ${isExpense ? "despesa" : "receita"}`;
  const selectPlaceholder = `${isExpense ? "Pagar" : "Receber"} com`;

  const buttonLabel = `${isExpense ? "Cadastrar despesa" : "Cadastrar receita"}`;

  const transactionCategories = useMemo(() => {
    return transactionCategoriesList.filter(
      (category) => category.type === newTransactionType,
    );
  }, [transactionCategoriesList, newTransactionType]);

  const transactionCategoriesMap: Option[] = transactionCategories.map(
    ({ id, name }) => ({ value: id, label: name }),
  );

  const bankAccountsMap: Option[] = bankAccounts.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return {
    title,
    description,
    inputPlaceholder,
    selectPlaceholder,
    buttonLabel,
    bankAccountsMap,
    isExpense,
    control,
    transactionCategoriesMap,
    bankAccounts,
    isNewTransactionModalOpen,
    newTransactionType,
    formErrors: errors,
    hasFormErrors: !isEmptyObject(errors),
    isCreatingTransaction,
    hasCreateErrorTransaction,
    isLoadingTransactionCategories,
    isRefetchingTransactionCategories,
    isLoadingBankAccounts,
    isRefetchingBankAccounts,
    closeNewTransactionModal,
    handleSubmit,
    register,
  };
}
