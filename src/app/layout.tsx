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
  openGraph: {
    title: 'Slime Rancher GraphQL',
    description: 'A GraphQL endpoint for Slime Rancer',
    url: 'https://slime-rancher-graphql.vercel.app/',
    images: [
      {
        url: 'https://slime-rancher-graphql.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslimes.bf78d2a6.webp&w=640&q=75',
        width: 512,
        height: 300,
      }
    ],
    locale: 'en_CA',
    type: 'website',
  },
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
