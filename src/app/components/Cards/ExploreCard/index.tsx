import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/app/utility/cn';

export type ExploreCardItem = {
  id: number;
  title: string;
  image: string;
  alt: string;
  href?: string;
  span: 2 | 3;
};

const cardClass = (span: ExploreCardItem['span']) =>
  cn(
    'group relative block overflow-hidden rounded-[16.27px] bg-[#F0F0F0] min-h-[200px] sm:min-h-[240px] md:min-h-[230px]',
    span === 3 ? 'md:col-span-3' : 'md:col-span-2',
  );

export default function ExploreCard({
  item,
  isLastInRow,
}: {
  item: ExploreCardItem;
  isLastInRow?: boolean;
}) {
  const content = (
    <>
      <div className="relative w-full max-h-[230px] h-full min-h-[200px] sm:min-h-[240px] md:min-h-[230px]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className={cn(
            'flex items-center pr-[16px] h-[21px] absolute top-[21.37px] left-[27.9px] rounded-full px-[11px] text-[12.86px] font-medium',
            isLastInRow ? 'bg-[#2D3134] text-white' : 'bg-white text-[#2D3134]',
          )}
        >
          3.5
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 via-black/30 to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="absolute bottom-[22.92px] left-[27.9px]">
          <h3 className="text-white text-[12.05px] font-semibold text-base sm:text-lg leading-tight">
            {item.title}
          </h3>
          <p className="text-white text-[10.33px] font-normal mt-0.5">
            Explore
          </p>
        </div>
      </div>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={cardClass(item.span)}>
        {content}
      </Link>
    );
  }
  return <div className={cardClass(item.span)}>{content}</div>;
}
