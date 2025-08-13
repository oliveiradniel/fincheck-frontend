import { useNewTransactionModalController } from "./useNewTransactionModalController";

import { Modal } from "@/view/components/Modal";
import { InputCurrency } from "@/view/components/InputCurrency";
import { Input } from "@/view/components/Input";
import { Select } from "@/view/components/Select";
import { DatePickerInput } from "@/view/components/DatePickerInput";
import { Controller } from "react-hook-form";
import { Button } from "@/view/components/Button";

export function NewTransactionModal() {
  const {
    title,
    description,
    inputPlaceholder,
    selectPlaceholder,
    buttonLabel,
    transactionCategoriesMap,
    bankAccountsMap,
    isExpense,
    control,
    isNewTransactionModalOpen,
    formErrors,
    isCreatingTransaction,
    hasCreateErrorTransaction,
    isLoadingTransactionCategories,
    isRefetchingTransactionCategories,
    isLoadingBankAccounts,
    isRefetchingBankAccounts,
    closeNewTransactionModal,
    handleSubmit,
    register,
  } = useNewTransactionModalController();

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      title={title}
      description={description}
      onClose={closeNewTransactionModal}
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
                placeholder="Categoria"
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
                options={bankAccountsMap}
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
          aria-disabled={isCreatingTransaction}
          type="submit"
          isLoading={isCreatingTransaction}
          disabled={
            isLoadingTransactionCategories ||
            isLoadingBankAccounts ||
            isRefetchingTransactionCategories ||
            isRefetchingBankAccounts
          }
          className="mt-8 w-full"
        >
          {hasCreateErrorTransaction ? "Tentar novamente" : buttonLabel}
        </Button>
      </form>
    </Modal>
  );
}
