import type { AuthResponse } from "@/@types/auth/Auth";
import type { SignInParams } from "@/@types/auth/Login";
import type { SignUpParams } from "@/@types/auth/Register";

export interface AuthServiceInterface {
  signin(credentials: SignInParams): Promise<AuthResponse>;
  signup(credentials: SignUpParams): Promise<AuthResponse>;
}
