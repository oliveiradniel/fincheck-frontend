import { useNewTransactionModalController } from "./useNewTransactionModalController";

import { Modal } from "@/view/components/Modal";
import { InputCurrency } from "@/view/components/InputCurrency";
import { Input } from "@/view/components/Input";
import { Select } from "@/view/components/Select";

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    closeNewTransactionModal,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === "EXPENSE";

  const title = isExpense ? "Nova Despesa" : "Nova Receita";

  const description = isExpense
    ? "Criar uma nova despesa"
    : "Criar uma nova receita";

  const inputPlaceholder = `Nome da ${isExpense ? "despesa" : "receita"}`;
  const selectPlaceholder = `${isExpense ? "Pagar" : "Receber"} com`;

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      title={title}
      description={description}
      onClose={closeNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-xs tracking-[0.5px] text-gray-600">
            Valor da {isExpense ? " despesa" : " receita"}
          </span>
          <div className="flex items-center gap-2">
            <span>R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input type="text" name="name" placeholder={inputPlaceholder} />

          <Select
            placeholder="Categoria"
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

          <Select
            placeholder={selectPlaceholder}
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
        </div>
      </form>
    </Modal>
  );
}
