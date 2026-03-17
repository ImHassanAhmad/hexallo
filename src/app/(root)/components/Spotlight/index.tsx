'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Slider, { SliderSlide } from '@/app/components/Slider';
import SpotlightCard from '@/app/components/SpotlightCard';

const SPOTLIGHT_ITEMS = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&q=80',
    alt: 'Live music performance',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    alt: 'Outdoor dinner party',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80',
    alt: 'Fairground at night',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&q=80',
    alt: 'Art gallery',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    alt: 'Concert crowd',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&q=80',
    alt: 'Live music performance',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    alt: 'Outdoor dinner party',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80',
    alt: 'Fairground at night',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&q=80',
    alt: 'Art gallery',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
  {
    id: 10,
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    alt: 'Concert crowd',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
  },
];

const SPOTLIGHT_ROWS = [
  { id: 'tonight', title: "Tonight's Spotlight" },
  { id: 'hot this week', title: 'Hot This Week' },
  { id: 'unmissable ', title: 'Unmissable ' },
];

export default function Spotlight() {
  return (
    <section
      className="w-full pr-0 sm:pl-6 sm:pr-0 md:pl-8 md:pr-0 lg:pl-[39px] lg:pr-0 pb-[106px]"
      aria-labelledby="spotlight-heading"
    >
      <div className="w-full mx-auto flex flex-col gap-[106px]">
        {SPOTLIGHT_ROWS.map((row) => (
          <div key={row.id}>
            <header className="flex items-center justify-between mb-6">
              <h2
                id={row.id === 'tonight' ? 'spotlight-heading' : undefined}
                className="flex items-center gap-[10.5px] text-[18px] font-bold text-[#484848]"
              >
                {row.title}
                <ArrowRightIcon />
              </h2>
            </header>

            <Slider>
              {SPOTLIGHT_ITEMS.map((item) => (
                <SliderSlide
                  key={item.id}
                  className="w-[280px]! sm:w-[300px]! md:w-[320px]! py-[4px]"
                >
                  <SpotlightCard item={item} />
                </SliderSlide>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </section>
  );
}
