'use client';

import Image from 'next/image';
import FullArrowRightIcon from '@/icons/fullArrowRight.svg';

export type ExclusiveCardItem = {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  href?: string;
};

type ExclusiveCardProps = {
  item: ExclusiveCardItem;
};

export default function ExclusiveCard({ item }: ExclusiveCardProps) {
  return (
    <article className="mx-1 group h-full flex flex-col overflow-hidden rounded-2xl">
      <div className="relative w-full aspect-665/316 overflow-hidden rounded-2xl shrink-0">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 665px"
        />
        <div className="bg-[#2D313480] absolute inset-x-0 bottom-0 h-[111px] flex flex-col justify-end gap-2 py-[23px] px-[27px] text-left">
          <h3 className="text-[16px] font-bold text-white">{item.title}</h3>
          <p className="text-[12px] font-medium leading-snug text-white/90">
            {item.description}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-white">
            Explore Now
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <FullArrowRightIcon />
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
