import { PlusIcon } from "@radix-ui/react-icons";

export function EmptyAccounts() {
  return (
    <>
      <div className="mb-4 animate-fade-in">
        <strong className="text-lg tracking-[-1px] text-white">
          Minhas contas
        </strong>
      </div>

      <button className="group flex h-52 cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-teal-600 text-white">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-white transition-opacity duration-300 ease-in-out group-hover:opacity-80">
          <PlusIcon className="h-6 w-6" />
        </div>
        <span className="w-32 text-center font-medium tracking-[-0.5px] transition-opacity duration-300 ease-in-out group-hover:opacity-80">
          Cadastre uma nova conta
        </span>
      </button>
    </>
  );
}
