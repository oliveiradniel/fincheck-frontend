import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  rightAction?: React.ReactNode;
}

export function Modal({ children, title, isOpen, rightAction }: ModalProps) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-black/80 backdrop-blur-xs data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-40 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl bg-white p-6 shadow-box outline-none">
          <header className="flex h-12 items-center justify-between text-gray-800">
            <button
              type="submit"
              className="flex h-12 w-12 items-center justify-center"
            >
              <Cross2Icon className="h-6 w-6" />
            </button>

            <Dialog.Title className="text-lg font-bold tracking-[-1px]">
              {title}
            </Dialog.Title>

            <div className="flex h-12 w-12 items-center justify-center">
              {rightAction}
            </div>
          </header>

          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
