'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import { cn } from '@/app/utility/cn';

type DealItem = {
  id: number;
  titleTop: string;
  titleBottom: string;
  upToText: string;
  discountText: string;
  image: string;
};

const DEALS: DealItem[] = [
  {
    id: 1,
    titleTop: 'New User',
    titleBottom: 'Offer',
    upToText: 'UP TO',
    discountText: '20%',
    image: '/deals.jpg',
  },
  {
    id: 2,
    titleTop: 'Black Friday',
    titleBottom: 'Offers',
    upToText: 'UP TO',
    discountText: '20%',
    image: '/deals.jpg',
  },
  {
    id: 3,
    titleTop: 'New User',
    titleBottom: 'Offer',
    upToText: 'UP TO',
    discountText: '20%',
    image: '/deals.jpg',
  },
];

type CountdownState = {
  days: string;
  hours: string;
  mins: string;
  secs: string;
};

/** Right gutter after the last slide (px) — tuned per breakpoint below. */
const END_GUTTER_LG = 39;

/**
 * Fractional slidesPerView breaks end-of-track alignment with fixed-width slides.
 * Keep slidesPerView "auto" everywhere so 300/320px slides + snap + offset behave correctly.
 */
const DEALS_SWIPER_BREAKPOINTS = {
  320: {
    slidesPerView: 'auto' as const,
    spaceBetween: 12,
    slidesOffsetAfter: 52,
  },
  480: {
    slidesPerView: 'auto' as const,
    spaceBetween: 14,
    slidesOffsetAfter: 48,
  },
  640: {
    slidesPerView: 'auto' as const,
    spaceBetween: 14,
    slidesOffsetAfter: 44,
  },
  768: {
    slidesPerView: 'auto' as const,
    spaceBetween: 14,
    slidesOffsetAfter: END_GUTTER_LG,
  },
  1024: {
    slidesPerView: 'auto' as const,
    spaceBetween: 16,
    slidesOffsetAfter: END_GUTTER_LG,
  },
  1280: {
    slidesPerView: 'auto' as const,
    spaceBetween: 18,
    slidesOffsetAfter: END_GUTTER_LG,
  },
};

const MS_PER_SEC = 1000;
const SEC_PER_MIN = 60;
const SEC_PER_HOUR = 60 * 60;
const SEC_PER_DAY = 24 * 60 * 60;

/** Offer ends March 31st end of day (23:59:59.999) in local time. Uses next occurrence so it's always in the future. */
function getOfferEndMs(): number {
  const now = new Date();
  const year = now.getFullYear();
  const march31 = new Date(year, 2, 31, 23, 59, 59, 999);
  return march31.getTime() > now.getTime()
    ? march31.getTime()
    : new Date(year + 1, 2, 31, 23, 59, 59, 999).getTime();
}

function pad2(n: number) {
  return String(Math.max(0, Math.floor(n))).padStart(2, '0');
}

/** Derive days, hours, mins, secs from ms left using Date.now()-style remainder math. */
function getCountdownState(msLeft: number): CountdownState {
  const totalSecs = Math.max(0, Math.floor(msLeft / MS_PER_SEC));
  const days = Math.floor(totalSecs / SEC_PER_DAY);
  const remainderAfterDays = totalSecs % SEC_PER_DAY;
  const hours = Math.floor(remainderAfterDays / SEC_PER_HOUR);
  const remainderAfterHours = remainderAfterDays % SEC_PER_HOUR;
  const mins = Math.floor(remainderAfterHours / SEC_PER_MIN);
  const secs = remainderAfterHours % SEC_PER_MIN;
  return {
    days: pad2(days),
    hours: pad2(hours),
    mins: pad2(mins),
    secs: pad2(secs),
  };
}

function ArrowButton({
  direction,
  onClick,
  disabled,
  className,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
      className={cn(
        'h-10 w-10 rounded-full bg-white/90 backdrop-blur shadow-[0px_6px_22px_0px_#0000001A] flex items-center justify-center',
        'hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#484848]"
      >
        {direction === 'left' ? (
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

function DealCard({
  item,
  active,
  onClick,
}: {
  item: DealItem;
  active: boolean;
  onClick?: () => void;
}) {
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
        'shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-shadow',
        onClick ? 'cursor-pointer select-none' : undefined,
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

function CountdownBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-[70px] w-[70px] rounded-[10px] bg-white shadow-[0px_4px_14px_1px_#00000029] flex items-center justify-center">
        <span className="text-[24px] font-extrabold text-[#484848]">
          {value}
        </span>
      </div>
      <span className="text-[12px] font-normal text-[#484848]">{label}</span>
    </div>
  );
}

export default function Deals() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const offerEndsAtRef = useRef(0);
  const [countdown, setCountdown] = useState<CountdownState>({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00',
  });

  useEffect(() => {
    const endMs = getOfferEndMs();
    offerEndsAtRef.current = endMs;

    const tick = () => {
      const now = Date.now();
      const msLeft = offerEndsAtRef.current - now;
      setCountdown(getCountdownState(msLeft));
    };

    tick();

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const scheduleNext = () => {
      const now = Date.now();
      const nextSecondBoundary = Math.ceil(now / MS_PER_SEC) * MS_PER_SEC;
      const delay = Math.max(0, nextSecondBoundary - now);
      timeoutId = setTimeout(() => {
        tick();
        scheduleNext();
      }, delay);
    };
    scheduleNext();

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        tick();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <section className="w-full  sm:pl-6 md:pl-8 lg:pl-[39px] pb-[106px]">
      <div className="w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        <div className="w-full lg:max-w-[320px]">
          <h2 className="text-[18px] font-semibold text-[#484848]">
            Blazing Deals
          </h2>
          <p className="mt-2 text-[11.9px] leading-5 text-[#8A8A8A] font-normal max-w-[260px]">
            Don’t miss our most exciting limited-time offers and new-user
            specials.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#2D3134] px-[17px] py-[10px] text-[12px] font-normal text-white hover:opacity-90"
          >
            Explore Offers Now
          </button>

          <p className="mt-5 text-[12px] font-medium text-[#D00E28]">
            Offer ends in...
          </p>

          <div className="mt-4 flex items-start gap-3">
            <CountdownBox value={countdown.days} label="Days" />
            <CountdownBox value={countdown.hours} label="Hr" />
            <CountdownBox value={countdown.mins} label="Mins" />
            <CountdownBox value={countdown.secs} label="Sec" />
          </div>
        </div>

        <div className="relative w-full min-w-0 flex-1">
          {/*
            Below md: arrows sit in flex flow so they aren’t clipped by overflow-x
            on ancestors. md+: overlay arrows on the carousel as before.
          */}
          <div className="flex w-full min-w-0 items-center gap-2 sm:gap-3 md:block md:relative">
            <ArrowButton
              direction="left"
              onClick={() => swiperRef.current?.slidePrev()}
              className="shrink-0 md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 z-10"
            />
            <div className="min-w-0 flex-1 overflow-hidden md:w-full md:flex-none">
              <Swiper
                onSwiper={(s) => {
                  swiperRef.current = s;
                }}
                spaceBetween={12}
                slidesPerView="auto"
                slidesOffsetAfter={56}
                loop={false}
                grabCursor
                roundLengths
                className="w-full overflow-hidden"
                breakpoints={DEALS_SWIPER_BREAKPOINTS}
              >
                {DEALS.map((item, idx) => (
                  <SwiperSlide
                    key={item.id}
                    className="w-[300px]! sm:w-[320px]!"
                  >
                    <DealCard
                      item={item}
                      active={idx === activeIndex}
                      onClick={() => {
                        setActiveIndex(idx);
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <ArrowButton
              direction="right"
              onClick={() => swiperRef.current?.slideNext()}
              className="shrink-0 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
