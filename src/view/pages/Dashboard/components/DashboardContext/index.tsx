import { createContext } from "react";

import type { TransactionType } from "@/@types/TransactionType";

interface DashboardContextValue {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  newTransactionType: TransactionType | null;
  onToogleValuesVisibility(): void;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  openNewTransactionModal(type: TransactionType): void;
  closeNewTransactionModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);
