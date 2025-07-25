import type z from "zod";

import type { LoginSchema } from "../../app/schemas/auth/LoginSchema";

import type { AccessToken } from "./AccessToken";

export type LoginData = z.infer<typeof LoginSchema>;

export type SignInParams = LoginData;

export type SignInResponse = AccessToken;
