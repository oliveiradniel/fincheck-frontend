import { useAuthContext } from "@/app/hooks/useAuthContext";

export function Dashboard() {
  const { clearSession } = useAuthContext();

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button type="button" onClick={clearSession}>
        Sair
      </button>
    </div>
  );
}
