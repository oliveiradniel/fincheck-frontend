import { useState } from "react";

import { TransactionsIcon } from "@/view/components/icons/TransactionsIcon";
import { IncomeIcon } from "@/view/components/icons/IncomeIcon";
import { ExpensesIcon } from "@/view/components/icons/ExpensesIcon";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { DropdownMenu } from "@/view/components/DropdownMenu";

interface TransactionTypeFilterProps {
  isDisabled: boolean;
}

export function TransactionTypeFilterButton({
  isDisabled,
}: TransactionTypeFilterProps) {
  const [isTransactionsTypeFilterVisible] = useState(false);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        aria-label={
          isTransactionsTypeFilterVisible
            ? "Visualizar tipos de transação para filtro"
            : "Ocultar tipos de transação para filtro"
        }
        disabled={isDisabled}
        className="flex cursor-pointer items-center gap-2 transition-opacity duration-300 ease-in-out disabled:cursor-default disabled:opacity-60"
      >
        <TransactionsIcon />
        <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">
          Transações
        </span>
        <ChevronDownIcon className="text-gray-900" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[279px]">
        <DropdownMenu.Item className="gap-2">
          <IncomeIcon />
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item className="gap-2">
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item className="gap-2">
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
