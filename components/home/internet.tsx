import {
  PiFacebookLogoLight,
  PiGithubLogoLight,
  PiTwitterLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
} from 'react-icons/pi';
import Section from '../section/section';
import Link from '../link/link';

interface LinkType {
  icon: React.ReactNode;
  href: string;
  title: string;
}

const links: LinkType[] = [
  {
    icon: <PiFacebookLogoLight className={'w-6 h-6'} />,
    href: 'https://www.facebook.com/emhat098',
    title: '@Facebook',
  },
  {
    icon: <PiGithubLogoLight className={'w-6 h-6'} />,
    href: 'https://github.com/emhat098',
    title: '@Github',
  },
  {
    icon: <PiTwitterLogoLight className={'w-6 h-6'} />,
    href: 'https://x.com/emhat098',
    title: '@Twitter',
  },
  {
    icon: <PiInstagramLogoLight className={'w-6 h-6'} />,
    href: 'https://www.instagram.com/emdevphotos/',
    title: '@Instagram',
  },
  {
    icon: <PiLinkedinLogoLight className={'w-6 h-6'} />,
    href: 'https://www.linkedin.com/in/ha-tuan-em-52753a154/',
    title: '@Linkedin',
  },
];

const Internet = () => {
  return (
    <Section title={`> On the Internet:`}>
      <div className={'flex flex-col gap-2'}>
        {links.map((link) => (
          <Link
            key={link.href}
            className={
              'transition-all duration-300 ease-linear flex gap-4 px-2 py-1 font-semibold dark:text-teal-100 hover:bg-teal-300 dark:hover:bg-teal-100 hover:text-black hover:dark:text-teal-900 text-teal-950 min-w-20 max-w-44 rounded-lg'
            }
            href={link.href}
          >
            <span className={'font-bold'}>{link.icon}</span>
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Internet;
