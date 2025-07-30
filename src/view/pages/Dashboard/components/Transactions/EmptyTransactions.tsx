import emptyState from "@/assets/images/empty-state.svg";

export function EmptyTransactions() {
  return (
    <div className="flex h-full animate-fade-in flex-col items-center justify-center">
      <img aria-hidden="true" src={emptyState} alt="" />

      <span className="text-gray-700">Não encontramos nenhuma transação!</span>
    </div>
  );
}
