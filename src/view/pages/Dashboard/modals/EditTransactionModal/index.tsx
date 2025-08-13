import { useEditTransactionModalController } from "./useEditTransactionModalController";

import { Modal } from "@/view/components/Modal";
import { InputCurrency } from "@/view/components/InputCurrency";
import { Input } from "@/view/components/Input";
import { Select } from "@/view/components/Select";
import { DatePickerInput } from "@/view/components/DatePickerInput";
import { Controller } from "react-hook-form";
import { Button } from "@/view/components/Button";
import { ConfirmDeleteModal } from "@/view/components/ConfirmDeleteModal";

import type { Transaction } from "@/@entities/Transaction";

import { TrashIcon } from "@/view/components/icons/TrashIcon";

interface EditTransactionModalProps {
  transaction: Transaction | null;
  isOpen: boolean;
  onClose(): void;
}

export function EditTransactionModal({
  transaction,
  isOpen,
  onClose,
}: EditTransactionModalProps) {
  const {
    transactionCategoriesMap,
    accountsMap,
    isDeleteModalOpen,
    isExpense,
    title,
    description,
    inputPlaceholder,
    selectPlaceholder,
    control,
    formErrors,
    isUpdatingTransaction,
    isDeletingTransaction,
    hasErrorUpdateTransaction,
    hasErrorDeleteTransaction,
    isLoadingTransactionCategories,
    isRefetchingTransactionCategories,
    isLoadingBankAccounts,
    isRefetchingBankAccounts,
    handleSubmit,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteTransaction,
    register,
  } = useEditTransactionModalController(transaction, onClose);

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        title={`Tem certeza que deseja excluir esta ${isExpense ? "despesa" : "receita"}?`}
        description="Excluir conta bancária"
        isLoading={isDeletingTransaction}
        hasError={hasErrorDeleteTransaction}
        onConfirm={handleDeleteTransaction}
        onClose={handleCloseDeleteModal}
      />
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      description={description}
      onClose={onClose}
      rightAction={
        <button
          type="button"
          onClick={handleOpenDeleteModal}
          className="cursor-pointer"
        >
          <TrashIcon className="h-6 w-6 text-red-700 transition-colors duration-300 ease-in-out hover:text-red-700/80" />
        </button>
      }
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-xs tracking-[0.5px] text-gray-600">
            Valor da {isExpense ? " despesa" : " receita"}
          </span>
          <div className="flex items-center gap-2">
            <span>R$</span>
            <Controller
              control={control}
              name="value"
              defaultValue="0"
              render={({ field: { value, onChange } }) => (
                <InputCurrency
                  value={value}
                  onChange={onChange}
                  error={formErrors.value?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder={inputPlaceholder}
            error={formErrors.name?.message}
            {...register("name")}
          />

          <Controller
            control={control}
            name="transactionCategoryId"
            defaultValue=""
            render={({ field: { value, onChange } }) => (
              <Select
                placeholder={"Categoria"}
                value={value}
                onChange={onChange}
                isLoadingData={
                  isLoadingTransactionCategories ||
                  isRefetchingTransactionCategories
                }
                error={formErrors.transactionCategoryId?.message}
                options={transactionCategoriesMap}
              />
            )}
          />

          <Controller
            control={control}
            name="bankAccountId"
            defaultValue=""
            render={({ field: { value, onChange } }) => (
              <Select
                placeholder={selectPlaceholder}
                value={value}
                onChange={onChange}
                isLoadingData={
                  isLoadingBankAccounts || isRefetchingBankAccounts
                }
                error={formErrors.bankAccountId?.message}
                options={accountsMap}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { value, onChange } }) => (
              <DatePickerInput
                value={value}
                onChange={onChange}
                error={formErrors.date?.message}
              />
            )}
          />
        </div>

        <Button
          aria-disabled={isUpdatingTransaction}
          type="submit"
          isLoading={isUpdatingTransaction}
          disabled={
            isLoadingTransactionCategories ||
            isLoadingBankAccounts ||
            isRefetchingTransactionCategories ||
            isRefetchingBankAccounts
          }
          className="mt-8 w-full"
        >
          {hasErrorUpdateTransaction ? "Tentar novamente" : "Salvar"}
        </Button>
      </form>
    </Modal>
  );
}
