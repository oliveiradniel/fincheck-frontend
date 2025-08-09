import type { TransactionServiceInterface } from "../interfaces/TransactionServiceInterface";
import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";

import type { TransactionCreate } from "@/@types/transaction/Transaction";

export class TransactionService implements TransactionServiceInterface {
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  create(params: TransactionCreate): Promise<void> {
    return this.httpClient.post("/transactions", params);
  }
}
