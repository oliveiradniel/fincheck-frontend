import { UsersService } from "../core/services/contracts/UsersService";

import { makeAxiosHttpClient } from "./makeAxiosHttpClient";

import { env } from "../config/env";

import type { ClearSession } from "@/@types/services/HttpClientInterface";

export function makeUsersService(onClearSession: ClearSession) {
  return new UsersService(makeAxiosHttpClient(env.API_URL, onClearSession));
}
