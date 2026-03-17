'use client';

import Image from 'next/image';

export type DiscoverCardItem = {
  id: number;
  image: string;
  alt: string;
  title: string;
  location: string;
  description: string;
  href?: string;
};

type DiscoverCardProps = {
  item: DiscoverCardItem;
};

export default function DiscoverCard({ item }: DiscoverCardProps) {
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
          <div className="absolute inset-x-0 bottom-0 px-[28px] pb-4 bg-[#2D313480] py-[11.78px]">
            <h3 className="text-[14px] font-semibold text-white leading-snug">
              {item.title}
            </h3>
            <p className="mt-0.5 text-[12px] font-medium text-white/85">
              {item.location}
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-white/80 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
