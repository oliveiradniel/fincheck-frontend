import { useBankAccountsController } from "./useBankAccountsController";

import { TotalBalance } from "./TotalBalance";
import { BankAccountsList } from "./BankAccountsList";

export function BankAccounts() {
  const { isLoadingBankAccounts } = useBankAccountsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-moss-green px-4 py-8 md:p-10">
      <TotalBalance isLoading={isLoadingBankAccounts} />

      <BankAccountsList />
    </div>
  );
}
