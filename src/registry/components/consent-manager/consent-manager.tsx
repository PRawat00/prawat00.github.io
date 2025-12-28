"use client";

import { ConsentManagerProvider, ConsentManagerWidget } from "@c15t/nextjs";

export function ConsentManager({ children }: { children: React.ReactNode }) {
  return (
    <ConsentManagerProvider options={{}}>
      <ConsentManagerWidget />
      {children}
    </ConsentManagerProvider>
  );
}
