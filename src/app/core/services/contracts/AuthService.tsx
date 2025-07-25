import type { HttpClientInterface } from "@/@types/services/HttpClientInterface";
import type { AuthServiceInterface } from "@/app/core/services/interfaces/AuthServiceInterface";

import type { SignInParams, SignInResponse } from "@/@types/auth/Login";
import type { SignUpParams, SignUpResponse } from "@/@types/auth/Register";

export class AuthService implements AuthServiceInterface {
  private readonly httpClient: HttpClientInterface;

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient;
  }

  async signin(credentials: SignInParams): Promise<SignInResponse> {
    return await this.httpClient.post<SignInResponse>(
      "/auth/signin",
      credentials,
    );
  }

  async signup(credentials: SignUpParams): Promise<SignUpResponse> {
    return await this.httpClient.post<SignUpResponse>(
      "/auth/signup",
      credentials,
    );
  }
}
