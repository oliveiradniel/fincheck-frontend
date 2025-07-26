import type { AccessToken } from "./AccessToken";

export type AuthResponse = { accessToken: AccessToken };

export interface AuthMutationParams {
  type: "signin" | "signup";
  action(): Promise<AuthResponse>;
}
