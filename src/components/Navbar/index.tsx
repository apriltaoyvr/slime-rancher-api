'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flex, Text, Separator, Button, IconButton } from '@radix-ui/themes';
import { GitHubLogoIcon, HomeIcon } from '@radix-ui/react-icons';
import ThemeChanger from './ThemeChanger';

export default function Navbar() {
  // We split this to catch subroutes (e.g. the /info from /info/slimes)
  const pathname = '/' + usePathname().split('/')[1];

  const Navlink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <Button
        variant='ghost'
        color={pathname === href ? 'ruby' : 'gray'}
        asChild
      >
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
      <IconButton variant='ghost' m='2' asChild>
        <Link href={href}>{children}</Link>
      </IconButton>
    );
  };

  return (
    <nav
      className='sticky top-0 z-40 flex w-full flex-row place-content-between place-items-center border-b border-accent-6 p-2 bg-blend-overlay backdrop-blur-lg'
      data-accent-color='gray'
    >
      <header>
        <Iconlink href='/'>
          <HomeIcon width='16' height='16' />
        </Iconlink>
      </header>
      {pathname !== '/' && (
        <Flex align='center' justify='center' gap='4' className='span-3'>
          <Navlink href='/info'>Info</Navlink>
          <Separator orientation='vertical' />
          <Navlink href='/docs'>Docs</Navlink>
          <Navlink href='/api'>API</Navlink>
          <Navlink href='/graphql'>GraphQL</Navlink>
        </Flex>
      )}
      <Flex align='center' justify='center' gap='2'>
        <ThemeChanger />
        <Iconlink href='https://github.com/apriltaoyvr/slime-rancher-api'>
          <GitHubLogoIcon width='16' height='16' />
        </Iconlink>
      </Flex>
    </nav>
  );
}
