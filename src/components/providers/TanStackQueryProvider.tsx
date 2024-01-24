'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export interface IQueryProviderProps {
  children: ReactNode;
}

export function TanStackQueryProvider({ children }: IQueryProviderProps) {
  const [client] = useState(() => new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
