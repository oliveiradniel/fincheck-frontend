import { AuthSchema } from "./AuthSchema";

export const LoginSchema = AuthSchema.omit({ name: true });
