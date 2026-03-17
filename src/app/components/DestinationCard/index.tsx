'use client';

import Image from 'next/image';

export type DestinationCardItem = {
  id: number;
  image: string;
  alt: string;
  title: string;
  /** e.g. "1.2k check-ins this week" */
  stat: string;
  description: string;
  href?: string;
};

type DestinationCardProps = {
  item: DestinationCardItem;
};

export default function DestinationCard({ item }: DestinationCardProps) {
  return (
    <article className="mx-1 group h-full flex flex-col overflow-hidden rounded-2xl bg-white border-[2.08px] border-solid border-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[4.7px_4.7px_29.4px_0px_#0000001A]">
      <div className="relative w-full aspect-4/3 overflow-hidden rounded-t-2xl shrink-0 bg-[#F0F0F0]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 320px"
        />
      </div>
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <h3 className="text-[13.13px] font-semibold text-[#2D3134] leading-tight">
          {item.title}
        </h3>
        <p className="text-[13.02px] font-medium text-[#00000080]">
          {item.stat}
        </p>
        <p className="text-[13.02px] font-medium text-[#00000080]">
          {item.description}
        </p>
      </div>
    </article>
  );
}
