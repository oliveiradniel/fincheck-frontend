import type { UsersServiceInterface } from "../interfaces/UsersServiceInterface";

import type { User } from "@/@entities/User";

import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";

export class UsersService implements UsersServiceInterface {
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  getAuthenticatedUser(): Promise<User> {
    return this.httpClient.get("/users/me", { headers: {} });
  }
}
