import Image from '../image/image';
import Link from '../link/link';
import Section from '../section/section';
import generateWorkData from '@/generator/work.mjs';

const ProjectWorks = async () => {
  const works = await generateWorkData();
  return (
    <Section title={'Works'}>
      <div className='grid grid-cols-2 gap-4'>
        {works &&
          works.length > 0 &&
          works.map((work) => (
            <Link
              key={work.slug}
              className={'flex flex-col gap-2 hover:no-underline'}
              href={work.slug}
            >
              <Image
                src={work.banner}
                alt={work.title}
                className={'h-40'}
              />
              <div className={'text-center text-sm font-bold line-clamp-2'}>
                {work.title}
              </div>
              <div className={'text-center text-xs sm:text-sm line-clamp-2'}>
                {work.summary}
              </div>
            </Link>
          ))}
      </div>
    </Section>
  );
};

export default ProjectWorks;
