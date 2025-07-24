import z from "zod";

export const LoginSchema = z.object({
  email: z
    .email({ error: "Informe um e-mail válido." })
    .nonempty({ error: "O e-mail é obrigatório." }),
  password: z
    .string({ error: "A senha precisa ser uma string." })
    .min(8, { error: "A senha deve conter pelo menos 8 dígitos." })
    .nonempty({ error: "A senha é obrigatória." }),
});
