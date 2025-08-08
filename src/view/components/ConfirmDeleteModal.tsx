import { Button } from "./Button";
import { TrashIcon } from "./icons/TrashIcon";
import { Modal } from "./Modal";

interface ConfirmDeleteModalProps {
  title: string;
  subtitle?: string;
  description: string;
  onConfirm(): void;
  onClose(): void;
}

export function ConfirmDeleteModal({
  title,
  subtitle,
  description,
  onConfirm,
  onClose,
}: ConfirmDeleteModalProps) {
  return (
    <Modal isOpen onClose={onClose} title="Excluir" description={description}>
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-red-50">
          <TrashIcon className="h-6 w-6 text-red-700" />
        </div>

        <p className="max-w-[180px] text-center font-bold tracking-[-0.5px] text-gray-800">
          {title}
        </p>

        {subtitle && (
          <p className="text-center tracking-[-0.5px] text-gray-800">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mt-10 space-y-4">
        <Button variant="danger" onClick={onConfirm} className="w-full">
          Sim, desejo excluir
        </Button>
        <Button variant="ghost" onClick={onClose} className="w-full">
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
