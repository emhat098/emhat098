'use client';

import Link from '@/components/link/link';
import { footerNavigators } from '@/next.navigation.mjs';

const Footer = () => {
  return (
    <footer
      className={
        'flex flex-row justify-between gap-4 items-start text-sm px-12 py-4 mt-auto'
      }
    >
      <ul className={'flex gap-6 items-center'}>
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
      <div className={'flex flex-rows gap-1'}>
        <span>{'Powered by'}</span>
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
    </footer>
  );
};

export default Footer;
