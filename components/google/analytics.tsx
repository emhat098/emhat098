'use client';

import dynamic from 'next/dynamic';

const GGAnalytics = dynamic(() =>
  import('@next/third-parties/google').then((m) => m.GoogleAnalytics),
);

const GoogleAnalytics = () => {
  return <GGAnalytics gaId={process.env.NEXT_PUBLIC_GG_ANALYTICS as string} />;
};

export default GoogleAnalytics;
