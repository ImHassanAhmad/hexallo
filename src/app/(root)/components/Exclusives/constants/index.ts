import type { ExclusiveCardItem } from '@/app/components/Cards/ExclusiveCard';

export const EXCLUSIVES_ITEMS: ExclusiveCardItem[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
    alt: 'Indoor bar or restaurant at night',
    title: 'Private Tours',
    description:
      'Your guide to the most happening events this weekend—from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    alt: 'People in shallow water at beach',
    title: 'Private Tours',
    description:
      'Your guide to the most happening events this weekend—from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    alt: 'Outdoor dinner party',
    title: 'Private Tours',
    description:
      'Your guide to the most happening events this weekend—from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    alt: 'Fairground at night',
    title: 'Private Tours',
    description:
      'Your guide to the most happening events this weekend—from concerts to pop-ups.',
    href: '#',
  },
];

export const EXCLUSIVES_SLIDER_BREAKPOINTS = {
  320: { slidesPerView: 1.1 },
  480: { slidesPerView: 1.35 },
  640: { slidesPerView: 1.6 },
  768: { slidesPerView: 1.5 },
  1024: { slidesPerView: 1.55 },
  1280: { slidesPerView: 1.95 },
};
