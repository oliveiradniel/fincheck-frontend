import { useEditAccountModalController } from "./useEditAccountModalController";

import { Controller } from "react-hook-form";

import { Modal } from "@/view/components/Modal";
import { ConfirmDeleteModal } from "@/view/components/ConfirmDeleteModal";
import { InputCurrency } from "@/view/components/InputCurrency";
import { Input } from "@/view/components/Input";
import { Select } from "@/view/components/Select";
import { ColorsDropdownInput } from "@/view/components/ColorsDropdownInput";
import { Button } from "@/view/components/Button";
import { TrashIcon } from "@/view/components/icons/TrashIcon";

export function EditAccountModal() {
  const {
    control,
    isEditAccountModalOpen,
    isDeleteModalOepn,
    errors,
    hasRequestError,
    isLoading,
    closeEditAccountModal,
    handleSubmit,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    register,
  } = useEditAccountModalController();

  if (isDeleteModalOepn) {
    return (
      <ConfirmDeleteModal
        title="Tem certeza que deseja excluir esta conta?"
        subtitle="Ao excluir a conta, também serão excluídos todos os registros de receita e despesa relacionados."
        onConfirm={() => {}}
        onClose={handleCloseDeleteModal}
        description="Excluir conta bancária"
      />
    );
  }

  return (
    <Modal
      isOpen={isEditAccountModalOpen}
      title="Editar Conta"
      description="Editar conta já existente"
      onClose={closeEditAccountModal}
      rightAction={
        <button
          type="button"
          onClick={handleOpenDeleteModal}
          className="cursor-pointer"
        >
          <TrashIcon className="h-6 w-6 text-red-700 transition-colors duration-300 ease-in-out hover:text-red-700/80" />
        </button>
      }
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-xs tracking-[0.5px] text-gray-600">
            Saldo atual
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
          {hasRequestError ? "Tentar novamente" : "Salvar"}
        </Button>
      </form>
    </Modal>
  );
}
