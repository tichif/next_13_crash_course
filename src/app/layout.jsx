import { Poppins } from 'next/font/google';
import './globals.css';

import Header from './components/Header';

export const metadata = {
  title: 'Tichif Media',
  description: 'Web development and courses',
  keywords: 'web, tichif, haiti',
};

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}