import { useDashboardContext } from "../../components/DashboardContext/useDashboardContext";

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboardContext();

  return { isNewAccountModalOpen, closeNewAccountModal };
}
