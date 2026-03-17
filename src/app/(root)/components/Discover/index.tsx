'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Slider, { SliderSlide } from '@/app/components/Slider';
import DiscoverCard from '@/app/components/DiscoverCard';
import type { DiscoverCardItem } from '@/app/components/DiscoverCard';

const DISCOVER_ITEMS: DiscoverCardItem[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    alt: 'Ancient amphitheater',
    title: 'The Secret Garden Café',
    location: 'Accra',
    description:
      'Hidden courtyard serving organic brunch & live music evenings.',
    href: '#',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=1200&q=80',
    alt: 'Underground venue',
    title: "Napa's Underground Jazz",
    location: 'Accra',
    description: 'Vintage cellar turned into an intimate live stage.',
    href: '#',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
    alt: 'Monument at sunset',
    title: 'Sky Hammock Trail',
    location: 'Bali',
    description: 'Swing over the valley — a serene thrill far from crowds.',
    href: '#',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80',
    alt: 'Colorful stairs outdoors',
    title: 'Rainbow Steps Market',
    location: 'Bali',
    description: 'Local bites, crafts, and views — best at golden hour.',
    href: '#',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    alt: 'Ancient amphitheater',
    title: 'The Secret Garden Café',
    location: 'Accra',
    description:
      'Hidden courtyard serving organic brunch & live music evenings.',
    href: '#',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=1200&q=80',
    alt: 'Underground venue',
    title: "Napa's Underground Jazz",
    location: 'Accra',
    description: 'Vintage cellar turned into an intimate live stage.',
    href: '#',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
    alt: 'Monument at sunset',
    title: 'Sky Hammock Trail',
    location: 'Bali',
    description: 'Swing over the valley — a serene thrill far from crowds.',
    href: '#',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80',
    alt: 'Colorful stairs outdoors',
    title: 'Rainbow Steps Market',
    location: 'Bali',
    description: 'Local bites, crafts, and views — best at golden hour.',
    href: '#',
  },
];

export default function Discover() {
  return (
    <section
      className="w-full sm:mx-6 md:mx-8 lg:mx-[39px] pb-[106px]"
      aria-labelledby="discover-heading"
    >
      <div className="w-full mx-auto flex flex-col gap-6">
        <header className="flex items-center justify-between">
          <h2
            id="discover-heading"
            className="flex items-center gap-[10.5px] text-[18px] font-bold text-[#484848]"
          >
            Discover Hidden Gems
            <ArrowRightIcon />
          </h2>
        </header>

        <Slider>
          {DISCOVER_ITEMS.map((item) => (
            <SliderSlide key={item.id} className="w-[328.18px]! py-2">
              <DiscoverCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}
