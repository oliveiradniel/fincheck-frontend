import { useAccountsController } from "./useAccountsController";

import { TotalBalance } from "./TotalBalance";
import { BankAccounts } from "./BankAccounts";

export function Accounts() {
  const { isLoading } = useAccountsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-moss-green px-4 py-8 md:p-10">
      <TotalBalance isLoading={isLoading} />

      <BankAccounts />
    </div>
  );
}
