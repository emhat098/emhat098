'use client';

import { navigators } from '@/next.navigation.mjs';
import Container from '@/components/container/container';
import Link from '@/components/link/link';
import Logo from '@/components/logo/logo';
import SearchDialog from '@/components/search/search';
import dynamic from 'next/dynamic';
import { BiLogoGithub } from 'react-icons/bi';

const ToggleTheme = dynamic(() => import('@/components/theme/toggle'), {
  ssr: false,
});

const Navbar = () => {
  return (
    <nav
      className={
        'flex flex-row p-2 md:p-0 sticky top-0 backdrop-blur-2xl gap-4 text-xs md:text-sm justify-between items-center dark:bg-transparent z-10 dark:text-white'
      }
    >
      <Container className={'flex justify-between w-full items-center'}>
        <div className={'flex flex-row gap-6 items-center'}>
          <Link
            href={'/'}
            className={'hover:underline'}
          >
            <Logo className={'text-sm sm:text-base'} />
          </Link>
          <ul className={'flex flex-row gap-4 items-center'}>
            {navigators.map((nav) => (
              <li key={nav.href}>
                <Link
                  className={'font-normal hover:underline'}
                  href={nav.href}
                  target={nav.isExternal ? '_blank' : '_parent'}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className={'font-normal hover:underline'}
                href={'https://github.com/emhat098/emhat098'}
                target={'_blank'}
              >
                <div className='flex gap-1 items-center'>
                  <BiLogoGithub className={'w-4 h-4'} />
                  <span className={'hidden md:inline'}>Source</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={'flex items-center gap-1 md:gap-4'}>
          <ToggleTheme />
          <SearchDialog />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
