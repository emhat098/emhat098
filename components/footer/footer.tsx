'use client';

import Link from '@/components/link/link';

const Footer = () => {
  return (
    <footer
      className={
        'flex flex-row gap-4 items-start text-sm px-12 py-4 border-t border-t-slate-200'
      }
    >
      <ul className={'flex gap-2'}>
        <li>
          <Link
            target={'_blank'}
            href={'https://github.com/emhat098'}
          >
            {'Github'}
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
