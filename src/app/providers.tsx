'use client';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class'>
      <Theme grayColor='slate' accentColor='crimson' radius='large'>
        {children}
      </Theme>
    </ThemeProvider>
  );
}
