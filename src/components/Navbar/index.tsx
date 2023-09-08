'use client'
import { Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { GitHubLogoIcon, HomeIcon } from '@radix-ui/react-icons';

export default function Navbar() {
  return (
    <nav className='navbar' data-accent-color='gray'>
      <header>
        <Link
          href='/'
          className='rt-reset-button rt-reset-a rt-BaseButton rt-Button rt-variant-ghost p-2 rounded'
          data-accent-color='crimson'
        >
          <HomeIcon width='16' height='16' />
        </Link>
      </header>
      <footer>
        <Link
          href='/'
          className='rt-reset-button rt-reset-a rt-BaseButton rt-Button rt-variant-ghost p-2 rounded'
          data-accent-color='crimson'
        >
          <GitHubLogoIcon width='16' height='16' />
        </Link>
      </footer>
    </nav>
  );
}
