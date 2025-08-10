import { useDashboardContext } from "../DashboardContext/useDashboardContext";
import { useTransactionsController } from "./useTransactionsController";

import { cn } from "@/app/utils/cn";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { formatDate } from "@/app/utils/formatDate";

import { CategoryIcon } from "@/view/components/icons/categories/CategoryIcon";

export function TransactionList() {
  const { areValuesVisible } = useDashboardContext();

  const { transactions, isLoadingTransactions, hasTransactions } =
    useTransactionsController();

  if (isLoadingTransactions || !hasTransactions) return null;

  return (
    <ul
      aria-label={hasTransactions ? "Suas transações" : "Não há transacições"}
      className="space-y-2"
    >
      {transactions.map(
        ({ id, name, date, type, value, transactionCategory }) => (
          <li
            key={id}
            className="flex animate-fade-in items-center justify-between gap-4 rounded-2xl bg-white p-4"
          >
            <div className="flex flex-1 items-center gap-3">
              <CategoryIcon
                type={type === "EXPENSE" ? "expense" : "income"}
                category={transactionCategory?.icon}
              />

              <div>
                <strong className="block tracking-[-0.5px]">{name}</strong>
                <span className="text-sm text-gray-600">
                  {formatDate(new Date(date))}
                </span>
              </div>
            </div>

            <span
              className={cn(
                "font-medium tracking-[-0.5px] transition-all duration-300 ease-in-out",
                type === "EXPENSE" ? "text-red-800" : "text-green-800",
                !areValuesVisible && "blur-sm",
              )}
            >
              {type === "EXPENSE" ? "-" : "+"} {formatCurrency(value)}
            </span>
          </li>
        ),
      )}
    </ul>
  );
}
