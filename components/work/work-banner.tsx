/* eslint-disable @next/next/no-img-element */
'use client';

import cn from '@/util/tailwind-helper';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './work-banner.module.css';

interface ProjectBannerProps extends ImageFilterProps {
  from?: string;
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({ image, from }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className={'relative max-h-max h-full group'}>
        <ImageFilter image={image} />
        <div
          className={
            'absolute bottom-2 left-2 text-xs opacity-70 text-white backdrop-blur-sm bg-black/30 backdrop-saturate-200 rounded px-1 py-0 sm:px-2 sm:py-1'
          }
        >
          <span className={'hidden sm:inline'}>{'> Hover me!'}</span>
          <span className={'inline sm:hidden text-xs'}>{'> Click me!'}</span>
        </div>
        <div
          className={
            'absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end gap-4 py-8 sm:py-10'
          }
        >
          <div
            className={
              'flex flex-row justify-between items-center w-[90%] sm:w-[60%]'
            }
          >
            <div
              className={
                'flex flex-col gap-0 sm:gap-1 backdrop-blur p-2 sm:p-4 rounded-lg bg-black/30 backdrop-saturate-200'
              }
            >
              <div
                className={
                  'text-lg sm:text-2xl text-white inline-flex gap-1 sm:gap-2 font-semibold'
                }
              >
                <span className={'font-mono'}>{'>'}</span>
                <span>Work.</span>
              </div>
              <div className={'font-normal text-sm sm:text-base text-white'}>
                <span>{from || 'From 2018 to present.'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const filterConfigs = [
  {
    label: 'Blur',
    name: 'blur',
    min: 0,
    max: 100,
  },
  {
    label: 'Brightness',
    name: 'brightness',
    min: 30,
    max: 200,
  },
  {
    label: 'Contrast',
    name: 'contrast',
    min: 30,
    max: 200,
  },
  {
    label: 'Grayscale',
    name: 'grayscale',
    min: 30,
    max: 200,
  },
];

interface ImageFilterProps {
  image: {
    src?: string;
    alt?: string;
  };
}

const ImageFilter: React.FC<ImageFilterProps> = ({
  image: { src = '/project.jpg', alt = 'Project banner' },
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const [state, setState] = useState({
    blur: 1,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hue: 0,
    invert: 0,
    saturate: 0,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  useEffect(() => {
    const imgEl = ref.current;
    if (state && imgEl) {
      const filter = `
        blur(${state.blur}px)
        brightness(${state.brightness / 100})
        contrast(${state.contrast}%)
        grayscale(${state.grayscale}%)
      `;
      imgEl.style.filter = filter;
    }
  }, [state]);

  return (
    <div className={'relative group rounded-lg'}>
      <img
        src={src}
        alt={alt}
        className={cn(styles.banner, '')}
        ref={ref}
      />
      <div
        className={
          'transition-all duration-300 ease-linear absolute right-2 rounded-lg bottom-2 z-[2] backdrop-blur bg-black/30 backdrop-saturate-200 opacity-0 group-hover:opacity-100 group-focus:opacity-100'
        }
      >
        <div className={'flex flex-col gap-3 border rounded-lg p-4'}>
          {filterConfigs.map((filter) => (
            <label
              key={filter.name}
              htmlFor={filter.name}
              className={cn(
                'flex flex-col gap-1 text-xs text-white',
                styles.filter,
              )}
            >
              <span className={'font-normal'}>{filter.label}</span>
              <input
                type={'range'}
                min={filter.min}
                max={filter.max}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                value={state[filter.name]}
                onChange={onChange}
                name={filter.name}
                className={'opacity-70 bg-transparent hover:cursor-pointer'}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
