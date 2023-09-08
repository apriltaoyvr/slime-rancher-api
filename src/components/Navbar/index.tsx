'use client';
import { Flex, Text, Separator } from '@radix-ui/themes';
import Link from 'next/link';
import { GitHubLogoIcon, HomeIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const Navlink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <Link
        href={href}
        className={
          'rt-reset-button rt-reset-a rt-BaseButton rt-Button rounded px-2 py-1 ' +
          `${pathname === href ? 'rt-variant-soft' : 'rt-variant-ghost'}`
        }
      >
        <Text size='2'>{children}</Text>
      </Link>
    );
  };

  const Iconlink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <Link
        href={href}
        className='rt-reset-button rt-reset-a rt-BaseButton rt-Button rt-variant-ghost rounded p-2'
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className='navbar' data-accent-color='gray'>
      <header>
        <Iconlink href='/'>
          <HomeIcon width='16' height='16' />
        </Iconlink>
      </header>
      {pathname !== '/' && (
        <Flex align='center' justify='center' gap='2'>
          <Navlink href='/info'>Info</Navlink>
          <Separator orientation='vertical' />
          <Navlink href='/docs'>Docs</Navlink>
          <Navlink href='/api'>API</Navlink>
          <Navlink href='/graphql'>GraphQL</Navlink>
        </Flex>
      )}
      <footer>
        <Iconlink href='https://github.com/apriltaoyvr/slime-rancher-api'>
          <GitHubLogoIcon width='16' height='16' />
        </Iconlink>
      </footer>
    </nav>
  );
}
