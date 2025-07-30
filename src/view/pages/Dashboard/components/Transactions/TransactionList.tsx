import { useDashboardContext } from "../DashboardContext/useDashboardContext";

import { cn } from "@/app/utils/cn";
import { formatCurrency } from "@/app/utils/formatCurrency";

import { CategoryIcon } from "@/view/components/icons/categories/CategoryIcon";

interface TransactionsListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transactions: any[];
  hasTransactions: boolean;
}

export function TransactionList({
  transactions,
  hasTransactions,
}: TransactionsListProps) {
  const { areValuesVisible } = useDashboardContext();

  return (
    <ul
      aria-label={hasTransactions ? "Suas transações" : "Não há transacições"}
      className="space-y-2"
    >
      {transactions.map((_, index) => (
        <li
          key={index}
          className="flex animate-fade-in items-center justify-between gap-4 rounded-2xl bg-white p-4"
        >
          <div className="flex flex-1 items-center gap-3">
            <CategoryIcon type="income" />

            <div>
              <strong className="block tracking-[-0.5px]">Almoço</strong>
              <span className="text-sm text-gray-600">04/06/2025</span>
            </div>
          </div>

          <span
            className={cn(
              "font-medium tracking-[-0.5px] text-green-800 transition-all duration-300 ease-in-out",
              !areValuesVisible && "blur-sm",
            )}
          >
            {formatCurrency(123)}
          </span>
        </li>
      ))}
    </ul>
  );
}
