'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Slider, { SliderSlide } from '@/app/components/Slider';
import SpotlightCard from '@/app/components/SpotlightCard';

const FOR_YOU_ITEMS = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&q=80',
    alt: 'Live music performance',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: 'Wed, 5th Dec · 10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
    backgroundColor: '#FFFFFF',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    alt: 'Outdoor dinner party',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: 'Wed, 5th Dec · 10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
    backgroundColor: '#FFFFFF',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80',
    alt: 'Fairground at night',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: 'Wed, 5th Dec · 10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
    backgroundColor: '#FFFFFF',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&q=80',
    alt: 'Art gallery',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: 'Wed, 5th Dec · 10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
    backgroundColor: '#FFFFFF',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    alt: 'Concert crowd',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: 'Wed, 5th Dec · 10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
    backgroundColor: '#FFFFFF',
  },
];

export default function ForYou() {
  return (
    <section
      className="w-full px-[42px] sm:px-6 md:px-8 lg:px-16 py-8 bg-[#FEFEFE]"
      aria-labelledby="for-you-heading"
    >
      <div className="w-full mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h2
            id="for-you-heading"
            className="flex items-center gap-[10.5px] text-[18px] font-bold text-[#484848]"
          >
            For you
            <ArrowRightIcon />
          </h2>
        </header>

        <Slider>
          {FOR_YOU_ITEMS.map((item) => (
            <SliderSlide
              key={item.id}
              className="w-[280px]! sm:w-[300px]! md:w-[320px]!"
            >
              <SpotlightCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}
