import type { BanKAccountServiceInterface } from "../interfaces/BankAccountServiceInterface";
import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";

import type {
  BankAccount,
  CreateBankAccount,
} from "@/@types/bankAccount/BankAccount";

export class BankAccountService implements BanKAccountServiceInterface {
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  async create(params: CreateBankAccount): Promise<BankAccount> {
    const data = await this.httpClient.post<BankAccount>(
      "/bank-accounts",
      params,
    );

    return data;
  }
}
