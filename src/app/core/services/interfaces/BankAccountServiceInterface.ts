import type {
  BankAccount,
  CreateBankAccount,
} from "@/@types/bankAccount/BankAccount";

export interface BanKAccountServiceInterface {
  create(params: CreateBankAccount): Promise<BankAccount>;
}
