import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Hexallo',
  description: 'Hexallo landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${inter.className} min-h-screen bg-white text-neutral-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="mx-auto flex w-full flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
