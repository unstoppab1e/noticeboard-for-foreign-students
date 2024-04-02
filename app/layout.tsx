'use client';

import './globals.css';
import Header from '../components/Headers/Header';
import Providers from './theme-provider';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Roboto } from 'next/font/google';

const roboco = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--roboco',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <title>{}</title>
      <body className='scroll-smooth box-border p-0 m-0 overflow-x-hidden bg-gray-100 dark:bg-gray-800'>
        <Providers>
          <main
            className={`${roboco.variable} font-roboco transition-all duration-300 ease-in-out h-svh min-h-svh w-svw bg-transparent text-gray-800 dark:text-gray-200 flex flex-col items-center`}
          >
            <Header />
            {children}
            <ThemeSwitcher />
          </main>
        </Providers>
      </body>
    </html>
  );
}
