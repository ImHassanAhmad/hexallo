'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Section from '@/app/components/Section';
import Slider, { SliderSlide } from '@/app/components/Slider';
import DiscoverCard from '@/app/components/Cards/DiscoverCard';
import { DISCOVER_ITEMS } from './constants';

export default function Discover() {
  return (
    <section
      className="w-full mx-4 sm:mx-6 md:mx-8 lg:mx-[39px] pb-10 sm:pb-16 md:pb-[106px]"
      aria-labelledby="discover-heading"
    >
      <Section
        title="Discover Hidden Gems"
        titleId="discover-heading"
        titleTrailing={<ArrowRightIcon />}
      >
        <Slider>
          {DISCOVER_ITEMS.map((item) => (
            <SliderSlide key={item.id} className="w-[280px]! sm:w-[300px]! md:w-[328px]! py-2">
              <DiscoverCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </Section>
    </section>
  );
}
