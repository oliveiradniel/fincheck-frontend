import { FilterIcon } from "@/view/components/icons/FilterIcon";

interface FilterButtonProps {
  isDisabled: boolean;
}

export function FilterButton({ isDisabled }: FilterButtonProps) {
  return (
    <button
      aria-label="Abrir modal para aplicar filtro"
      type="button"
      disabled={isDisabled}
      className="cursor-pointer transition-opacity duration-300 ease-in-out disabled:cursor-default disabled:opacity-60"
    >
      <FilterIcon />
    </button>
  );
}
