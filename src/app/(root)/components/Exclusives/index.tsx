'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Slider, { SliderSlide } from '@/app/components/Slider';
import ExclusiveCard from '@/app/components/ExclusiveCard';
import type { ExclusiveCardItem } from '@/app/components/ExclusiveCard';

const EXCLUSIVES_ITEMS: ExclusiveCardItem[] = [
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

export default function Exclusives() {
  return (
    <section
      className="w-full px-[42px] sm:px-6 md:px-8 lg:px-16 py-8 bg-[#FEFEFE]"
      aria-labelledby="exclusives-heading"
    >
      <div className="w-full mx-auto flex flex-col gap-6">
        <header className="flex items-center justify-between">
          <h2
            id="exclusives-heading"
            className="flex items-center gap-[10.5px] text-[18px] font-bold text-[#484848]"
          >
            Exclusives
            <ArrowRightIcon />
          </h2>
        </header>

        <Slider>
          {EXCLUSIVES_ITEMS.map((item) => (
            <SliderSlide
              key={item.id}
              className="w-[320px]! sm:w-[400px]! md:w-[500px]! lg:w-[665px]!"
            >
              <ExclusiveCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}
