import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import type { ReactNode } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { cn } from './utility/cn';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Hexallo',
  description: 'Hexallo landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          montserrat.variable,
          'min-h-screen bg-white text-neutral-900 antialiased',
        )}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="h-[calc(100vh-110px)] overflow-y-auto overflow-x-hidden">
            <main className="mx-auto flex w-full flex-1 flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
