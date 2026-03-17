'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Section from '@/app/components/Section';
import Slider, { SliderSlide } from '@/app/components/Slider';
import SpotlightCard from '@/app/components/Cards/SpotlightCard';
import { SPOTLIGHT_ITEMS, SPOTLIGHT_ROWS } from './constants';

export default function Spotlight() {
  return (
    <section
      className="w-full pr-0 pb-[106px] sm:pl-6 sm:pr-0 md:pl-8 md:pr-0 lg:pl-[39px] lg:pr-0"
      aria-labelledby="spotlight-heading"
    >
      <div className="mx-auto flex w-full flex-col gap-[106px]">
        {SPOTLIGHT_ROWS.map((row) => (
          <Section
            key={row.id}
            title={row.title}
            titleId={row.id === 'tonight' ? 'spotlight-heading' : undefined}
            titleTrailing={<ArrowRightIcon />}
          >
            <Slider>
              {SPOTLIGHT_ITEMS.map((item) => (
                <SliderSlide
                  key={item.id}
                  className="w-[280px]! py-[4px] sm:w-[300px]! md:w-[320px]!"
                >
                  <SpotlightCard item={item} />
                </SliderSlide>
              ))}
            </Slider>
          </Section>
        ))}
      </div>
    </section>
  );
}
