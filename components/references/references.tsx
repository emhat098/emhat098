import { ReferenceWork } from '@/types';
import { FC } from 'react';
import { GoLinkExternal } from 'react-icons/go';

interface ReferencesProps {
  data: Array<ReferenceWork>;
}

const References: FC<ReferencesProps> = ({ data }) => {
  return (
    <div className={'flex flex-col gap-1'}>
      {data.map((refer) => (
        <div
          key={refer.title}
          className={'flex flex-row gap-2 items-center w-full'}
        >
          <span
            className={
              'bg-teal-800 text-xs font-bold text-teal-200 rounded py-[0.5px] uppercase px-2 w-max'
            }
          >
            {refer.title}
          </span>
          <div className={'w-max text-sm'}>
            {refer.content && <p>{refer.content}</p>}
            {refer.href && (
              <a
                href={refer.href}
                target={'_blank'}
                className={
                  'flex flex-row gap-2 text-red-400 hover:underline flex-wrap'
                }
              >
                {refer.href}
                <GoLinkExternal className={'w-4 h-4'} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default References;
