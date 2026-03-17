import type { DealCardItem } from '@/app/components/Cards/DealCard';

export type { DealCardItem };

export const DEALS: DealCardItem[] = [
  {
    id: 1,
    titleTop: 'New User',
    titleBottom: 'Offer',
    upToText: 'UP TO',
    discountText: '20%',
    image: '/deals.jpg',
  },
  {
    id: 2,
    titleTop: 'Black Friday',
    titleBottom: 'Offers',
    upToText: 'UP TO',
    discountText: '20%',
    image: '/deals.jpg',
  },
  {
    id: 3,
    titleTop: 'New User',
    titleBottom: 'Offer',
    upToText: 'UP TO',
    discountText: '20%',
    image: '/deals.jpg',
  },
];

const END_GUTTER_LG = 39;

export const DEALS_SLIDER_BREAKPOINTS = {
  320: {
    slidesPerView: 'auto' as const,
    spaceBetween: 12,
    slidesOffsetAfter: 52,
  },
  480: {
    slidesPerView: 'auto' as const,
    spaceBetween: 14,
    slidesOffsetAfter: 48,
  },
  640: {
    slidesPerView: 'auto' as const,
    spaceBetween: 14,
    slidesOffsetAfter: 44,
  },
  768: {
    slidesPerView: 'auto' as const,
    spaceBetween: 14,
    slidesOffsetAfter: END_GUTTER_LG,
  },
  1024: {
    slidesPerView: 'auto' as const,
    spaceBetween: 16,
    slidesOffsetAfter: END_GUTTER_LG,
  },
  1280: {
    slidesPerView: 'auto' as const,
    spaceBetween: 18,
    slidesOffsetAfter: END_GUTTER_LG,
  },
};
