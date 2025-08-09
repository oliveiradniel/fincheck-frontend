import type { TransactionCategoryResponse } from "@/@types/transaction/TransactionCategory";

export interface TransactionCategoryServiceInterface {
  getAll(): Promise<TransactionCategoryResponse[]>;
}
