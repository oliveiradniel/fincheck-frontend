export interface BankAccount {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: "CHECKING" | "INVESTIMENT" | "CASH";
  currentBalance: number;
}
