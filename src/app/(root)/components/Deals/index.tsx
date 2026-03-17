'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import ArrowButton from '@/app/components/ArrowButton';
import DealCard from '@/app/components/Cards/DealCard';
import CountdownBox from './components/CountdownBox';
import {
  MS_PER_SEC,
  type CountdownState,
  getOfferEndMs,
  getCountdownState,
} from '@/app/utility';
import { DEALS, DEALS_SLIDER_BREAKPOINTS } from './constants';

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
                breakpoints={DEALS_SLIDER_BREAKPOINTS}
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
