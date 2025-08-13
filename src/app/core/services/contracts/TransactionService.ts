import type { TransactionServiceInterface } from "../interfaces/TransactionServiceInterface";
import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";

import type {
  TranasactionUpdate,
  TransactionCreate,
  TransactionId,
  TransactionResponse,
  TransactionsFilters,
} from "@/@types/transaction/Transaction";

export class TransactionService implements TransactionServiceInterface {
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  getAll(filters: TransactionsFilters): Promise<TransactionResponse[]> {
    return this.httpClient.get<TransactionResponse[]>(`/transactions`, {
      params: filters,
    });
  }

  create(params: TransactionCreate): Promise<void> {
    return this.httpClient.post("/transactions", params);
  }

  update({ id, ...params }: TranasactionUpdate): Promise<void> {
    return this.httpClient.put(`/transactions/${id}`, params);
  }

  delete(transactionId: TransactionId) {
    return this.httpClient.delete(`/transactions/${transactionId}`);
  }
}
