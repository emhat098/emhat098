'use client';

import { navigators } from '@/next.navigation.mjs';
import Container from '@/components/container/container';
import Link from '@/components/link/link';
import Logo from '@/components/logo/logo';
import SearchDialog from '@/components/search/search';

const Navbar = () => {
  return (
    <nav
      className={
        'flex flex-row gap-4 justify-between items-center text-sm border-b border-b-slate-50 dark:border-b'
      }
    >
      <Container className={'flex justify-between w-full'}>
        <div className={'flex flex-row gap-6 items-center'}>
          <Link href={'/'}>
            <Logo />
          </Link>
          <ul className={'flex flex-row gap-4'}>
            {navigators.map((nav) => (
              <li key={nav.href}>
                <Link
                  className={'font-normal text-sm'}
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
          <SearchDialog />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
