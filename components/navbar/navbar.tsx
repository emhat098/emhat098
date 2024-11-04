'use client';

import Link from '@/components/link/link';
import Logo from '@/components/logo/logo';

const Navbar = () => {
  return (
    <nav
      className={
        'flex flex-row gap-4 justify-between items-center text-sm px-12 py-4 shadow'
      }
    >
      <div className={'flex flex-row gap-4 items-center'}>
        <Logo />
        <ul className={'flex flex-row gap-4'}>
          <li>
            <Link href={'/'}>{'Home'}</Link>
          </li>
          <li>
            <Link href={'/blog'}>{'Blogs'}</Link>
          </li>
        </ul>
      </div>
      <div>
        <form>
          <input
            className={
              'border shadow py-2 px-4 focus:outline-none focus:shadow-xl focus:rounded-xl text-lg'
            }
          />
          <button>Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
