"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
};

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ContextProvider({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>{children}</div>
    </QueryClientProvider>
  );
}
