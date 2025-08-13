import { useDashboardContext } from "../DashboardContext/useDashboardContext";
import { useBankAccountsController } from "./useBankAccountsController";

import { cn } from "@/app/utils/cn";
import { formatCurrency } from "@/app/utils/formatCurrency";

import { Loader } from "@/view/components/Loader";
import { EyeIcon } from "@/view/components/icons/EyeIcon";

interface TotalBalanceProps {
  isLoading: boolean;
}

export function TotalBalance({ isLoading }: TotalBalanceProps) {
  const { areValuesVisible, onToogleValuesVisibility } = useDashboardContext();

  const { totalBalance, isRefetchingBankAccounts } =
    useBankAccountsController();

  return (
    <div className="flex flex-col text-white">
      <span className="tracking-[-0.5px]">Saldo total</span>

      <div
        role="region"
        aria-labelledby="sald"
        className={cn("flex items-center gap-2", isLoading && "gap-4")}
      >
        <strong
          id="sald"
          className={cn(
            "text-2xl tracking-[-1px] transition-all duration-300 ease-in-out",
            (!areValuesVisible || isLoading) && "blur-sm",
          )}
        >
          {isLoading ? "-------" : formatCurrency(totalBalance)}
        </strong>

        {(isLoading || isRefetchingBankAccounts) && (
          <Loader className={"h-4 w-4"} />
        )}

        {!isLoading && !isRefetchingBankAccounts && (
          <button
            aria-expanded={areValuesVisible}
            aria-label={
              areValuesVisible
                ? "Esconder valores numéricos"
                : "Mostrar valores numéricos"
            }
            type="button"
            disabled={isLoading}
            onClick={onToogleValuesVisibility}
            className="flex h-8 w-8 animate-fade-in cursor-pointer items-center justify-center disabled:cursor-default"
          >
            <EyeIcon open={!areValuesVisible} />
          </button>
        )}
      </div>
    </div>
  );
}
