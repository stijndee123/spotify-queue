import type { Metadata } from 'next';
import { Providers } from '../components/providers/Providers';
import { cn } from '../lib/utils';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Spotify Queue',
  description: "Let's people add songs to your Spotify queue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'h-screen w-full text-zinc-900 antialiased dark:bg-zinc-950 dark:text-white'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
