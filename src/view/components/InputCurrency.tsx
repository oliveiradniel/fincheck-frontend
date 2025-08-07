import { NumericFormat } from "react-number-format";

import { ErrorInputMessage } from "./ErrorInputMessage";

import { cn } from "@/app/utils/cn";

interface InputCurrencyProps {
  value?: string | number;
  onChange?(value: string): void;
  error?: string;
}

export function InputCurrency({ value, onChange, error }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        thousandSeparator="."
        decimalSeparator=","
        value={value}
        onValueChange={(values) => onChange?.(values.value)}
        className={cn(
          "text-[32px] font-bold tracking-[-1px] text-gray-800 outline-none",
          error && "text-red-500",
        )}
      />

      {error && <ErrorInputMessage error={error} />}
    </div>
  );
}
