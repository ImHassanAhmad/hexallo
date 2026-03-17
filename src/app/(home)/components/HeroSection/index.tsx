'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import SearchIcon from '@/icons/search.svg';
import Image from 'next/image';
import { cn } from '@/app/utility/cn';
import { HERO_SLIDES } from './constants';

export default function HeroSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="w-full px-4 sm:px-6 md:px-8 lg:px-[42px] pt-5 pb-6 sm:pt-[39px] sm:pb-[52px]"
      aria-label="Hero"
    >
      <div className="w-full mx-auto flex flex-col items-center gap-5">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-white/20 min-h-[570px]">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="absolute inset-0 z-0"
            grabCursor={false}
            allowTouchMove={true}
          >
            {HERO_SLIDES.map((slide) => (
              <SwiperSlide key={slide.id} className="h-full!">
                <div className="relative w-full h-full min-h-[570px]">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={slide.id === 1}
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60"
                    aria-hidden
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-12 pb-24">
            <h1 className="text-center text-[22px] sm:text-[28px] md:text-[36px] font-bold text-white drop-shadow-md max-w-4xl leading-tight">
              Discover, Book & Enjoy What&apos;s
              <br />
              Happening Around You
            </h1>
            <p className="mt-4 text-center text-white/95 text-[14px] font-semibold max-w-2xl drop-shadow">
              From local events to world-famous experiences — all in one place.
            </p>

            <div className="mt-8 w-full max-w-[612px] flex flex-col sm:flex-row gap-2 sm:gap-0 sm:h-[37px] p-2 sm:p-0 bg-white rounded-[12px] shadow-xl items-stretch sm:items-center border border-[#E3E3E1]">
              <label className="sr-only" htmlFor="hero-search-event">
                Search any event
              </label>
              <input
                id="hero-search-event"
                type="search"
                placeholder="Search any event"
                className="w-full sm:flex-1 sm:min-w-0 h-[37px] px-4 py-0 rounded-lg sm:rounded-none sm:ml-2 text-[13px] font-normal text-[#6A6A6A] placeholder:text-[13px] placeholder:font-normal placeholder:text-[#6A6A6A] outline-none border border-[#E3E3E1] sm:border-none"
              />
              <label className="sr-only" htmlFor="hero-search-where">
                Where
              </label>
              <input
                id="hero-search-where"
                type="text"
                placeholder="Where"
                className="w-full sm:w-28 h-[37px] px-4 py-0 rounded-lg sm:rounded-none text-[13px] font-normal text-[#131314] placeholder:text-[13px] placeholder:font-normal placeholder:text-[#131314] focus:outline-none border border-[#E3E3E1] sm:border-none sm:border-l sm:border-l-[#E3E3E1]"
              />
              <label className="sr-only" htmlFor="hero-search-when">
                When
              </label>
              <input
                id="hero-search-when"
                type="text"
                placeholder="When"
                className="w-full sm:w-28 h-[37px] px-4 py-0 rounded-lg sm:rounded-none text-[13px] font-normal text-[#131314] placeholder:text-[13px] placeholder:font-normal placeholder:text-[#131314] outline-none border border-[#E3E3E1] sm:border-none sm:border-l sm:border-l-[#E3E3E1]"
              />
              <button
                type="button"
                className="flex items-center justify-center gap-2 h-[38px] sm:h-[29px] sm:w-[35px] sm:mr-[10px] px-4 sm:px-0 rounded-lg sm:rounded-[12px] bg-[#AE6F28] hover:bg-[#C07E30] active:scale-95 transition-all duration-200"
                aria-label="Search"
              >
                <SearchIcon />
                <span className="text-white text-[13px] font-medium sm:hidden">Search</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex gap-[12px]"
          role="tablist"
          aria-label="Hero slides"
        >
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={cn(
                'h-[11px] rounded-full transition-all duration-300',
                activeIndex === index
                  ? 'w-[28px] bg-[#8B6914]'
                  : 'w-[11px] bg-[#D4D4D4] hover:bg-[#A3A3A3]',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
