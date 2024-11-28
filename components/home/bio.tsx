import Section from '../section/section';

interface BioType {
  year: string;
  title: string;
}

const bios: BioType[] = [
  { year: '1998', title: 'Born in Can Tho, Vietnam.' },
  {
    year: '2016',
    title: 'Completed the High School program at Thuan Hung High School',
  },
  {
    year: '2016',
    title:
      'Studied Applied Informatics at Cao Thang Technical College (Vocational Certificate Program)',
  },
  {
    year: '2016',
    title:
      'Worked various part-time jobs: Chinese restaurant waiter, flyer distributor, parking attendant at a Korean restaurant, delivery staff, and shipper',
  },
  { year: '2018', title: 'Intern at Caganu' },
  {
    year: '2018',
    title: 'Left Cao Thang Technical College (personal reasons).',
  },
  { year: '2018-2019', title: 'Self-learning' },
  { year: '2019-2020', title: 'Software Engineer at Fuijinet System.' },
  { year: '2020', title: 'Software Engineer at Nashtech Vietnam.' },
  { year: '2023', title: 'Freelancer at Bazango.vn.' },
  { year: '2023', title: 'Freelancer at amoeba.site.' },
  { year: '2024', title: 'Freelancer at Ads Management Company.' },
  { year: '2024', title: 'Creating my personal blog website independently' },
  { year: 'Present', title: 'Senior Software Engineer at Nashtech.' },
];

const Bio = () => {
  return (
    <Section title={`> Bio:`}>
      <div className={'flex flex-col gap-2'}>
        {bios.map((bio) => (
          <div
            key={bio.year + bio.title}
            className={'flex gap-4'}
          >
            <span className={'font-bold'}>{bio.year}</span>
            <span>{bio.title}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Bio;
