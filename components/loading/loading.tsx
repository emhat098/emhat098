import { AiOutlineLoading } from 'react-icons/ai';

const Loading = () => {
  return (
    <div className={'p-4 flex w-full flex-col items-center'}>
      <AiOutlineLoading
        className={'w-4 h-4 animate-spin transition-all duration-300'}
      />
    </div>
  );
};

export default Loading;
