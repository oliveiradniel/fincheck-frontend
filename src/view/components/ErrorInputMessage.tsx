import { CrossCircledIcon } from "@radix-ui/react-icons";

interface ErrorInputMessageProps {
  error: string;
}

export function ErrorInputMessage({ error }: ErrorInputMessageProps) {
  return (
    <div className="mt-2 flex items-center gap-2 text-red-500">
      <CrossCircledIcon aria-hidden="true" />
      <span className="text-xs">{error}</span>
    </div>
  );
}
