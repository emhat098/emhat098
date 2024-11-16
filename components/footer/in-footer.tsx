'use client';

import { FC } from 'react';
import Avatar from '../avatar/avatar';
import Link from '../link/link';
import Logo from '../logo/logo';
import P from '../paragraph/paragraph';

const InFooter = () => {
  return (
    <div
      className={
        'grid grid-cols-12 gap-4 p-6 bg-slate-50 dark:bg-dark dark:text-dark dark:border dark:border-slate-50 rounded-lg my-4'
      }
    >
      <div className={'col-span-12 md:col-span-6 flex flex-col gap-2'}>
        <Logo className={'text-xl md:text2xl'}>{'Em Ha Tuan'}</Logo>
        <P className={'text-sm md:text-sm'}>
          {`I’m a dedicated and self-motivated Software
          Engineer with a passion for cutting-edge technologies. Over the past
          six years, starting at the age of 18, I have honed my skills through
          self-directed learning and professional experience in the industry.`}
        </P>
      </div>
      <div className={'col-span-12 md:col-span-6'}>
        <div className='grid grid-cols-12'>
          <div className={'col-span-12 md:col-span-6'}>
            <ul className={'flex flex-col gap-2'}>
              <li className={'flex flex-row gap-2'}>
                <FooterLinkItem
                  href='/'
                  title={'Home'}
                  image={'/home.jpg'}
                  description={'Go back home to see more things.'}
                />
              </li>
              <li className='flex flex-row gap-2'>
                <FooterLinkItem
                  href='/about'
                  title={'About me'}
                  image={'/about-me.jpg'}
                  description={
                    'I believe the world needs more smiles than anger.'
                  }
                />
              </li>
              <li className='flex flex-row gap-2'></li>
            </ul>
          </div>
          <div className={'col-span-12 md:col-span-6'}>
            <ul className={'flex flex-col gap-2'}>
              <li className={'flex flex-row gap-2'}>
                <FooterLinkItem
                  description={
                    'Sometimes, we need to take a break to see a wider world.'
                  }
                  href='/blog'
                  title={'My blogs'}
                  image={'/my-blog.jpg'}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FooterLinkItemProps {
  href: string;
  title: string;
  description: string;
  image?: string;
}

export const FooterLinkItem: FC<FooterLinkItemProps> = ({
  href,
  title,
  description,
  image,
}) => {
  return (
    <Link
      href={href}
      className={'flex gap-4 items-center'}
    >
      <div>
        <Avatar
          title={title}
          image={image}
        />
      </div>
      <div className='flex flex-col'>
        <P className={'font-medium'}>{title}</P>
        <span className={'line-clamp-2 text-xs'}>{description}</span>
      </div>
    </Link>
  );
};

export default InFooter;
