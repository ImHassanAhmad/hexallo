'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import SearchIcon from '@/icons/search.svg';
import Image from 'next/image';

const HERO_SLIDES = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=80',
    alt: 'Canal city at dusk',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80',
    alt: 'City skyline at sunset',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    alt: 'Beach and ocean',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1920&q=80',
    alt: 'Coastal town',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80',
    alt: 'City view',
  },
];

export default function HeroSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="w-full sm:px-6 md:px-8 lg:px-[42px] pt-[39px] pb-[52px]"
      aria-label="Hero"
    >
      <div className="w-full mx-auto flex flex-col items-center gap-5">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-white/20 min-h-[570px]">
          {/* Background Swiper */}
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

          {/* Overlay content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-12 pb-24">
            <h1 className="text-center text-[36px] font-bold text-white drop-shadow-md max-w-4xl leading-tight">
              Discover, Book & Enjoy What&apos;s
              <br />
              Happening Around You
            </h1>
            <p className="mt-4 text-center text-white/95 text-[14px] font-semibold max-w-2xl drop-shadow">
              From local events to world-famous experiences — all in one place.
            </p>

            {/* Search bar */}
            <div className="border-b-[1.75px] border-[#E3E3E1] mt-8 w-full max-w-[612px] flex flex-col sm:flex-row gap-2 sm:gap-3 sm:h-[37px] p-0 bg-white rounded-[12px] shadow-xl items-center">
              <label className="sr-only" htmlFor="hero-search-event">
                Search any event
              </label>
              <input
                id="hero-search-event"
                type="search"
                placeholder="Search any event"
                className="ml-[20px] flex-1 min-w-0 h-[37px] px-4 py-0 rounded-xl text-[12px] font-normal text-[#6A6A6A] placeholder:text-[12px] placeholder:font-normal placeholder:text-[#6A6A6A] outline-none"
              />
              <label className="sr-only" htmlFor="hero-search-where">
                Where
              </label>
              <input
                id="hero-search-where"
                type="text"
                placeholder="Where"
                className="w-full sm:w-32 h-[37px] px-4 py-0 rounded-xl text-[14px] font-normal text-[#131314] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#131314] focus:outline-none"
              />
              <label className="sr-only" htmlFor="hero-search-when">
                When
              </label>
              <input
                id="hero-search-when"
                type="text"
                placeholder="When"
                className="w-full sm:w-32 h-[37px] px-4 py-0 rounded-xl text-[14px] font-normal text-[#131314] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#131314] outline-none"
              />
              <button
                type="button"
                className="mr-[10px] flex items-center justify-center h-[29px] w-[35px] rounded-[12px] bg-[#AE6F28]"
                aria-label="Search"
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination dots - below hero */}
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
              className={`h-[11px] w-[11px] rounded-full transition-all duration-200 ${
                activeIndex === index
                  ? 'bg-[#8B6914]'
                  : 'bg-[#D4D4D4] hover:bg-[#A3A3A3]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
