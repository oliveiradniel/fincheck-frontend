import { useDashboardContext } from "../../components/DashboardContext/useDashboardContext";

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    closeNewTransactionModal,
  } = useDashboardContext();

  return {
    isNewTransactionModalOpen,
    newTransactionType,
    closeNewTransactionModal,
  };
}
