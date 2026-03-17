'use client';

import Image from 'next/image';
import StarIcon from '@/icons/star.svg';

export type SpotlightCardItem = {
  id: number;
  image: string;
  alt: string;
  category: string;
  title: string;
  time: string;
  location: string;
  price: string;
  rating?: number | string;
};

type SpotlightCardProps = {
  item: SpotlightCardItem;
  backgroundColor?: string;
};

export default function SpotlightCard({
  item,
  backgroundColor = '#FAF8ED',
}: SpotlightCardProps) {
  return (
    <article
      className="mx-1 border-2 border-[#FFFFFF] group rounded-[16px] px-[7px] py-[8px] overflow-hidden ring-1 ring-black/5 h-full flex flex-col bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[4.7px_4.7px_20px_0px_#0000001A] transition-shadow duration-300"
      style={{ backgroundColor }}
    >
      <div className="relative aspect-4/3 overflow-hidden shrink-0 rounded-[16px]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 320px"
        />
      </div>
      <div className="py-[14px] px-[5.95px] flex flex-col flex-1">
        <span className="inline-flex w-fit px-[9px] py-[5px] rounded-[8px] bg-[#F7E4B6] text-[#000000] text-[11px] font-normal mb-2">
          {item.category}
        </span>
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="text-[12px] font-semibold text-[#2D3134] line-clamp-2 flex-1 min-w-0">
            {item.title}
          </h3>
          {item.rating != null && (
            <span className="inline-flex items-center gap-[5px] shrink-0 text-[10px] font-medium text-[#5B5F62]">
              <StarIcon />
              {String(item.rating)}
            </span>
          )}
        </div>
        <p className="text-[11.9px] text-[#5B5F62] font-normal mb-0.5">
          {item.time}
        </p>
        <p className="text-[11.9px] text-[#5B5F62] font-normal mb-2">
          {item.location}
        </p>
        <p className="text-[11.9px] text-[#2D3134] font-normal mt-auto">
          From <span className="font-semibold">USD {item.price}</span>
        </p>
      </div>
    </article>
  );
}
