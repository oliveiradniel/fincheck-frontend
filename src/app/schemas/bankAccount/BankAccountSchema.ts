import z from "zod";

export const BankAccountSchema = z.object({
  name: z
    .string()
    .nonempty({ error: "O nome da conta bancária é obrigatório." }),
  initialBalance: z.union([
    z.string().nonempty({ error: "O saldo inicial é obrigatório." }),
    z.number(),
  ]),
  // .nonnegative({ error: "O saldo inicial não pode ser negativo." }),
  color: z.string().nonempty({ error: "A cor é obrigatória." }),
  type: z.enum(["CHECKING", "INVESTIMENT", "CASH"], {
    error: "Tipo de conta bancária inválido.",
  }),
});
