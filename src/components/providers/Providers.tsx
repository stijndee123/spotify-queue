import { ReactNode } from 'react';
import { TanStackQueryProvider } from './TanStackQueryProvider';
import { ThemeProvider } from './ThemeProvider';

export interface IProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <TanStackQueryProvider>{children}</TanStackQueryProvider>
      </ThemeProvider>
    </>
  );
}
