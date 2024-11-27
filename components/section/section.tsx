import cn from '@/util/tailwind-helper';
import { FC, PropsWithChildren } from 'react';
import MinContainer from '../container/min-container';

interface SectionProps {
  title: string;
  className?: string;
}

const Section: FC<SectionProps & PropsWithChildren> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={cn('flex justify-center w-full pt-4', className)}>
      <MinContainer>
        <div className={'flex flex-col gap-4 px-2'}>
          <h2
            className={
              'border-b-4 font-semibold border-b-gray-900 dark:border-b-gray-100 w-max hover:border-b-teal-950 dark:hover:border-b-teal-200'
            }
          >
            {title}
          </h2>
          <>{children}</>
        </div>
      </MinContainer>
    </div>
  );
};

export default Section;
