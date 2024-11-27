import { BiChevronRight } from 'react-icons/bi';
import Link from '../link/link';
import Section from '../section/section';

const Works = () => {
  return (
    <Section title={`> Me:`}>
      <div className={'flex flex-col gap-4 p-2'}>
        <p className={'indent-4 text-justify w-full'}>
          {
            'Hello and welcome! I’m a dedicated and self-motivated Software Engineer with a passion for cutting-edge technologies. Over the past six years, starting at the age of 18. I have honed my skills through self-directed learning and professional experience in the industry. My journey has led me to develop a robust proficiency in JavaScript, TypeScript, React, Node.js and Next.js.'
          }
        </p>
        <div className={'flex flex-row justify-center mt-2'}>
          <Link
            href='/work'
            className={
              'transition-all ease-linear duration-200 py-2 bg-teal-200 dark:bg-teal-950 hover:bg-teal-500 dark:hover:bg-teal-500 pr-2 pl-4 rounded-lg text-teal-900 font-semibold inline-flex items-center gap-1'
            }
          >
            {'My portfolio'}
            <BiChevronRight className={'w-4 h-4'} />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Works;
