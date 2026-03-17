'use client';

import ArrowRightIcon from '@/icons/arrowRight.svg';
import Section from '@/app/components/Section';
import ExploreCard from '@/app/components/Cards/ExploreCard';
import { EXPLORE_ITEMS, EXPLORE_LAST_IN_ROW } from './constants';

export default function Explore() {
  return (
    <section
      className="w-full overflow-x-hidden sm:px-6 md:px-8 lg:px-[39px] pt-[37.33px] pb-[63px] bg-[#F8F6EB]"
      aria-labelledby="explore-ghana-heading"
    >
      <Section
        title="Explore Ghana"
        titleId="explore-ghana-heading"
        titleTrailing={<ArrowRightIcon />}
        hideTrailing
      >
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4">
          {EXPLORE_ITEMS.map((item, index) => (
            <ExploreCard
              key={item.id}
              item={item}
              isLastInRow={EXPLORE_LAST_IN_ROW[index]}
            />
          ))}
        </div>
      </Section>
    </section>
  );
}
