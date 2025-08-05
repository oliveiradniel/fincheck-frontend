import { DayPicker } from "react-day-picker";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";

import { Nav } from "./Nav";
import { DayButton } from "./DayButton";

interface DatePickerProps {
  value: Date;
  onChange(date: Date): void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <DayPicker
      locale={ptBR}
      selected={value}
      mode="single"
      onSelect={(date) => onChange(date ?? new Date())}
      classNames={{
        month_caption: "py-2",
        caption_label: "font-medium text-gray-900 tracking-[-0.408px]",
        weekday: "uppercase text-xs text-gray-500 font-medium pt-1 pb-2",
      }}
      components={{
        Nav,
        DayButton,
      }}
      formatters={{
        formatCaption: (month, options) => {
          return capitalizeFirstLetter(format(month, "LLLL yyyy", options));
        },
      }}
    ></DayPicker>
  );
}
