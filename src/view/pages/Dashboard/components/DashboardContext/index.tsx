import { createContext } from "react";

interface DashboardContextValue {
  areValuesVisible: boolean;
  onToogleValuesVisibility(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);
