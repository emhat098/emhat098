'use client';

import _ from 'lodash';
import { BASE_URL_API } from '@/next.constants.mjs';
import { BlogPost } from '@/types';
import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '@/components/button/button';
import cn from '@/util/tailwind-helper';
import Link from '@/components/link/link';
import styles from './search.module.css';

const SearchDialog = memo(() => {
  const ref = useRef<HTMLDialogElement>(null);
  const [search, setSearch] = useState('');
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filterBlogs, setFilterBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch(BASE_URL_API + '/blog/search', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const cloneBlogs = _.clone(blogs);
      setFilterBlogs(cloneBlogs);
    }
  }, [blogs]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      setFilterBlogs(() => blogs);
    } else {
      setFilterBlogs((prev) =>
        prev.filter((p) => p.title.includes(e.target.value)),
      );
    }
  };

  return (
    <>
      <Button onClick={() => ref.current?.showModal()}>
        <CiSearch className={'w-6 h-6'} />
      </Button>
      <dialog
        ref={ref}
        className={cn(styles.dialog, 'rounded-lg w-[80vw] sm:w-[40vw]')}
        onClick={() => ref.current?.close()}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={'p-4 flex flex-col gap-4'}
        >
          <input
            type='text'
            name={'search'}
            value={search}
            onChange={onSearch}
            className={'border rounded-lg w-full px-3 py-2 shadow outline-none'}
            placeholder={'Searching by title of blog'}
          />
          <ul className={'flex flex-col gap-2'}>
            {filterBlogs &&
              filterBlogs.length > 0 &&
              filterBlogs.map((blog) => (
                <li key={blog.slug}>
                  <Link
                    href={blog.slug}
                    className={'hover:underline sm:text-base'}
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </dialog>
    </>
  );
});

SearchDialog.displayName = 'SearchDialog';

export default SearchDialog;
