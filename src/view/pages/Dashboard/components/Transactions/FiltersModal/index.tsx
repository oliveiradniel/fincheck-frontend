import { useFiltersModal } from "./useFiltersModal";

import { cn } from "@/app/utils/cn";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/view/components/Button";
import { Modal } from "@/view/components/Modal";

interface FiltersModalProps {
  isOpen: boolean;
  onClose(): void;
}

const mockedAccounts = [
  { id: "123", name: "Nubank" },
  { id: "456", name: "XP Investimentos" },
  { id: "789", name: "Dinheiro" },
];

export function FiltersModal({ isOpen, onClose }: FiltersModalProps) {
  const {
    selectedBankAccountId,
    selectedYear,
    handleSelectBankAccount,
    handleChangeYear,
  } = useFiltersModal();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Filtros"
      description="Modal para filtrar suas transações por conta bancária e ano"
    >
      <div>
        <h2 className="text-lg font-bold tracking-[-1px] text-gray-800">
          Conta
        </h2>

        <div aria-live="polite" className="mt-2 space-y-2">
          {mockedAccounts.map(({ id, name }) => {
            const isActive = id === selectedBankAccountId;

            return (
              <button
                key={id}
                aria-label={name}
                aria-selected={isActive}
                type="button"
                onClick={() => handleSelectBankAccount(id)}
                className={cn(
                  "transitio-colors w-full cursor-pointer rounded-2xl p-2 text-start text-gray-800 duration-300 ease-in-out hover:bg-gray-50",
                  isActive && "!bg-gray-200",
                )}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>

      <fieldset className="text-gray-800">
        <legend className="text-lg font-bold tracking-[-1px]">Ano</legend>

        <div className="mt-2 flex w-52 items-center justify-between">
          <button
            aria-label="Diminuir um ano"
            type="button"
            disabled={selectedYear === 2025}
            onClick={() => handleChangeYear(-1)}
            className="flex h-12 w-12 items-center justify-center transition-all duration-300 ease-in-out enabled:cursor-pointer enabled:hover:-translate-x-[2px] enabled:hover:scale-101 disabled:opacity-40"
          >
            <ChevronLeftIcon aria-hidden="true" className="h-4 w-4" />
          </button>

          <div
            aria-live="polite"
            aria-atomic="true"
            className="flex-1 text-center"
          >
            <span className="text-sm font-medium tracking-[-0.5px]">
              {selectedYear}
            </span>
          </div>

          <button
            aria-label="Aumentar o ano"
            type="button"
            onClick={() => handleChangeYear(+1)}
            className="flex h-12 w-12 cursor-pointer items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-x-[2px] hover:scale-101"
          >
            <ChevronRightIcon aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </fieldset>

      <Button className="w-full">Aplicar filtros</Button>
    </Modal>
  );
}
