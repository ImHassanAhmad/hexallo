'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Section from '@/app/components/Section';
import Slider, { SliderSlide } from '@/app/components/Slider';
import SpotlightCard from '@/app/components/Cards/SpotlightCard';
import { FOR_YOU_ITEMS } from './constants';

export default function ForYou() {
  return (
    <section
      className="w-full overflow-x-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-[39px] py-10 sm:py-16 md:py-[106px]"
      aria-labelledby="for-you-heading"
    >
      <Section
        title="For you"
        titleId="for-you-heading"
        titleTrailing={<ArrowRightIcon />}
      >
        <Slider>
          {FOR_YOU_ITEMS.map((item) => (
            <SliderSlide
              key={item.id}
              className="w-[280px]! sm:w-[300px]! md:w-[320px]! py-2"
            >
              <SpotlightCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </Section>
    </section>
  );
}
