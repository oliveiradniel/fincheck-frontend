import type {
  BankAccount,
  CreateBankAccount,
} from "@/@types/bankAccount/BankAccount";

export interface BanKAccountServiceInterface {
  getAll(): Promise<BankAccount[]>;
  create(params: CreateBankAccount): Promise<BankAccount>;
}
