import type { UsersServiceInterface } from "../interfaces/UsersServiceInterface";
import type { HttpClientInterface } from "@/app/core/infra/http/HttpClientInterface";

import type { User } from "@/@entities/User";

export class UsersService implements UsersServiceInterface {
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  getAuthenticatedUser(): Promise<User> {
    return this.httpClient.get("/users/me", { headers: {} });
  }
}
