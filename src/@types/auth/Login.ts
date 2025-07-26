import type z from "zod";

import type { LoginSchema } from "@/app/schemas/auth/LoginSchema";

export type LoginData = z.infer<typeof LoginSchema>;

export type SignInParams = LoginData;
