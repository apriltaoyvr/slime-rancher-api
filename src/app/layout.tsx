import '@radix-ui/themes/styles.css';
import './globals.css'
import Providers from './providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Slime Rancher GraphQL',
  description: 'A GraphQL endpoint for Slime Rancer',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#191719' },
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Slime Rancher GraphQL',
    description: 'A GraphQL endpoint for Slime Rancer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
