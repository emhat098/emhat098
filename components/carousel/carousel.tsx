'use client';

import cn from '@/util/tailwind-helper';
import { FC, useEffect, useRef } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface CarouselProps {
  items: Array<React.ReactNode>;
  sliderClass?: string;
}

const Carousel: FC<CarouselProps> = ({ items, sliderClass }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const autoScroll = () => {
      if (ref.current) {
        const { scrollLeft, scrollWidth, offsetWidth } = ref.current;
        if (scrollLeft + offsetWidth >= scrollWidth) {
          ref.current.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else {
          ref.current.scrollBy({
            left: offsetWidth / items.length,
            behavior: 'smooth',
          });
        }
      }
    };

    const interval = setInterval(autoScroll, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const prevSlide = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -ref.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: ref.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={'flex flex-col gap-2'}>
      <div
        className={cn(
          'flex flex-row flex-nowrap overflow-x-scroll scrollbar-none gap-4 py-2',
          sliderClass,
        )}
        ref={ref}
      >
        {items}
      </div>
      <div className={'flex flex-row gap-2'}>
        <button
          onClick={prevSlide}
          className={
            'p-2 rounded-full shadow hover:shadow-sm hover:bg-green-50 dark:bg-darker dark:hover:bg-dark'
          }
        >
          <BiChevronLeft className={'w-6 h-6'} />
        </button>
        <button
          onClick={nextSlide}
          className={
            'p-2 rounded-full shadow hover:shadow-sm hover:bg-green-50 dark:bg-darker dark:hover:bg-dark'
          }
        >
          <BiChevronRight className={'w-6 h-6'} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
