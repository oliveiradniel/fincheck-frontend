import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "./app/contexts/auth/AuthProvider";

import { Router } from "./Router";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}
