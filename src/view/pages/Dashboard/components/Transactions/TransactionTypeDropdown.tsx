import { useState } from "react";

import { cn } from "@/app/utils/cn";

import { TransactionsIcon } from "@/view/components/icons/TransactionsIcon";
import { IncomeIcon } from "@/view/components/icons/IncomeIcon";
import { ExpensesIcon } from "@/view/components/icons/ExpensesIcon";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { DropdownMenu } from "@/view/components/DropdownMenu";
import { Loader } from "@/view/components/Loader";

import type { TransactionType } from "@/@types/transaction/Transaction";

interface TransactionTypeDropdownProps {
  selectedType: TransactionType | undefined;
  isLoading: boolean;
  isDisabled: boolean;
  onSelect(type: TransactionType | undefined): void;
}

export function TransactionTypeDropdown({
  selectedType,
  isLoading,
  isDisabled,
  onSelect,
}: TransactionTypeDropdownProps) {
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
        {selectedType === "EXPENSE" && <ExpensesIcon />}
        {selectedType === "INCOME" && <IncomeIcon />}
        {selectedType === undefined && <TransactionsIcon />}

        <span className="text-sm font-medium tracking-[-0.5px] text-gray-800">
          {selectedType === "EXPENSE" && "Despesas"}
          {selectedType === "INCOME" && "Receitas"}
          {selectedType === undefined && "Transações"}
        </span>

        <ChevronDownIcon className="text-gray-900" />

        {isLoading && (
          <Loader
            trackColor="#ffffff"
            indicatorColor="#087f5b"
            className="h-4 w-4"
          />
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[279px]">
        <DropdownMenu.Item
          onSelect={() => onSelect("INCOME")}
          className={cn("gap-2", selectedType === "INCOME" && "font-bold")}
        >
          <IncomeIcon />
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => onSelect("EXPENSE")}
          className={cn("gap-2", selectedType === "EXPENSE" && "font-bold")}
        >
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => onSelect(undefined)}
          className={cn("gap-2", selectedType === undefined && "font-bold")}
        >
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
