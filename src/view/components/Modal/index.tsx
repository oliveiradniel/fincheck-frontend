import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
}

export function Modal({ children, title, isOpen }: Props) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-black/80 backdrop-blur-xs data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-40 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl bg-white p-6 shadow-box outline-none">
          <VisuallyHidden>
            <Dialog.Title>{title}</Dialog.Title>
          </VisuallyHidden>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
