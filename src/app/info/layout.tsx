import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Info',
};

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
