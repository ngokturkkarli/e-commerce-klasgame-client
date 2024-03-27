import type { Metadata } from 'next';
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'E-Commerce Site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen font-sans antialiased', fontSans.variable)}
      >
        <div className="flex flex-col gap-8 w-full text-white">
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
