'use client';

import Avatar from '../avatar/avatar';
import Logo from '../logo/logo';
import P from '../paragraph/paragraph';

const InFooter = () => {
  return (
    <div className={'grid grid-cols-12 gap-4 p-6 bg-slate-50 rounded-lg my-4'}>
      <div className={'col-span-6 flex flex-col gap-2'}>
        <Logo className={'text-xl md:text2xl'}>{'Em Ha Tuan'}</Logo>
        <P className={'text-sm md:text-sm'}>
          {`I’m a dedicated and self-motivated Software
          Engineer with a passion for cutting-edge technologies. Over the past
          six years, starting at the age of 18, I have honed my skills through
          self-directed learning and professional experience in the industry.`}
        </P>
      </div>
      <div className={'col-span-3'}>
        <ul className={'flex flex-col gap-2'}>
          <li className={'flex flex-row gap-2'}>
            <div className={'flex gap-4 items-start'}>
              <div>
                <Avatar
                  title={'Em Ha Tuan'}
                  image={
                    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/277796229_1219311105553639_7030352227871532204_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=duhDbQY36PAQ7kNvgHe-SRj&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=ApO9f2xRyQl0feS29YIbrrD&oh=00_AYC5j71DN3ibtwigNC4AvMebS2wlRNHhVuNwybOQY__H1A&oe=67365E3B'
                  }
                />
              </div>
              <div className='flex flex-col'>
                <P className={'font-medium'}>{'Home page'}</P>
                <span className={'line-clamp-2 text-xs'}>
                  {'Go back home to see more things.'}
                </span>
              </div>
            </div>
          </li>
          <li className='flex flex-row gap-2'>
            <div className={'flex gap-4 items-start'}>
              <div>
                <Avatar
                  title={'About me'}
                  image={
                    'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/305050059_1320008258817256_7577732652959164136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=x_orDqb7WKEQ7kNvgE7onTQ&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=ADUMoVe7wA9fcvqGqzKXqrt&oh=00_AYDBVFHGEzNPHj2GrzdhgQ2Osid74BnUZ4-PWaqJEeXRMg&oe=673652E3'
                  }
                />
              </div>
              <div className='flex flex-col'>
                <P className={'font-medium'}>{'About me'}</P>
                <span className={'line-clamp-2 text-xs'}>
                  {'I believe the world needs more smiles than anger.'}
                </span>
              </div>
            </div>
          </li>
          <li className='flex flex-row gap-2'></li>
        </ul>
      </div>
      <div className={'col-span-3'}>
        <ul className={'flex flex-col gap-2'}>
          <li className={'flex flex-row gap-2'}>
            <div className={'flex gap-4 items-start'}>
              <div>
                <Avatar
                  title={'My Blogs'}
                  image={
                    'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/454846648_1764741971010547_6440301084738931731_n.jpg?stp=c0.451.1536.1536a_dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=h5HDTzuwIyoQ7kNvgEV--nN&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=Ak4OOe4rqndtsleIGXRZhi9&oh=00_AYC1ZhDsY0HPyORrv0CsED-gazgcA2oXtikRz7uy4yYfMQ&oe=67365531'
                  }
                />
              </div>
              <div className='flex flex-col gap-1'>
                <P className={'font-medium'}>{'My Blogs'}</P>
                <span className={'line-clamp-2 text-xs'}>
                  {'Sometimes, we need to take a break to see a wider world.'}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InFooter;
