import { useState } from "react";

import { DropdownMenu } from "@/view/components/DropdownMenu";

import { PlusIcon } from "@radix-ui/react-icons";

import { BankAccountIcon } from "@/view/components/icons/BankAccountIcon";
import { CategoryIcon } from "@/view/components/icons/categories/CategoryIcon";
import { cn } from "@/app/utils/cn";

export function FAB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger
        className={cn(
          "fixed right-4 bottom-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-moss-green text-white",
          isOpen && "rotate-90",
        )}
      >
        <PlusIcon
          className={cn(
            "h-6 w-6 transform transition-transform duration-100 ease-linear",
            isOpen && "-rotate-45",
          )}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content side="bottom">
        <DropdownMenu.Item className="gap-2">
          <CategoryIcon type="expense" />
          Nova Despesa
        </DropdownMenu.Item>
        <DropdownMenu.Item className="gap-2">
          <CategoryIcon type="income" />
          Nova Receita
        </DropdownMenu.Item>
        <DropdownMenu.Item className="gap-2">
          <BankAccountIcon />
          Nova Conta
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
