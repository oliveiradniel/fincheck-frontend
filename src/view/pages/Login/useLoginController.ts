import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../../app/schemas/LoginSchema";

import type { UserLoginData } from "../../../@types/UserLoginData";

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<UserLoginData>({ resolver: zodResolver(LoginSchema) });

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
