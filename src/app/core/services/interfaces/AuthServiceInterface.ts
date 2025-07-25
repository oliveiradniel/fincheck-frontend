import type {
  SignInParams,
  SignInResponse,
} from "../../../../@types/auth/Login";
import type {
  SignUpParams,
  SignUpResponse,
} from "../../../../@types/auth/Register";

export interface AuthServiceInterface {
  signin(credentials: SignInParams): Promise<SignInResponse>;
  signup(credentials: SignUpParams): Promise<SignUpResponse>;
}
