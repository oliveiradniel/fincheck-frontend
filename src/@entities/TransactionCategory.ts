import type { TransactionType } from "@/@types/transaction/Transaction";

export interface TransactionCategory {
  id: string;
  name: string;
  icon: string;
  type: TransactionType;
}
