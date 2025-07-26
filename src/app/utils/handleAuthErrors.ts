import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface AuthErrorsParams {
  type: "signin" | "signup";
  error: unknown | AxiosError;
}

const knownErrors = new Map<string, string>([
  ["Invalid credentials.", "E-mail ou senha incorretos"],
  ["This email is already in use.", "E-mail já em uso."],
]);

export function handleAuthErrors({
  type,
  error,
}: AuthErrorsParams): string | null {
  if (error instanceof AxiosError) {
    const message = error.response?.data?.message;

    if (typeof message === "string") {
      for (const [key, userMessage] of knownErrors) {
        if (message.includes(key)) {
          return userMessage;
        }
      }
    }
  }

  toast.error(
    `Não foi possível ${type === "signin" ? "fazer login" : "concluir seu cadastro"}. Tente novamente mais tarde.`,
  );

  return null;
}
