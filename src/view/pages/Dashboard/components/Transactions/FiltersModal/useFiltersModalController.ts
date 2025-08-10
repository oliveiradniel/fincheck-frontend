import { useGetAllBankAccountsQuery } from "@/app/hooks/queries/useGetAllBankAccountsQuery";
import { useState } from "react";

export function useFiltersModalController() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | undefined
  >(undefined);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { bankAccounts } = useGetAllBankAccountsQuery();

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? undefined : bankAccountId,
    );
  }

  function handleChangeYear(step: number) {
    if (selectedYear === 2025 && step === -1) {
      return;
    }

    setSelectedYear((prevState) => prevState + step);
  }

  return {
    bankAccounts,
    selectedBankAccountId,
    selectedYear,
    handleSelectBankAccount,
    handleChangeYear,
  };
}
