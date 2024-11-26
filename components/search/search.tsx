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
import { AnimatePresence, motion } from 'framer-motion';

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
      <Button
        className={'bg-transparent'}
        onClick={() => ref.current?.showModal()}
      >
        <CiSearch className={'w-4 h-4 md:w-6 md:h-6'} />
      </Button>
      <dialog
        ref={ref}
        className={cn(
          styles.dialog,
          'rounded-lg w-[90vw] md:w-[60vw] lg:w-[30vw]',
        )}
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
            className={'rounded-lg w-full px-3 py-2 outline-none'}
            placeholder={'Searching by title of blog'}
            autoComplete={'off'}
          />
          <AnimatePresence>
            {state === 'searching' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={'mt-4'}
              >
                {'Searching ...'}
              </motion.div>
            )}
            {state === 'no-found' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={'mt-4'}
              >
                {'Not found blog.'}
              </motion.div>
            )}
            {state === 'loaded' && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 0, opacity: 0 }}
                className={cn(
                  'flex flex-col gap-1 overflow-scroll scrollbar-thin mt-4',
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
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </dialog>
    </>
  );
});

SearchDialog.displayName = 'SearchDialog';

export default SearchDialog;
