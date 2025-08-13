import { BankAccountService } from "../core/services/contracts/BankAccountService";

import { makeAxiosHttpClient } from "./makeAxiosHttpClient";

import { env } from "../config/env";

import type { ClearSession } from "../contexts/auth/AuthContext";

export function makeBankAccountService(onClearSession: ClearSession) {
  return new BankAccountService(
    makeAxiosHttpClient(env.API_URL, onClearSession),
  );
}
