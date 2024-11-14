'use client';

import Link from '@/components/link/link';
import { footerNavigators } from '@/next.navigation.mjs';

const Footer = () => {
  return (
    <footer
      className={
        'flex flex-row justify-between gap-2 md:gap-4 items-center text-sm px-4 md:px-12 py-4 mt-auto border-t'
      }
    >
      <ul className={'flex text-xs md:text-base gap-2 md:gap-6 items-center'}>
        {footerNavigators.map((navigator) => (
          <li key={navigator.href}>
            <Link
              target={navigator.isExternal ? '_blank' : '_parent'}
              href={navigator.href}
              className={'hover:underline'}
            >
              {navigator.title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={
          'flex text-xs sm:text-sm flex-row items-center sm:flex-row gap-3'
        }
      >
        <span className={'border rounded bg-red-100 text-black px-2 py-1'}>
          {'Powered by'}
        </span>
        <div className={'flex text-xs flex-rows gap-1'}>
          <Link
            href={'https://vercel.com/'}
            target={'_blank'}
            className={'hover:underline'}
          >
            {'Vercel'}
          </Link>
          <span>+</span>
          <Link
            href={'https://nextjs.org/'}
            target={'_blank'}
            className={'hover:underline'}
          >
            {'Next.js'}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
