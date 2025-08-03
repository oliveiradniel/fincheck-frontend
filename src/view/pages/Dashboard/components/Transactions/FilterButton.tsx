import type { ComponentProps } from "react";

import { FilterIcon } from "@/view/components/icons/FilterIcon";

// interface FilterButtonProps extends ComponentProps<'button'> {
//   isDisabled: boolean;
// }

export function FilterButton({ ...props }: ComponentProps<"button">) {
  return (
    <button
      {...props}
      aria-label="Abrir modal para aplicar filtro"
      type="button"
      className="cursor-pointer transition-opacity duration-300 ease-in-out disabled:cursor-default disabled:opacity-60"
    >
      <FilterIcon />
    </button>
  );
}
