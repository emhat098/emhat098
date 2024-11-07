import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Toaster } from 'sonner';
import TopLoader from '@/components/loader/loader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`transition-colors duration-500 ease-in-out antialiased dark:bg-slate-950 dark:text-white ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <TopLoader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
