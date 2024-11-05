'use client';

import Link from '@/components/link/link';
import Logo from '../logo/logo';

const Footer = () => {
  return (
    <footer
      className={
        'flex flex-row gap-4 items-start text-sm px-12 py-4 border-t border-t-slate-200'
      }
    >
      <ul className={'flex gap-6 items-center'}>
        <li>
          <Link href={'/'}>
            <Logo>{'@emhat098'}</Logo>
          </Link>
        </li>
        <li>
          <Link
            target={'_blank'}
            href={'https://github.com/emhat098'}
            className={'font-semibold'}
          >
            {'Github'}
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
