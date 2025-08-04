import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Cross2Icon } from "@radix-ui/react-icons";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isOpen: boolean;
  onClose?(): void;
  rightAction?: React.ReactNode;
}

export function Modal({
  children,
  title,
  description,
  isOpen,
  onClose,
  rightAction,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-black/80 backdrop-blur-xs data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-40 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl bg-white p-6 shadow-box outline-none data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in">
          <header className="flex h-12 items-center justify-between text-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="flex h-12 w-12 cursor-pointer items-center justify-center outline-gray-400 transition-opacity duration-300 ease-in-out hover:opacity-70"
            >
              <Cross2Icon className="h-6 w-6" />
            </button>

            <Dialog.Title className="text-lg font-bold tracking-[-1px]">
              {title}
            </Dialog.Title>
            <VisuallyHidden>
              <Dialog.Description>{description}</Dialog.Description>
            </VisuallyHidden>

            <div className="flex h-12 w-12 items-center justify-center">
              {rightAction}
            </div>
          </header>

          <div className="space-y-10">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
