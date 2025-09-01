'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function ClientBody({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
