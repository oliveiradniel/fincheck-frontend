import type { BanKAccountServiceInterface } from "../interfaces/BankAccountServiceInterface";
import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";

import type {
  BankAccountCreate,
  BankAccountId,
  BankAccountResponse,
  BankAccountUpdate,
} from "@/@types/bankAccount/BankAccount";

export class BankAccountService implements BanKAccountServiceInterface {
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  getAll(): Promise<BankAccountResponse[]> {
    return this.httpClient.get<BankAccountResponse[]>("/bank-accounts");
  }

  create(params: BankAccountCreate): Promise<void> {
    return this.httpClient.post("/bank-accounts", params);
  }

  update({ id, ...params }: BankAccountUpdate): Promise<BankAccountResponse> {
    return this.httpClient.put<BankAccountResponse>(
      `/bank-accounts/${id}`,
      params,
    );
  }

  delete(bankAccountId: BankAccountId): void {
    return this.httpClient.delete(`/bank-accounts/${bankAccountId}`);
  }
}
