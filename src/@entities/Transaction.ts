import type { TransactionType } from "@/@types/transaction/Transaction";

export interface Transaction {
  id: string;
  bankAccountId: string;
  transactionCategoryId: string;
  name: string;
  value: number;
  date: string;
  type: TransactionType;
  transactionCategory?: {
    id: string;
    name: string;
    icon: string;
  };
}
