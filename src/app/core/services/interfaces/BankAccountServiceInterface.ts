import type {
  BankAccountCreate,
  BankAccountId,
  BankAccountResponse,
  BankAccountUpdate,
} from "@/@types/bankAccount/BankAccount";

export interface BanKAccountServiceInterface {
  getAll(): Promise<BankAccountResponse[]>;
  create(params: BankAccountCreate): Promise<BankAccountResponse>;
  update(params: BankAccountUpdate): Promise<BankAccountResponse>;
  delete(bankAccountId: BankAccountId): void;
}
