import { DashboardProvider } from "./components/DashboardContext/DashboardProvider";

import { FAB } from "./components/FAB";
import { Accounts } from "./components/Accounts";
import { Transactions } from "./components/Transactions";

import { Logo } from "@/view/components/Logo";
import { UserMenu } from "@/view/components/UserMenu";

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="flex h-screen w-screen flex-col gap-4 p-4 md:p-8 md:pt-6">
        <header className="flex h-12 items-center justify-between">
          <Logo className="h-6 text-moss-green" />
          <UserMenu />
        </header>

        <main className="flex max-h-[calc(100%-48px)] flex-1 flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <Accounts />
          </div>

          <div className="w-full md:w-1/2">
            <Transactions />
          </div>
        </main>

        <FAB />
      </div>
    </DashboardProvider>
  );
}
