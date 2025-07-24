import z from "zod";

export const AuthSchema = z.object({
  name: z
    .string({ error: "O nome precisa ser uma string." })
    .nonempty({ error: "O nome é obrigatório." }),
  email: z
    .email({ error: "Informe um e-mail válido." })
    .nonempty({ error: "O e-mail é obrigatório." }),
  password: z
    .string({ error: "A senha precisa ser uma string." })
    .min(8, { error: "A senha deve conter pelo menos 8 dígitos." })
    .nonempty({ error: "A senha é obrigatória." }),
});
