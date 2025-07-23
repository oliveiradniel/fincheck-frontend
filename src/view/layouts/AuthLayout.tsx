import { Outlet } from "react-router-dom";
import illustration from "../../assets/images/illustration.png";

import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex h-screen">
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-16">
        <Logo className="h-6 text-gray-500" />

        <div className="max-w-[440px + 64px] w-full px-8">
          <Outlet />
        </div>
      </div>

      <div className="relative hidden h-full flex-1 items-center justify-center p-8 lg:flex">
        <img
          aria-hidden="true"
          src={illustration}
          alt=""
          className="h-full max-h-[960px] w-full max-w-[656px] rounded-4xl object-cover select-none"
        />

        <div className="absolute bottom-8 mx-8 max-w-[656px] space-y-6 rounded-b-4xl bg-white p-10">
          <Logo className="h-8 w-auto text-moss-green" />

          <p className="text-xl font-medium text-gray-700">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
