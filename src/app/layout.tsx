import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import type { ReactNode } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import JsonLd from './components/JsonLd';
import './globals.css';
import { cn } from './utility/cn';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hexallo.com';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hexallo — Discover Exclusive Travel Deals & Destinations',
    template: '%s | Hexallo',
  },
  description:
    'Explore top travel destinations, exclusive hotel deals, and curated experiences worldwide with Hexallo. Find your perfect getaway and book your dream vacation today.',
  keywords: [
    'travel deals',
    'hotel deals',
    'vacation packages',
    'travel destinations',
    'exclusive travel',
    'holiday booking',
    'luxury travel',
    'Hexallo',
  ],
  authors: [{ name: 'Hexallo', url: SITE_URL }],
  creator: 'Hexallo',
  publisher: 'Hexallo LLC',
  category: 'travel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Hexallo',
    title: 'Hexallo — Discover Exclusive Travel Deals & Destinations',
    description:
      'Explore top travel destinations, exclusive hotel deals, and curated experiences worldwide with Hexallo. Find your perfect getaway and book your dream vacation today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hexallo — Discover Exclusive Travel Deals & Destinations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hexallo — Discover Exclusive Travel Deals & Destinations',
    description:
      'Explore top travel destinations, exclusive hotel deals, and curated experiences with Hexallo.',
    images: ['/og-image.png'],
    creator: '@hexallo',
    site: '@hexallo',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#AE7029',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
        <JsonLd />
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
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
