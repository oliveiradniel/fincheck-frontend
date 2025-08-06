import type z from "zod";

import type { BankAccountSchema } from "@/app/schemas/bankAccount/BankAccountSchema";

export type BankAccountData = z.infer<typeof BankAccountSchema>;

export type BankAccount = {
  name: string;
  initialBalance: number;
  color: string;
  type: "CHECKING" | "INVESTMENT" | "CASH";
};

export type CreateBankAccount = BankAccount;
