import { TransactionCategoryService } from "../core/services/contracts/TransactionCategoryService";

import { makeAxiosHttpClient } from "./makeAxiosHttpClient";

import { env } from "../config/env";

import type { ClearSession } from "@/@types/services/HttpClientInterface";

export function makeTransactionCategoryService(clearSession: ClearSession) {
  return new TransactionCategoryService(
    makeAxiosHttpClient(env.API_URL, clearSession),
  );
}
