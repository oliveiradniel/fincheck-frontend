import { useCallback, useState } from "react";

import { DashboardContext } from ".";

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const LOCAL_STORAGE_KEY = "__a_v_v";

  const [areValuesVisible, setAreValuesVisible] = useState<boolean>(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (value) return JSON.parse(value);

    return true;
  });

  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);

  const handleToogleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(!prevState));

      return !prevState;
    });
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        isNewAccountModalOpen,
        onToogleValuesVisibility: handleToogleValuesVisibility,
        openNewAccountModal,
        closeNewAccountModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
