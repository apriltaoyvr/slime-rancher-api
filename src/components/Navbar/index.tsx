'use client';
import { Flex, Text, Separator, Button } from '@radix-ui/themes';
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
      <Button variant='ghost' color={pathname === href ? 'ruby' : 'gray'} asChild>
        <Link href={href}>
          <Text size='2'>{children}</Text>
        </Link>
      </Button>
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
      <Button variant='ghost' m='2' asChild>
        <Link
          href={href}
          className='rt-reset-button rt-BaseButton rt-Button rt-variant-ghost p-2'
        >
          {children}
        </Link>
      </Button>
    );
  };

  return (
    <nav
      className='sticky top-0 z-40 mb-4 flex w-full flex-row place-content-between place-items-center border-b border-accent-6 p-2 bg-blend-overlay backdrop-blur-sm'
      data-accent-color='gray'
    >
      <header>
        <Iconlink href='/'>
          <HomeIcon width='16' height='16' />
        </Iconlink>
      </header>
      {pathname !== '/' && (
        <Flex align='center' justify='center' gap='4'>
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
