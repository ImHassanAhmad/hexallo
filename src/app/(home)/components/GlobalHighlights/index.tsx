'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Section from '@/app/components/Section';
import Slider, { SliderSlide } from '@/app/components/Slider';
import GlobalHighlightCard from '@/app/components/Cards/GlobalHighlightCard';
import { GLOBAL_HIGHLIGHTS_ITEMS } from './constants';

export default function GlobalHighlights() {
  return (
    <section
      className="w-full mx-4 sm:mx-6 md:mx-8 lg:mx-[39px] pt-10 pb-12 sm:pt-14 sm:pb-16 md:pt-[100px] md:pb-[141px]"
      aria-labelledby="global-highlights-heading"
    >
      <Section
        title="Global Highlights"
        titleId="global-highlights-heading"
        titleTrailing={<ArrowRightIcon />}
      >
        <Slider>
          {GLOBAL_HIGHLIGHTS_ITEMS.map((item) => (
            <SliderSlide key={item.id} className="w-[280px]! sm:w-[300px]! md:w-[328px]! py-2">
              <GlobalHighlightCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </Section>
    </section>
  );
}
