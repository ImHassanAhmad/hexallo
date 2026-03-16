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
  /** Optional rating (e.g. 4.8) shown with star icon */
  rating?: number | string;
  /** Optional card background color (e.g. '#FFFFFF' or 'white') */
  backgroundColor?: string;
};

type SpotlightCardProps = {
  item: SpotlightCardItem;
};

export default function SpotlightCard({ item }: SpotlightCardProps) {
  const bgColor = item.backgroundColor ?? '#FAF8ED';

  return (
    <article
      className="border-2 border-[#FFFFFF] group rounded-[16px] px-[7px] py-[10px] overflow-hidden shadow-[0px_24px_90px_0px_#C0BCA138] transition-shadow h-full flex flex-col"
      style={{ backgroundColor: bgColor }}
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
            <span className="inline-flex items-center gap-0.5 shrink-0 text-[10px] font-medium text-[#5B5F62]">
              <StarIcon className="w-3 h-3 text-[#E8B923]" />
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
