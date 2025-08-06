import { useForm } from "react-hook-form";
import { useDashboardContext } from "../../components/DashboardContext/useDashboardContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { CreateBankAccountSchema } from "@/app/schemas/bankAccount/CreateBankAccountSchema.ts";

import { isEmptyObject } from "@/app/utils/isEmptyObject";

import type { BankAccountData } from "@/@types/bankAccount/BankAccount";
import { useCreateBankAccountMutation } from "@/app/hooks/mutations/useCreateBankAccountMutation";
import toast from "react-hot-toast";
import { currencyStringToNumber } from "@/app/utils/currencyStringToNumber";

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboardContext();

  const {
    control,
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<BankAccountData>({
    resolver: zodResolver(CreateBankAccountSchema),
  });

  const { mutateAsync, isLoading, isError } = useCreateBankAccountMutation();

  const handleSubmit = hookFormHandleSubmit(async (bankAccountData) => {
    if (isLoading) return;

    const formattedInitialBalance = currencyStringToNumber(
      bankAccountData.initialBalance,
    );

    try {
      mutateAsync({
        ...bankAccountData,
        initialBalance: formattedInitialBalance,
      });

      toast.success("Conta cadastrada com sucesso!");
      closeNewAccountModal();
      reset();
    } catch {
      toast.error("Ocorreu um erro ao cadastrar sua conta!");
    }
  });

  return {
    control,
    isNewAccountModalOpen,
    errors,
    hasFormError: !isEmptyObject(errors),
    hasRequestError: isError,
    isLoading,
    closeNewAccountModal,
    handleSubmit,
    register,
  };
}
