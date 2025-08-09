import type z from "zod";

import { TransactionSchema } from "@/app/schemas/transaction/TransactionSchema";
import type { Transaction } from "@/@entities/Transaction";

export type TransactionForm = z.infer<typeof TransactionSchema>;

export type TransactionResponse = Transaction;

export type TransactionType = "INCOME" | "EXPENSE";

export type TransactionCreate = Omit<Transaction, "id" | "value" | "date"> & {
  value: number;
  date: string;
};
