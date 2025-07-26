import { QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "./app/contexts/auth/AuthProvider";

import { queryClient } from "./lib/reactQuery";

import { Router } from "./Router";

import { Toaster } from "react-hot-toast";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />

        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}
