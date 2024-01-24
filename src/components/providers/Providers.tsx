import { ReactNode } from 'react';
import { TanStackQueryProvider } from './TanStackQueryProvider';

export interface IProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return (
    <>
      <TanStackQueryProvider>{children}</TanStackQueryProvider>
    </>
  );
}
