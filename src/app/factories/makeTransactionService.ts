import { TransactionService } from "../core/services/contracts/TransactionService";

import { makeAxiosHttpClient } from "./makeAxiosHttpClient";

import { env } from "../config/env";

import type { ClearSession } from "@/@types/services/HttpClientInterface";

export function makeTransactionService(clearSession: ClearSession) {
  return new TransactionService(makeAxiosHttpClient(env.API_URL, clearSession));
}
