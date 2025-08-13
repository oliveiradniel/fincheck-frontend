import type z from "zod";

import { TransactionSchema } from "@/app/schemas/transaction/TransactionSchema";
import type { Transaction } from "@/@entities/Transaction";

export type TransactionId = string;

export type TransactionForm = z.infer<typeof TransactionSchema>;

export type TransactionResponse = Transaction;

export type TransactionsFilters = {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: TransactionType;
};

export type TransactionType = "INCOME" | "EXPENSE";

export type TransactionCreate = Omit<
  Transaction,
  "id" | "value" | "date" | "transactionCategory"
> & {
  value: number;
  date: string;
};

export type TranasactionUpdate = Omit<Transaction, "transactionCategory">;
