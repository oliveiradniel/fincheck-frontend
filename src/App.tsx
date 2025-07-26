import { QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "./app/contexts/auth/AuthProvider";

import { Router } from "./Router";

import { queryClient } from "./lib/reactQuery";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}
