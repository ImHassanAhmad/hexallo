'use client';

import Image from 'next/image';
import { cn } from '@/app/utility/cn';

export type DealCardItem = {
  id: number;
  titleTop: string;
  titleBottom: string;
  upToText: string;
  discountText: string;
  image: string;
};

type DealCardProps = {
  item: DealCardItem;
  active: boolean;
  onClick?: () => void;
};

export default function DealCard({ item, active, onClick }: DealCardProps) {
  return (
    <article
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        'relative overflow-hidden rounded-[16px] bg-[#F0F0F0]',
        'h-[300px] w-[300px] sm:h-[320px] sm:w-[320px]',
        'shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.13)] transition-all duration-300',
        onClick ? 'cursor-pointer select-none hover:scale-[1.02]' : undefined,
        active ? 'border-[5px] border-[#EFC96D]' : 'border-0',
      )}
    >
      <Image
        src={item.image}
        alt={`${item.titleTop} ${item.titleBottom}`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 300px, 320px"
        priority={active}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-[24.92px] sm:text-[20px] font-black text-[#484848]">
          {item.titleTop}
        </p>
        <p className="text-[24.92px] sm:text-[20px] font-semibold text-[#484848]">
          {item.titleBottom}
        </p>
        <p className="mt-3 text-[12px] font-semibold tracking-[0.18em] text-[#484848]/80">
          {item.upToText}
        </p>
        <p className="mt-1 text-[14.95px] font-semibold sm:text-[20px] text-[#484848]">
          <span className="text-[24.92px] font-bold">{item.discountText}</span>{' '}
          OFF
        </p>
      </div>
    </article>
  );
}
