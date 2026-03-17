'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Section from '@/app/components/Section';
import Slider, { SliderSlide } from '@/app/components/Slider';
import ExclusiveCard from '@/app/components/Cards/ExclusiveCard';
import { EXCLUSIVES_ITEMS, EXCLUSIVES_SLIDER_BREAKPOINTS } from './constants';

export default function Exclusives() {
  return (
    <section
      className="w-full sm:mx-6 md:mx-8 lg:mx-[39px] pb-8"
      aria-labelledby="exclusives-heading"
    >
      <Section
        title="Exclusives"
        titleId="exclusives-heading"
        titleTrailing={<ArrowRightIcon />}
      >
        <Slider breakpoints={EXCLUSIVES_SLIDER_BREAKPOINTS}>
          {EXCLUSIVES_ITEMS.map((item) => (
            <SliderSlide
              key={item.id}
              className="w-[320px]! sm:w-[400px]! md:w-[500px]! lg:w-[665px]! py-2"
            >
              <ExclusiveCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </Section>
    </section>
  );
}
