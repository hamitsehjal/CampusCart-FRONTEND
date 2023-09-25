import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './ui/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Campus Cart',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
