import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Headers/Header';
import Providers from './theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <title>{metadata.title}</title>
      <body className='scroll-smooth box-border p-0 m-0 overflow-x-hidden bg-gray-100 dark:bg-gray-800'>
        <Providers>
          <main className='transition-all duration-300 ease-in-out h-svh min-h-svh w-svw bg-transparent text-gray-800 dark:text-gray-200 flex flex-col items-center'>
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
