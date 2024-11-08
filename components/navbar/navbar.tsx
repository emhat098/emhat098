'use client';

import { CiSearch } from 'react-icons/ci';
import { navigators } from '@/next.navigation.mjs';
import Button from '@/components/button/button';
import Container from '@/components/container/container';
import Link from '@/components/link/link';
import Logo from '@/components/logo/logo';

const Navbar = () => {
  return (
    <nav
      className={
        'flex flex-row gap-4 justify-between items-center text-sm shadow border-b border-b-slate-50 dark:border-b'
      }
    >
      <Container className={'flex justify-between w-full'}>
        <div className={'flex flex-row gap-8 items-center'}>
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
          <Button>
            <CiSearch className={'w-6 h-6'} />
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
