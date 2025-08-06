import { useNewAccountModalController } from "./useNewAccountModalController";

import { Modal } from "@/view/components/Modal";
import { InputCurrency } from "@/view/components/InputCurrency";
import { Input } from "@/view/components/Input";
import { Select } from "@/view/components/Select";
import { ColorsDropdownInput } from "@/view/components/ColorsDropdownInput";
import { Button } from "@/view/components/Button";
import { Controller } from "react-hook-form";

export function NewAccountModal() {
  const {
    control,
    isNewAccountModalOpen,
    errors,
    hasRequestError,
    isLoading,
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
              defaultValue="0"
              render={({ field: { onChange } }) => (
                <InputCurrency
                  // value={value}
                  onChange={onChange}
                  error={errors.initialBalance?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Nome da conta"
            error={errors.name?.message}
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
                error={errors.type?.message}
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
                error={errors.color?.message}
              />
            )}
          />
        </div>

        <Button type="submit" isLoading={isLoading} className="mt-6 w-full">
          {hasRequestError ? "Tentar novamente" : "Criar"}
        </Button>
      </form>
    </Modal>
  );
}
