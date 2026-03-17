'use client';

import Image from 'next/image';
import FullArrowRightIcon from '@/icons/fullArrowRight.svg';

export type GlobalHighlightCardItem = {
  id: number;
  image: string;
  alt: string;
  title: string;
  location: string;
  href?: string;
};

type GlobalHighlightCardProps = {
  item: GlobalHighlightCardItem;
};

export default function GlobalHighlightCard({
  item,
}: GlobalHighlightCardProps) {
  return (
    <article className="mx-1 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[4.7px_4.7px_29.4px_0px_#0000001A] transition-shadow duration-300 group h-[361.36px] w-[328.18px] overflow-hidden rounded-2xl bg-[#F0F0F0]">
      <div className="relative h-full w-full">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 280px, 328px"
        />

        <div className="absolute inset-x-0 bottom-0">
          <div className="absolute inset-x-0 bottom-0 px-4 pb-4 bg-[#2D313480] py-[11.78px]">
            <p className="text-[11.27px] font-semibold text-white">
              {item.location}
            </p>
            <h3 className="text-[12.14px] font-bold text-white leading-snug mt-0.5">
              {item.title}
            </h3>
            <span className="mt-1 inline-flex items-center gap-1 text-[9.54px] font-medium text-white">
              Explore Now{' '}
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                <FullArrowRightIcon />
              </span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
