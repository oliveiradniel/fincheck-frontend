import type z from "zod";

import type { RegisterSchema } from "../../app/schemas/auth/RegisterSchema";

export type RegisterData = z.infer<typeof RegisterSchema>;
