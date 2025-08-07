import type {
  BankAccountCreate,
  BankAccountResponse,
} from "@/@types/bankAccount/BankAccount";

export interface BanKAccountServiceInterface {
  getAll(): Promise<BankAccountResponse[]>;
  create(params: BankAccountCreate): Promise<BankAccountResponse>;
}
