'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Slider, { SliderSlide } from '@/app/components/Slider';
import GlobalHighlightCard, {
  GlobalHighlightCardItem,
} from '@/app/components/GlobalHighlightCard';

const GLOBAL_HIGHLIGHT_ITEMS: GlobalHighlightCardItem[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    alt: 'White mosque architecture',
    location: 'Paris',
    title: 'Culinary nights & art walks',
    href: '#',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&q=80',
    alt: 'Temple at night',
    location: 'Tokyo',
    title: 'Hidden rooftop bars & pop-up events',
    href: '#',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
    alt: 'Historic landmark with visitors',
    location: 'New York',
    title: 'Adventure escapes & wine tours',
    href: '#',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    alt: 'Large statue overlooking landscape',
    location: 'New York',
    title: 'Adventure escapes & wine tours',
    href: '#',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    alt: 'White mosque architecture',
    location: 'Paris',
    title: 'Culinary nights & art walks',
    href: '#',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200&q=80',
    alt: 'Temple at night',
    location: 'Tokyo',
    title: 'Hidden rooftop bars & pop-up events',
    href: '#',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
    alt: 'Historic landmark with visitors',
    location: 'New York',
    title: 'Adventure escapes & wine tours',
    href: '#',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    alt: 'Large statue overlooking landscape',
    location: 'New York',
    title: 'Adventure escapes & wine tours',
    href: '#',
  },
];

export default function GlobalHighlights() {
  return (
    <section
      className="w-full sm:mx-6 md:mx-8 lg:mx-[39px] pt-[100px] pb-[141px]"
      aria-labelledby="global-highlights-heading"
    >
      <div className="w-full mx-auto flex flex-col gap-6">
        <header className="flex items-center justify-between">
          <h2
            id="global-highlights-heading"
            className="flex items-center gap-[10.5px] text-[18px] font-bold text-[#484848]"
          >
            Global Highlights
            <ArrowRightIcon />
          </h2>
        </header>

        <Slider>
          {GLOBAL_HIGHLIGHT_ITEMS.map((item) => (
            <SliderSlide key={item.id} className="w-[328.18px]! py-2">
              <GlobalHighlightCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}
