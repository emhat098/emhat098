import { FC } from 'react';

const Banner: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={'w-full flex justify-center items-center p-4'}>{title}</div>
  );
};
export default Banner;
