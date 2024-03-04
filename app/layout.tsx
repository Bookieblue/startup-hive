import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import TansStackProvider from '@/components/providers/TanStackProvider';
import ReduxProvider from '@/components/providers/ReduxProvider';

export const metadata: Metadata = {
  title: 'Startup Hive App',
  description: 'Hive for startup in Africa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TansStackProvider>
          <ReduxProvider>
            <main className="overflow-hidden">{children}</main>
            <Toaster />
          </ReduxProvider>
        </TansStackProvider>
      </body>
    </html>
  );
}
