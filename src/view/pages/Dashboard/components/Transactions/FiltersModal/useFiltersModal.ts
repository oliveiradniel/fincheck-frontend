import { useState } from "react";

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? null : bankAccountId,
    );
  }

  function handleChangeYear(step: number) {
    if (selectedYear === 2025 && step === -1) {
      return;
    }

    setSelectedYear((prevState) => prevState + step);
  }

  return {
    selectedBankAccountId,
    selectedYear,
    handleSelectBankAccount,
    handleChangeYear,
  };
}
