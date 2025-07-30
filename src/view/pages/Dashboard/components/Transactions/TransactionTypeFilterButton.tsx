import { useState } from "react";

import { TransactionsIcon } from "@/view/components/icons/TransactionsIcon";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface TransactionTypeFilterProps {
  isDisabled: boolean;
}

export function TransactionTypeFilterButton({
  isDisabled,
}: TransactionTypeFilterProps) {
  const [isTransactionsTypeFilterVisible] = useState(false);

  return (
    <button
      aria-expanded={isTransactionsTypeFilterVisible}
      aria-label={
        isTransactionsTypeFilterVisible
          ? "Visualizar tipos de transação para filtro"
          : "Ocultar tipos de transação para filtro"
      }
      type="button"
      disabled={isDisabled}
      className="flex cursor-pointer items-center gap-2 transition-opacity duration-300 ease-in-out disabled:cursor-default disabled:opacity-60"
    >
      <TransactionsIcon />
      <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">
        Transações
      </span>
      <ChevronDownIcon className="text-gray-900" />
    </button>
  );
}
