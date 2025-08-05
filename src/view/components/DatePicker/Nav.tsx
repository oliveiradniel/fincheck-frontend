import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface NavPros {
  onPreviousClick?: React.MouseEventHandler<HTMLButtonElement>;
  onNextClick?: React.MouseEventHandler<HTMLButtonElement>;
  previousMonth?: Date | undefined;
}

export function Nav({ onPreviousClick, onNextClick, previousMonth }: NavPros) {
  const isJanuary2025 = previousMonth?.getFullYear() === 2024;

  return (
    <div aria-live="polite" className="absolute top-[19px] right-4 flex gap-2">
      <button
        aria-label="Ir para o mês anterior"
        type="button"
        disabled={isJanuary2025}
        onClick={onPreviousClick}
        className="rounded-md p-1 transition-all duration-300 ease-in-out enabled:cursor-pointer enabled:hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeftIcon aria-hidden="true" className="h-6 w-6" />
      </button>
      <button
        aria-label="Ir para o mês posterior"
        type="button"
        onClick={onNextClick}
        className="cursor-pointer rounded-md p-1 transition-colors hover:bg-gray-100"
      >
        <ChevronRightIcon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>
  );
}
