'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const DEFAULT_BREAKPOINTS = {
  320: { slidesPerView: 1.15 },
  480: { slidesPerView: 1.5 },
  640: { slidesPerView: 2.2 },
  768: { slidesPerView: 2.5 },
  1024: { slidesPerView: 3.2 },
  1280: { slidesPerView: 4 },
};

export type SliderProps = {
  children: React.ReactNode;
  spaceBetween?: number;
  breakpoints?: Record<number, { slidesPerView: number }>;
  className?: string;
};

export default function Slider({
  children,
  spaceBetween = 12,
  breakpoints = DEFAULT_BREAKPOINTS,
  className,
}: SliderProps) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView="auto"
      breakpoints={breakpoints}
      className={className ?? 'overflow-visible!'}
      grabCursor
    >
      {children}
    </Swiper>
  );
}

export { SwiperSlide as SliderSlide };
