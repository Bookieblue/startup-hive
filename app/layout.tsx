import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';

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
        <Navbar />
        <main
          className="relative 
        overflow-hidden"
        >
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
