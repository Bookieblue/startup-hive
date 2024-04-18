import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import TansStackProvider from '@/components/providers/TanStackProvider';


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
            <main className="overflow-hidden">{children}</main>
            <Toaster />
        </TansStackProvider>
      </body>
    </html>
  );
}
