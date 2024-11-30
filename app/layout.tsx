import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Toaster } from 'sonner';
import TopLoader from '@/components/loader/loader';
import { ThemeProvider } from 'next-themes';
import { CodeEditorCSS } from '@/components/code-editor/code-css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={'scrollbar-thumb-slate-900 scrollbar-track-slate-300'}
      suppressHydrationWarning
    >
      <head>
        <CodeEditorCSS />
        <meta
          name='google-adsense-account'
          content='ca-pub-2083432074936499'
        />
      </head>
      <body
        className={`transition-colors duration-500 ease-in-out antialiased ${GeistSans.variable} ${GeistMono.variable} dark:bg-dark dark:text-dark`}
      >
        <ThemeProvider
          attribute={'class'}
          defaultTheme={'system'}
          enableSystem
          enableColorScheme
        >
          <TopLoader />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
