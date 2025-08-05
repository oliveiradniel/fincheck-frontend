import type { CalendarDay, Modifiers } from "react-day-picker";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { cn } from "@/app/utils/cn";

interface DayButtonProps {
  day: CalendarDay;
  modifiers: Modifiers;
}

export function DayButton({ day, modifiers, ...props }: DayButtonProps) {
  const isSelected = modifiers.selected;
  const isToday = modifiers.today;

  return (
    <button
      {...props}
      tabIndex={0}
      aria-label={format(day.date, "d 'de' MMMM yyyy", {
        locale: ptBR,
      })}
      aria-current={isSelected ? "date" : undefined}
      className={cn(
        "h-10 w-10 cursor-pointer rounded-full text-center text-gray-700 transition-colors hover:bg-teal-100",
        isSelected && "cursor-default !bg-moss-green font-medium !text-white",
        isToday && "bg-gray-100 font-bold text-gray-900",
      )}
    >
      {day.date.getDate()}
    </button>
  );
}
