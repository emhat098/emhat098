'use client';

import Image from '@/components/image/image';
import Avatar from '@/components/avatar/avatar';

const HomeBanner = () => {
  return (
    <div className={'relative max-h-max h-full group'}>
      <Image
        src={'/me.png'}
        alt={'Home page banner image'}
        className={
          'h-[360px] md:h-[480px] object-cover bg-slate-300 border-none transition-all ease-linear duration-300 brightness-[0.5] group-hover:brightness-[0.8]'
        }
      />
      <div
        className={
          'absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end gap-4 py-10'
        }
      >
        <div
          className={
            'backdrop-blur-xl text-white rounded-lg px-6 py-4 w-[90%] sm:w-[60%] text-center'
          }
        >
          {'Hello, I am a senior software engineer from Vietnam!'}
        </div>
        <div
          className={
            'flex flex-row justify-between items-center w-[90%] sm:w-[60%]'
          }
        >
          <div className={'flex flex-col gap-2'}>
            <div className={'text-4xl sm:text-6xl text-white'}>Em Ha Tuan</div>
            <div className={'text-base sm:text-lg text-white'}>
              Senior Software Engineer (Next.js/React.js/Node.js)
            </div>
          </div>
          <div>
            <Avatar
              image={'/avatar.jpg'}
              title={'Em Ha Tuan'}
              className={'w-[100px] h-[100px]'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
