import { useDashboardContext } from "../DashboardContext/useDashboardContext";

import { cn } from "@/app/utils/cn";
import { formatCurrency } from "@/app/utils/formatCurrency";

import { BankAccountTypeIcon } from "@/view/components/icons/BankAccountTypeIcon";

import type { BankAccount } from "@/@entities/BankAccount";

interface CardProps {
  data: BankAccount;
}

export function Card({ data }: CardProps) {
  const { areValuesVisible, openEditAccountModal } = useDashboardContext();

  const { color, name, currentBalance, type } = data;

  return (
    <div
      role="button"
      className="relative flex h-[200px] animate-fade-in cursor-pointer flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4"
      style={{ borderColor: color }}
      onClick={() => openEditAccountModal(data)}
    >
      <div>
        <BankAccountTypeIcon type={type} />

        <span className="mt-4 block font-medium tracking-[-0.5px] text-gray-800">
          {name}
        </span>
      </div>

      <div>
        <span
          className={cn(
            "mt-4 block font-medium tracking-[-0.5px] text-gray-800 transition-all duration-300 ease-in-out",
            !areValuesVisible && "blur-sm",
          )}
        >
          {formatCurrency(currentBalance)}
        </span>

        <small className="text-sm text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
