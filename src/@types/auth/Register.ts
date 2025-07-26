import type z from "zod";

import type { RegisterSchema } from "@/app/schemas/auth/RegisterSchema";

import type { AccessToken } from "./AccessToken";

export type RegisterData = z.infer<typeof RegisterSchema>;

export type SignUpParams = RegisterData;

export type SignUpResponse = { accessToken: AccessToken };
