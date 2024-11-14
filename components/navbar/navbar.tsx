'use client';

import { navigators } from '@/next.navigation.mjs';
import Container from '@/components/container/container';
import Link from '@/components/link/link';
import Logo from '@/components/logo/logo';
import SearchDialog from '@/components/search/search';
import dynamic from 'next/dynamic';

const ToggleTheme = dynamic(() => import('@/components/theme/toggle'), {
  ssr: false,
});

const Navbar = () => {
  return (
    <nav
      className={
        'flex flex-row p-2 md:p-0 gap-4 justify-between items-center text-sm border-b dark:bg-slate-900 dark:text-white border-b-slate-50 dark:border-b'
      }
    >
      <Container className={'flex justify-between w-full items-center'}>
        <div className={'flex flex-row gap-6 items-center'}>
          <Link
            href={'/'}
            className={'hover:underline'}
          >
            <Logo />
          </Link>
          <ul className={'flex flex-row gap-4'}>
            {navigators.map((nav) => (
              <li key={nav.href}>
                <Link
                  className={'font-normal text-sm hover:underline'}
                  href={nav.href}
                  target={nav.isExternal ? '_blank' : '_parent'}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={'flex items-center gap-4'}>
          <ToggleTheme />
          <SearchDialog />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
