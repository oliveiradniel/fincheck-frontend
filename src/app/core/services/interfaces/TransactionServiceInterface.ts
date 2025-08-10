import type {
  TransactionCreate,
  TransactionResponse,
  TransactionsFilters,
} from "@/@types/transaction/Transaction";

export interface TransactionServiceInterface {
  getAll(filters: TransactionsFilters): Promise<TransactionResponse[]>;
  create(params: TransactionCreate): Promise<void>;
}
