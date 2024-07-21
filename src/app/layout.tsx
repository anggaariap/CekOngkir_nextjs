import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer/footer'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Cek Ongkir Ke Seluruh Indonesia',
  description:
    'Fetch API Rajaongkir used nextjs and tsx by Angga Aria Putra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
