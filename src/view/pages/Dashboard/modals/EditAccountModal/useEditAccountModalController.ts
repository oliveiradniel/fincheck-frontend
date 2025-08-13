import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useDashboardContext } from "../../components/DashboardContext/useDashboardContext";
import { useUpdateBankAccountMutation } from "@/app/hooks/mutations/useUpdateBankAccountMutation";
import { useDeleteBankAccountMutation } from "@/app/hooks/mutations/useDeleteBankAccountMutation";

import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateBankAccountSchema } from "@/app/schemas/bankAccount/UpdateBankAccountSchema";

import toast from "react-hot-toast";

import { isEmptyObject } from "@/app/utils/isEmptyObject";
import { currencyStringToNumber } from "@/app/utils/currencyStringToNumber";

import type { BankAccountForm } from "@/@types/bankAccount/BankAccount";

export function useEditAccountModalController() {
  const queryClient = useQueryClient();

  const { isEditAccountModalOpen, accountBeingEdited, closeEditAccountModal } =
    useDashboardContext();

  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<BankAccountForm>({
    resolver: zodResolver(UpdateBankAccountSchema),
    defaultValues: {
      initialBalance: accountBeingEdited?.initialBalance,
      name: accountBeingEdited?.name,
      type: accountBeingEdited?.type,
      color: accountBeingEdited?.color,
    },
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    updateBankAccount,
    isUpdatingBankAccount,
    hasErrorUpdateBankAccount,
  } = useUpdateBankAccountMutation();

  const {
    deleteBankAccount,
    isDeletingBankAccount,
    hasErrorDeleteBankAccount,
  } = useDeleteBankAccountMutation();

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  const handleSubmit = hookFormHandleSubmit(async (bankAccountForm) => {
    if (isUpdatingBankAccount) return;

    const formattedInitialBalance = currencyStringToNumber(
      bankAccountForm.initialBalance,
    );

    try {
      await updateBankAccount({
        ...bankAccountForm,
        id: accountBeingEdited!.id,
        initialBalance: formattedInitialBalance,
      });

      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] });

      closeEditAccountModal();

      toast.success("Conta salva com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao salvar sua conta!");
    }
  });

  async function handleDeleteAccount() {
    try {
      await deleteBankAccount(accountBeingEdited!.id);

      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] });

      closeEditAccountModal();

      toast.success("Conta excluída com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao excluir sua conta!.");
    }
  }

  return {
    control,
    isEditAccountModalOpen,
    isDeleteModalOpen,
    formErrors: errors,
    isUpdatingBankAccount,
    isDeletingBankAccount,
    hasFormError: !isEmptyObject(errors),
    hasErrorUpdateBankAccount,
    hasErrorDeleteBankAccount,
    closeEditAccountModal,
    handleSubmit,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount,
    register,
  };
}
