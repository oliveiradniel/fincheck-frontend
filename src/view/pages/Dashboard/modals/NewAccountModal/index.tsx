import { useNewAccountModalController } from "./useNewAccountModalController";

import { Modal } from "@/view/components/Modal";
import { InputCurrency } from "@/view/components/InputCurrency";
import { Input } from "@/view/components/Input";
import { Select } from "@/view/components/Select";
import { ColorsDropdownInput } from "@/view/components/ColorsDropdownInput";

export function NewAccountModal() {
  const { isNewAccountModalOpen, closeNewAccountModal } =
    useNewAccountModalController();

  return (
    <Modal
      isOpen={isNewAccountModalOpen}
      title="Nova Conta"
      description="Criar uma nova conta"
      onClose={closeNewAccountModal}
    >
      <form>
        <div>
          <span className="text-xs tracking-[0.5px] text-gray-600">Saldo</span>
          <div className="flex items-center gap-2">
            <span>R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Nome da conta" />

          <Select
            placeholder="Tipo"
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

          <ColorsDropdownInput />
        </div>
      </form>
    </Modal>
  );
}
