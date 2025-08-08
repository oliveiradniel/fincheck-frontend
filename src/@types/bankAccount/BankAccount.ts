import type z from "zod";

import type { BankAccount } from "@/@entities/BankAccount";

import type { BankAccountSchema } from "@/app/schemas/bankAccount/BankAccountSchema";

export type BankAccountId = string;

export type BankAccountForm = z.infer<typeof BankAccountSchema>;

export type BankAccountResponse = BankAccount;

export type BankAccountCreate = Omit<BankAccount, "id" | "currentBalance">;

export type BankAccountUpdate = Omit<BankAccount, "currentBalance">;
