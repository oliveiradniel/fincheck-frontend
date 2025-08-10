import { useTransactionsController } from "./useTransactionsController";

import { SkeletonTransaction } from "./SkeletonTransaction";
import { EmptyTransactions } from "./EmptyTransactions";

import { TransactionTypeDropdown } from "./TransactionTypeDropdown";
import { FilterButton } from "./FilterButton";
import { MonthSlidersFilter } from "./MonthSlidersFilter";
import { TransactionList } from "./TransactionList";
import { FiltersModal } from "./FiltersModal";

export function Transactions() {
  const {
    filters,
    emptyTransactions,
    isLoadingTransactions,
    isRefetchingTransactions,
    isFilteredModalOpen,
    handleChangeFilters,
    handleApplyFilters,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  } = useTransactionsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      <FiltersModal
        isOpen={isFilteredModalOpen}
        onClose={handleCloseFiltersModal}
        onApplyFilters={handleApplyFilters}
      />

      <header>
        <div className="flex items-center justify-between">
          <TransactionTypeDropdown
            selectedType={filters.type}
            isLoading={isRefetchingTransactions}
            isDisabled={isLoadingTransactions}
            onSelect={handleChangeFilters("type")}
          />

          <FilterButton
            disabled={isLoadingTransactions}
            onClick={handleOpenFiltersModal}
          />
        </div>

        <div className="relative mt-6 p-3">
          <MonthSlidersFilter isDisabled={isLoadingTransactions} />
        </div>
      </header>

      <div className="mt-4 flex-1 overflow-y-auto">
        {isLoadingTransactions && (
          <div className="space-y-2">
            {[...Array(6)].map((_, index) => (
              <SkeletonTransaction key={index} />
            ))}
          </div>
        )}

        {(!isLoadingTransactions || !isRefetchingTransactions) &&
          emptyTransactions && <EmptyTransactions />}

        <TransactionList />
      </div>
    </div>
  );
}
