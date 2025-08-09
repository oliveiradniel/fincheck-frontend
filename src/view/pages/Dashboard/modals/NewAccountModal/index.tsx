import { useNewAccountModalController } from "./useNewAccountModalController";

import { Controller } from "react-hook-form";

import { Modal } from "@/view/components/Modal";
import { InputCurrency } from "@/view/components/InputCurrency";
import { Input } from "@/view/components/Input";
import { Select } from "@/view/components/Select";
import { ColorsDropdownInput } from "@/view/components/ColorsDropdownInput";
import { Button } from "@/view/components/Button";

export function NewAccountModal() {
  const {
    control,
    isNewAccountModalOpen,
    formErrors,
    isCreatingBankAccount,
    hasCreateErrorBankAccount,
    closeNewAccountModal,
    handleSubmit,
    register,
  } = useNewAccountModalController();

  return (
    <Modal
      isOpen={isNewAccountModalOpen}
      title="Nova Conta"
      description="Criar uma nova conta"
      onClose={closeNewAccountModal}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-xs tracking-[0.5px] text-gray-600">
            Saldo inicial
          </span>
          <div className="flex items-center gap-2">
            <span>R$</span>
            <Controller
              control={control}
              name="initialBalance"
              defaultValue={0}
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  value={value}
                  onChange={onChange}
                  error={formErrors.initialBalance?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Nome da conta"
            error={formErrors.name?.message}
            {...register("name")}
          />

          <Controller
            control={control}
            name="type"
            defaultValue="CHECKING"
            render={({ field: { onChange, value } }) => (
              <Select
                value={value}
                onChange={onChange}
                placeholder="Tipo"
                error={formErrors.type?.message}
                options={[
                  {
                    value: "CHECKING",
                    label: "Conta Corrente",
                  },
                  {
                    value: "INVESTIMENT",
                    label: "Investimentos",
                  },
                  {
                    value: "CASH",
                    label: "Dinheiro Físico",
                  },
                ]}
              />
            )}
          />

          <Controller
            control={control}
            name="color"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                value={value}
                onChange={onChange}
                error={formErrors.color?.message}
              />
            )}
          />
        </div>

        <Button
          aria-disabled={isCreatingBankAccount}
          type="submit"
          isLoading={isCreatingBankAccount}
          className="mt-6 w-full"
        >
          {hasCreateErrorBankAccount ? "Tentar novamente" : "Criar"}
        </Button>
      </form>
    </Modal>
  );
}
