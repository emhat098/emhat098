'use client';

import Link from '@/components/link/link';
import Logo from '@/components/logo/logo';
import { CiSearch } from 'react-icons/ci';
import InputGroup from '@/components/input/input-group';
import Container from '../container/container';
import ToggleTheme from '../theme/toogle';
import Button from '../button/button';

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
            <li>
              <Link
                className={'font-semibold text-base'}
                href={'/'}
              >
                {'Home'}
              </Link>
            </li>
            <li>
              <Link
                className={'font-semibold text-base'}
                href={'/blog'}
              >
                {'Blogs'}
              </Link>
            </li>
          </ul>
        </div>
        <div className={'flex items-center gap-4'}>
          <ToggleTheme />
          <Button>
            <CiSearch className={'w-6 h-6'} />
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
