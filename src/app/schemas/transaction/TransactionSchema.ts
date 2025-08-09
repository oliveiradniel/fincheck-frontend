import z from "zod";

export const TransactionSchema = z.object({
  value: z.union([
    z.string().nonempty({ error: "Informe o valor." }),
    z.number(),
  ]),
  name: z.string().nonempty({ error: "Informe o nome." }),
  transactionCategoryId: z.string().nonempty({ error: "Informe a categoria." }),
  bankAccountId: z.string().nonempty({ error: "Informe a conta." }),
  date: z.date({ error: "Informe uma data válida para a transação." }),
});
