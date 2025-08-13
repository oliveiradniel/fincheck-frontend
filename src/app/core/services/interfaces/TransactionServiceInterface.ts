import type {
  TranasactionUpdate,
  TransactionCreate,
  TransactionId,
  TransactionResponse,
  TransactionsFilters,
} from "@/@types/transaction/Transaction";

export interface TransactionServiceInterface {
  getAll(filters: TransactionsFilters): Promise<TransactionResponse[]>;
  create(params: TransactionCreate): Promise<void>;
  update(params: TranasactionUpdate): Promise<void>;
  delete(transactionId: TransactionId): void;
}
