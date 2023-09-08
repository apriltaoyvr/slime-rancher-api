import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slimes | Slime Rancher',
};

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
