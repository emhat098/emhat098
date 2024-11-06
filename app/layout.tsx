import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`transition-colors duration-500 ease-in-out antialiased dark:bg-slate-950 dark:text-white ${GeistSans.variable} ${GeistMono.variable} `}
      >
        <NextTopLoader
          showSpinner={false}
          color={'#000'}
          height={1}
        />
        {children}
      </body>
    </html>
  );
}
