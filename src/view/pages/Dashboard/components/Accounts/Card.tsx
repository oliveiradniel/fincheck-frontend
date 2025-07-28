import { formatCurrency } from "@/app/utils/formatCurrency";

import { BankAccountTypeIcon } from "@/view/components/icons/BankAccountTypeIcon";

interface CardProps {
  color: string;
  name: string;
  balance: number;
  type: "CASH" | "CHECKING" | "INVESTMENT";
}

export function Card({ color, name, balance, type }: CardProps) {
  return (
    <div
      className="flex h-[200px] flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />

        <span className="mt-4 block font-medium tracking-[-0.5px] text-gray-800">
          {name}
        </span>
      </div>

      <div>
        <span className="mt-4 block font-medium tracking-[-0.5px] text-gray-800">
          {formatCurrency(balance)}
        </span>

        <small className="text-sm text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
