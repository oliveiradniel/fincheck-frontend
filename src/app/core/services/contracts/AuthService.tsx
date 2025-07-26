import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";
import type { AuthServiceInterface } from "@/app/core/services/interfaces/AuthServiceInterface";

import type { SignInParams } from "@/@types/auth/Login";
import type { SignUpParams } from "@/@types/auth/Register";
import type { AuthResponse } from "@/@types/auth/Auth";

export class AuthService implements AuthServiceInterface {
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  async signin(credentials: SignInParams): Promise<AuthResponse> {
    return await this.httpClient.post<AuthResponse>(
      "/auth/signin",
      credentials,
    );
  }

  async signup(credentials: SignUpParams): Promise<AuthResponse> {
    return await this.httpClient.post<AuthResponse>(
      "/auth/signup",
      credentials,
    );
  }
}
