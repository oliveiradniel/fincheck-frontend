import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/schemas/auth/LoginSchema";

import type { LoginData } from "@/@types/auth/Login";

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<LoginData>({ resolver: zodResolver(LoginSchema) });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log("chama a API com: ", data);
  });

  return {
    handleSubmit,
    register,
    errors,
    isValid,
  };
}
