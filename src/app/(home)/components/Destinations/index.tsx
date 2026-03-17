'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Section from '@/app/components/Section';
import Slider, { SliderSlide } from '@/app/components/Slider';
import DestinationCard from '@/app/components/Cards/DestinationCard';
import {
  DESTINATIONS_ITEMS,
  DESTINATIONS_SLIDER_BREAKPOINTS,
} from './constants';
import { cn } from '@/app/utility/cn';

export default function Destinations() {
  return (
    <section
      className="w-full overflow-x-hidden mx-4 sm:mx-6 md:mx-8 lg:mx-[39px] pb-10 sm:pb-14 md:pb-[100px]"
      aria-labelledby="destinations-heading"
    >
      <Section
        title="Buzzing Destinations"
        titleId="destinations-heading"
        titleTrailing={<ArrowRightIcon />}
      >
        <Slider breakpoints={DESTINATIONS_SLIDER_BREAKPOINTS} spaceBetween={16}>
          {DESTINATIONS_ITEMS.map((item, index) => (
            <SliderSlide
              key={item.id}
              className={cn(
                'w-[280px]! sm:w-[300px]! md:w-[320px]! py-2',
                index === DESTINATIONS_ITEMS.length - 1 &&
                  'mr-[42px]! sm:mr-6! md:mr-8! lg:mr-16!',
              )}
            >
              <DestinationCard item={item} />
            </SliderSlide>
          ))}
        </Slider>
      </Section>
    </section>
  );
}
