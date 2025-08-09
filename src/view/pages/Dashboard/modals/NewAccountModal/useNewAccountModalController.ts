import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useDashboardContext } from "../../components/DashboardContext/useDashboardContext";
import { useCreateBankAccountMutation } from "@/app/hooks/mutations/useCreateBankAccountMutation";

import { zodResolver } from "@hookform/resolvers/zod";
import { CreateBankAccountSchema } from "@/app/schemas/bankAccount/CreateBankAccountSchema.ts";

import toast from "react-hot-toast";

import { isEmptyObject } from "@/app/utils/isEmptyObject";
import { currencyStringToNumber } from "@/app/utils/currencyStringToNumber";

import type { BankAccountForm } from "@/@types/bankAccount/BankAccount";

export function useNewAccountModalController() {
  const queryClient = useQueryClient();

  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboardContext();

  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<BankAccountForm>({
    resolver: zodResolver(CreateBankAccountSchema),
  });

  const {
    createBankAccount,
    isCreatingBankAccount,
    hasCreateErrorBankAccount,
  } = useCreateBankAccountMutation();

  const handleSubmit = hookFormHandleSubmit(async (bankAccountForm) => {
    if (isCreatingBankAccount) return;

    try {
      const formattedInitialBalance = currencyStringToNumber(
        bankAccountForm.initialBalance,
      );

      await createBankAccount({
        ...bankAccountForm,
        initialBalance: formattedInitialBalance,
      });

      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] });

      closeNewAccountModal();

      toast.success("Conta cadastrada com sucesso!");
      reset();
    } catch {
      toast.error("Ocorreu um erro ao cadastrar sua conta!");
    }
  });

  return {
    control,
    isNewAccountModalOpen,
    formErrors: errors,
    hasFormError: !isEmptyObject(errors),
    isCreatingBankAccount,
    hasCreateErrorBankAccount,
    closeNewAccountModal,
    handleSubmit,
    register,
  };
}
