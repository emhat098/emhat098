'use client';

import Link from '@/components/link/link';
import Logo from '../logo/logo';
import { footerNavigators } from '@/next.navigation.mjs';

const Footer = () => {
  return (
    <footer
      className={'flex flex-row gap-4 items-start text-sm px-12 py-4 mt-auto'}
    >
      <ul className={'flex gap-6 items-center'}>
        <li>
          <Link href={'/'}>
            <Logo className={'text-sm font-bold'}>{'@emhat098'}</Logo>
          </Link>
        </li>
        {footerNavigators.map((navigator) => (
          <li key={navigator.href}>
            <Link
              target={navigator.isExternal ? '_blank' : '_parent'}
              href={navigator.href}
              className={'font-semibold'}
            >
              {navigator.title}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
