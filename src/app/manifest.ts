import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hexallo — Exclusive Travel Deals & Destinations',
    short_name: 'Hexallo',
    description:
      'Explore top travel destinations, exclusive hotel deals, and curated experiences worldwide with Hexallo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#AE7029',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
