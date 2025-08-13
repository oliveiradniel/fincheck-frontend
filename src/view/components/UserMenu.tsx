import { useState } from "react";

import { useAuthContext } from "@/app/contexts/auth/useAuthContext";

import { ExitIcon } from "@radix-ui/react-icons";

import { DropdownMenu } from "./DropdownMenu";

export function UserMenu() {
  const { loggedUser, clearSession } = useAuthContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      <DropdownMenu.Trigger className="cursor-pointer">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-100 bg-teal-50">
          <span className="text-sm font-medium tracking-[-0.5px] text-moss-green">
            {loggedUser?.name[0]}
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="mt-2 mr-4 w-32">
        <DropdownMenu.Item
          onSelect={clearSession}
          className="flex items-center justify-between"
        >
          Sair <ExitIcon className="h-4 w-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
