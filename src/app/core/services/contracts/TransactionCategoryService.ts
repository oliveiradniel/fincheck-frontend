import type { TransactionCategoryServiceInterface } from "../interfaces/TransactionCategoryServiceInterface";
import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";

import type { TransactionCategoryResponse } from "@/@types/transaction/TransactionCategory";

export class TransactionCategoryService
  implements TransactionCategoryServiceInterface
{
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  getAll(): Promise<TransactionCategoryResponse[]> {
    return this.httpClient.get<TransactionCategoryResponse[]>(
      "/transaction-categories",
    );
  }
}
