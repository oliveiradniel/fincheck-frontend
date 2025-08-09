import type { TransactionCreate } from "@/@types/transaction/Transaction";

export interface TransactionServiceInterface {
  create(params: TransactionCreate): Promise<void>;
}
