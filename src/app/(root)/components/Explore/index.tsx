'use client';

import Image from 'next/image';
import Link from 'next/link';

export type ExploreCategory = {
  id: number;
  title: string;
  image: string;
  alt: string;
  href?: string;
  /** Grid span: 2 for 3-per-row, 3 for 2-per-row */
  span: 2 | 3;
};

const EXPLORE_ITEMS: ExploreCategory[] = [
  {
    id: 1,
    title: 'Events',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'Outdoor event with traditional attire',
    span: 2,
  },
  {
    id: 2,
    title: 'Activities',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Quad bikes in landscape',
    span: 2,
  },
  {
    id: 3,
    title: 'Restaurants',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    alt: 'Plate of food',
    span: 2,
  },
  {
    id: 4,
    title: 'Tours',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    alt: 'Historic fortress by coastline',
    span: 3,
  },
  {
    id: 5,
    title: 'Services',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    alt: 'Hair braiding',
    span: 3,
  },
  {
    id: 6,
    title: 'Destinations',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    alt: 'Landmark and flag',
    span: 2,
  },
  {
    id: 7,
    title: 'Places',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    alt: 'Modern interior lounge',
    span: 2,
  },
  {
    id: 8,
    title: 'Accommodations',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    alt: 'Hotel building at night',
    span: 2,
  },
];

const COLS = 6;
const EXPLORE_LAST_IN_ROW = (() => {
  let col = 0;
  return EXPLORE_ITEMS.map((item) => {
    const isLast = col + item.span === COLS;
    col = (col + item.span) % COLS;
    return isLast;
  });
})();

const cardClass = (span: 2 | 3) =>
  `group relative block overflow-hidden rounded-[16.27px] bg-[#F0F0F0] min-h-[200px] sm:min-h-[240px] md:min-h-[230px] ${
    span === 3 ? 'md:col-span-3' : 'md:col-span-2'
  }`;

function ExploreCard({
  item,
  isLastInRow,
}: {
  item: ExploreCategory;
  isLastInRow?: boolean;
}) {
  const chipClass = isLastInRow
    ? 'bg-[#2D3134] text-white'
    : 'bg-white text-[#2D3134]';
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
        {/* Rating overlay top-left */}
        <div
          className={`flex items-center pr-[16px] h-[21px] absolute top-[21.37px] left-[27.9px] rounded-full px-[11px] text-[12.86px] font-medium ${chipClass}`}
        >
          3.5
        </div>
        {/* Bottom gradient and text */}
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

export default function Explore() {
  return (
    <section
      className="w-full overflow-x-hidden sm:px-6 md:px-8 lg:px-[39px] pt-[37.33px] pb-[63px] bg-[#F8F6EB]"
      aria-labelledby="explore-ghana-heading"
    >
      <div className="w-full mx-auto flex flex-col gap-[24.4px]">
        <header>
          <h2
            id="explore-ghana-heading"
            className="text-[18px] font-bold text-[#484848]"
          >
            Explore Ghana
          </h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4">
          {EXPLORE_ITEMS.map((item, index) => (
            <ExploreCard
              key={item.id}
              item={item}
              isLastInRow={EXPLORE_LAST_IN_ROW[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
