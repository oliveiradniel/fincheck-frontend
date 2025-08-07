import type { BanKAccountServiceInterface } from "../interfaces/BankAccountServiceInterface";
import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";

import type {
  BankAccountCreate,
  BankAccountResponse,
  BankAccountUpdate,
} from "@/@types/bankAccount/BankAccount";

export class BankAccountService implements BanKAccountServiceInterface {
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  async getAll(): Promise<BankAccountResponse[]> {
    const data =
      await this.httpClient.get<BankAccountResponse[]>("/bank-accounts");

    return data;
  }

  async create(params: BankAccountCreate): Promise<BankAccountResponse> {
    const data = await this.httpClient.post<BankAccountResponse>(
      "/bank-accounts",
      params,
    );

    return data;
  }

  async update({
    id,
    ...params
  }: BankAccountUpdate): Promise<BankAccountResponse> {
    const data = await this.httpClient.put<BankAccountResponse>(
      `/bank-accounts/${id}`,
      params,
    );

    return data;
  }
}
