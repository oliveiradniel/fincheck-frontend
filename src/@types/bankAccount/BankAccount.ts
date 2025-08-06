import type z from "zod";

import type { BankAccountSchema } from "@/app/schemas/bankAccount/BankAccountSchema";

export type BankAccountData = z.infer<typeof BankAccountSchema>;

export type BankAccount = z.infer<typeof BankAccountSchema>;

export type CreateBankAccount = {
  name: string;
  initialBalance: number;
  color: string;
  type: "CHECKING" | "INVESTIMENT" | "CASH";
};
