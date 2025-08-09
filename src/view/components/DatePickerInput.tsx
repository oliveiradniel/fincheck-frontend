import { useState } from "react";

import { cn } from "@/app/utils/cn";
import { formatDate } from "@/app/utils/formatDate";

import { ErrorInputMessage } from "./ErrorInputMessage";
import { Popover } from "./Popover";
import { DatePicker } from "./DatePicker";

interface DatePickerInputProps {
  value?: Date;
  onChange?(date: Date): void;
  error?: string;
  className?: string;
}

export function DatePickerInput({
  value,
  onChange,
  error,
  className,
}: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());

  function handleChangeDate(date: Date) {
    setSelectedDate(date);
    onChange?.(date);
  }

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger
          className={cn(
            "relative flex h-[52px] w-full cursor-pointer items-center rounded-lg border border-gray-400 bg-white px-3 pt-4 text-gray-700 transition-colors duration-300 ease-in-out outline-none focus:border-gray-800",
            error && "!border-red-500",
            className,
          )}
        >
          <span className="pointer-events-none absolute top-2 left-[13px] text-xs text-gray-700">
            Data
          </span>

          <span>{formatDate(selectedDate)}</span>
        </Popover.Trigger>

        <Popover.Content>
          <DatePicker value={selectedDate} onChange={handleChangeDate} />
        </Popover.Content>
      </Popover.Root>

      {error && <ErrorInputMessage error={error} />}
    </div>
  );
}
