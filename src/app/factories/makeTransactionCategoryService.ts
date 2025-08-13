import { TransactionCategoryService } from "../core/services/contracts/TransactionCategoryService";

import { makeAxiosHttpClient } from "./makeAxiosHttpClient";

import { env } from "../config/env";

import type { ClearSession } from "../contexts/auth/AuthContext";

export function makeTransactionCategoryService(clearSession: ClearSession) {
  return new TransactionCategoryService(
    makeAxiosHttpClient(env.API_URL, clearSession),
  );
}
