import { useTransactionsController } from "./useTransactionsController";

import { SkeletonTransaction } from "./SkeletonTransaction";
import { EmptyTransactions } from "./EmptyTransactions";

import { TransactionTypeFilterButton } from "./TransactionTypeFilterButton";
import { FilterButton } from "./FilterButton";
import { MonthSlidersFilter } from "./MonthSlidersFilter";
import { TransactionList } from "./TransactionList";

export function Transactions() {
  const { transactions, hasTransactions, emptyTransactions, isLoading } =
    useTransactionsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      <header>
        <div className="flex items-center justify-between">
          <TransactionTypeFilterButton isDisabled={isLoading} />

          <FilterButton isDisabled={isLoading} />
        </div>

        <div className="relative mt-6 p-3">
          <MonthSlidersFilter isDisabled={isLoading} />
        </div>
      </header>

      <div className="mt-4 flex-1 overflow-y-auto">
        {isLoading &&
          [...Array(6)].map((_, index) => <SkeletonTransaction key={index} />)}

        {!isLoading && emptyTransactions && <EmptyTransactions />}

        {!isLoading && hasTransactions && (
          <TransactionList
            transactions={transactions}
            hasTransactions={hasTransactions}
          />
        )}
      </div>
    </div>
  );
}
