import type { AccessToken } from "./AccessToken";

export type AuthResponse = { accessToken: AccessToken };

export interface AuthMutationParams {
  action(): Promise<AuthResponse>;
}
