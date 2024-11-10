'use client';

import { BASE_URL_API } from '@/next.constants.mjs';
import { BlogPost } from '@/types';
import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '@/components/button/button';
import cn from '@/util/tailwind-helper';
import styles from './search.module.css';
import useDebounce from '@/hooks/use-debounce';
import SearchItem from './search-item';

type SearchState = 'searching' | 'loaded' | 'no-found' | 'init';

const SearchDialog = memo(() => {
  const ref = useRef<HTMLDialogElement>(null);
  const [search, setSearch] = useState('');
  const searchValue = useDebounce(search, 700);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [state, setState] = useState<SearchState>('init');

  useEffect(() => {
    if (searchValue) {
      fetch(BASE_URL_API + '/blog/search?q=' + searchValue, {
        method: 'GET',
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          setState('no-found');
        })
        .then((res) => {
          if (res?.data && res?.data?.length > 0) {
            setBlogs(res.data);
            setState('loaded');
          } else {
            setState('no-found');
          }
        })
        .catch((err) => console.log(err));
    }
  }, [searchValue]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setState('searching');
    if (e.target.value === '') {
      setBlogs([]);
      setState('init');
    }
  };

  return (
    <>
      <Button onClick={() => ref.current?.showModal()}>
        <CiSearch className={'w-6 h-6'} />
      </Button>
      <dialog
        ref={ref}
        className={cn(styles.dialog, 'rounded-lg w-[80vw] sm:w-[35vw]')}
        onClick={() => ref.current?.close()}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={'p-4 flex flex-col'}
        >
          <input
            type='text'
            name={'search'}
            value={search}
            onChange={onSearch}
            className={
              'border border-black rounded-lg w-full px-3 py-2 shadow outline-none'
            }
            placeholder={'Searching by title of blog'}
          />
          {state === 'searching' && (
            <div className={'mt-4'}>{'Searching ...'}</div>
          )}
          {state === 'no-found' && (
            <div className={'mt-4'}>{'Not found blog.'}</div>
          )}
          {state === 'loaded' && (
            <ul
              className={cn(
                'flex flex-col gap-2 overflow-scroll scrollbar-thin mt-4',
                `max-h-[400px]`,
              )}
            >
              {blogs &&
                blogs.length > 0 &&
                blogs.map((blog) => (
                  <li key={blog.slug}>
                    <SearchItem {...blog} />
                  </li>
                ))}
            </ul>
          )}
        </div>
      </dialog>
    </>
  );
});

SearchDialog.displayName = 'SearchDialog';

export default SearchDialog;
