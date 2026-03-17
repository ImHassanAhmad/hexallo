'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Slider, { SliderSlide } from '@/app/components/Slider';
import DestinationCard from '@/app/components/DestinationCard';
import type { DestinationCardItem } from '@/app/components/DestinationCard';

const DESTINATIONS_ITEMS: DestinationCardItem[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    alt: 'Paris cityscape',
    title: 'Paris',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    alt: 'Coastal destination',
    title: 'Amalfi Coast',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    alt: 'Tower Bridge and The Shard in London',
    title: 'London',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    alt: 'Dubai skyline at night',
    title: 'Dubai',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    alt: 'Outdoor dinner party',
    title: 'Santorini',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    alt: 'Paris cityscape',
    title: 'Paris',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    alt: 'Coastal destination',
    title: 'Amalfi Coast',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    alt: 'Tower Bridge and The Shard in London',
    title: 'London',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    alt: 'Dubai skyline at night',
    title: 'Dubai',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
  {
    id: 10,
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    alt: 'Outdoor dinner party',
    title: 'Santorini',
    stat: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    href: '#',
  },
];

const DESTINATIONS_SLIDER_BREAKPOINTS = {
  320: { slidesPerView: 1.15 },
  480: { slidesPerView: 1.6 },
  640: { slidesPerView: 2.2 },
  768: { slidesPerView: 2.5 },
  1024: { slidesPerView: 3.2 },
  1280: { slidesPerView: 4 },
};

export default function Destinations() {
  return (
    <section
      className="w-full overflow-x-hidden sm:mx-6 md:mx-8 lg:mx-[39px] pb-[100px]"
      aria-labelledby="destinations-heading"
    >
      <div className="w-full mx-auto flex flex-col gap-6">
        <header className="flex items-center justify-between">
          <h2
            id="destinations-heading"
            className="flex items-center gap-[10.5px] text-[18px] font-bold text-[#484848]"
          >
            Buzzing Destinations
            <ArrowRightIcon />
          </h2>
        </header>

        <Slider breakpoints={DESTINATIONS_SLIDER_BREAKPOINTS} spaceBetween={16}>
          {DESTINATIONS_ITEMS.map((item, index) => (
            <SliderSlide
              key={item.id}
              className={`w-[280px]! sm:w-[300px]! md:w-[320px]! py-2 ${index === DESTINATIONS_ITEMS.length - 1 ? 'mr-[42px]! sm:mr-6! md:mr-8! lg:mr-16!' : ''}`}
            >
              <DestinationCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}
