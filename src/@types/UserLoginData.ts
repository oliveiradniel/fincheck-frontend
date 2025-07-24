import type z from "zod";

import type { LoginSchema } from "../app/schemas/LoginSchema";

export type UserLoginData = z.infer<typeof LoginSchema>;
