'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Section from '@/app/components/Section';
import Slider, { SliderSlide } from '@/app/components/Slider';
import SpotlightCard from '@/app/components/Cards/SpotlightCard';
import { TOP_TEN_ITEMS } from './constants';

export default function TopTen() {
  return (
    <section
      className="bg-[#F8F6EB] w-full overflow-x-hidden pl-[39px] pb-8"
      aria-labelledby="top-ten-heading"
    >
      <Section
        title="Ghana's Top 10s"
        titleId="top-ten-heading"
        titleTrailing={<ArrowRightIcon />}
      >
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
      </Section>
    </section>
  );
}
