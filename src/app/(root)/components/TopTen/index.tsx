'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Slider, { SliderSlide } from '@/app/components/Slider';
import SpotlightCard, {
  type SpotlightCardItem,
} from '@/app/components/SpotlightCard';

const TOP_TEN_ITEMS: SpotlightCardItem[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'Outdoor event with traditional attire',
    category: 'Event',
    title: 'DJ Liv North Live',
    time: 'Wed, 5th Dec · 10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    alt: 'Historic fortress by coastline',
    category: 'Tour',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Quad bikes in landscape',
    category: 'Activity',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    alt: 'Hair braiding',
    category: 'Indulge',
    title: 'DJ Liv North Live',
    time: 'Wed, 5th Dec · 10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    alt: 'Plate of food',
    category: 'Indulge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    alt: 'Landmark and flag',
    category: 'Tour',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    alt: 'Modern interior lounge',
    category: 'Event',
    title: 'DJ Liv North Live',
    time: 'Wed, 5th Dec · 10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    alt: 'Hotel building at night',
    category: 'Indulge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    alt: 'Fairground at night',
    category: 'Activity',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
  {
    id: 10,
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    alt: 'Concert crowd',
    category: 'Event',
    title: 'DJ Liv North Live',
    time: 'Wed, 5th Dec · 10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: '89',
    rating: 4.8,
  },
];

export default function TopTen() {
  return (
    <section
      className="bg-[#F8F6EB] w-full overflow-x-hidden pl-[39px] pb-8"
      aria-labelledby="top-ten-heading"
    >
      <div className="w-full mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h2
            id="top-ten-heading"
            className="flex items-center gap-[10.5px] text-[18px] font-bold text-[#484848]"
          >
            Ghana&apos;s Top 10s
            <ArrowRightIcon />
          </h2>
        </header>

        <Slider>
          {TOP_TEN_ITEMS.map((item) => (
            <SliderSlide
              key={item.id}
              className="w-[280px]! sm:w-[300px]! md:w-[320px]! py-2"
            >
              <SpotlightCard item={item} backgroundColor="#FAF8ED" />
            </SliderSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}
