import type { ExploreCardItem } from '@/app/components/Cards/ExploreCard';

export type { ExploreCardItem };

export const EXPLORE_ITEMS: ExploreCardItem[] = [
  {
    id: 1,
    title: 'Events',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'Outdoor event with traditional attire',
    span: 2,
  },
  {
    id: 2,
    title: 'Activities',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Quad bikes in landscape',
    span: 2,
  },
  {
    id: 3,
    title: 'Restaurants',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    alt: 'Plate of food',
    span: 2,
  },
  {
    id: 4,
    title: 'Tours',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    alt: 'Historic fortress by coastline',
    span: 3,
  },
  {
    id: 5,
    title: 'Services',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    alt: 'Hair braiding',
    span: 3,
  },
  {
    id: 6,
    title: 'Destinations',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    alt: 'Landmark and flag',
    span: 2,
  },
  {
    id: 7,
    title: 'Places',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    alt: 'Modern interior lounge',
    span: 2,
  },
  {
    id: 8,
    title: 'Accommodations',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    alt: 'Hotel building at night',
    span: 2,
  },
];

const COLS = 6;
export const EXPLORE_LAST_IN_ROW = (() => {
  let col = 0;
  return EXPLORE_ITEMS.map((item: ExploreCardItem) => {
    const isLast = col + item.span === COLS;
    col = (col + item.span) % COLS;
    return isLast;
  });
})();
