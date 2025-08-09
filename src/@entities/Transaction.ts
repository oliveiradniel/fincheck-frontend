import type { TransactionType } from "@/@types/transaction/Transaction";

export interface Transaction {
  id: string;
  bankAccountId: string;
  transactionCategoryId: string;
  name: string;
  value: string;
  date: Date;
  type: TransactionType;
}
