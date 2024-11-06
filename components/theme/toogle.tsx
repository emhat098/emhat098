import useTheme from '@/hooks/use-theme';
import { CiLight, CiDark } from 'react-icons/ci';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className='p-2 border rounded-full shadow'
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <CiDark className='w-4 h-4' />
      ) : (
        <CiLight className='w-4 h-4' />
      )}
    </button>
  );
};

export default ToggleTheme;
