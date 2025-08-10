import type { TransactionServiceInterface } from "../interfaces/TransactionServiceInterface";
import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";

import type {
  TransactionCreate,
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
}
