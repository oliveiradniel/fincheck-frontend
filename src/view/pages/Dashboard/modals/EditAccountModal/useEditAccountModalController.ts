import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useDashboardContext } from "../../components/DashboardContext/useDashboardContext";
import { useUpdateBankAccountMutation } from "@/app/hooks/mutations/useUpdateBankAccountMutation";

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

  const { mutateAsync, isLoading, isError } = useUpdateBankAccountMutation();

  const handleSubmit = hookFormHandleSubmit(async (bankAccountForm) => {
    if (isLoading) return;

    const formattedInitialBalance = currencyStringToNumber(
      bankAccountForm.initialBalance,
    );

    try {
      await mutateAsync({
        ...bankAccountForm,
        initialBalance: formattedInitialBalance,
        id: accountBeingEdited!.id,
      });

      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] });
      toast.success("Conta salva com sucesso!");
      closeEditAccountModal();
    } catch {
      toast.error("Ocorreu um erro ao salvar sua conta!");
    }
  });

  return {
    control,
    isEditAccountModalOpen,
    errors,
    hasFormError: !isEmptyObject(errors),
    hasRequestError: isError,
    isLoading,
    closeEditAccountModal,
    handleSubmit,
    register,
  };
}
