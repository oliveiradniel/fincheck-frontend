import type { AccessToken } from "@/@types/auth/AccessToken";
import type { User } from "@/@types/user/User";

export interface UsersServiceInterface {
  getAuthenticatedUser(accessToken: AccessToken): Promise<User>;
}
