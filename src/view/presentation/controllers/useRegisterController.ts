import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/app/schemas/auth/RegisterSchema";

import type { RegisterData } from "@/@types/auth/Register";

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

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
