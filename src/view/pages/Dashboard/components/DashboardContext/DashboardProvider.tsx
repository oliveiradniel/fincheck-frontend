import { useCallback, useState } from "react";

import { DashboardContext } from ".";

import type { TransactionType } from "@/@types/TransactionType";
import type { BankAccount } from "@/@entities/BankAccount";

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const LOCAL_STORAGE_KEY = "__a_v_v";

  const [areValuesVisible, setAreValuesVisible] = useState<boolean>(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (value) return JSON.parse(value);

    return true;
  });

  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);

  const [newTransactionType, setNewTransactionType] =
    useState<TransactionType | null>(null);

  const [accountBeingEdited, setAccountBeingEdited] =
    useState<BankAccount | null>(null);

  const handleToogleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(!prevState));

      return !prevState;
    });
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: TransactionType) => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  const openEditAccountModal = useCallback((bankAccount: BankAccount) => {
    setIsEditAccountModalOpen(true);
    setAccountBeingEdited(bankAccount);
  }, []);

  const closeEditAccountModal = useCallback(() => {
    setIsEditAccountModalOpen(false);
    setAccountBeingEdited(null);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        isNewAccountModalOpen,
        isNewTransactionModalOpen,
        isEditAccountModalOpen,
        newTransactionType,
        accountBeingEdited,
        onToogleValuesVisibility: handleToogleValuesVisibility,
        openNewAccountModal,
        openNewTransactionModal,
        closeNewAccountModal,
        closeNewTransactionModal,
        openEditAccountModal,
        closeEditAccountModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
