'use client';
import Link from 'next/link';
import { GitHubLogoIcon, HomeIcon } from '@radix-ui/react-icons';

export default function Navbar() {
  return (
    <nav className='navbar' data-accent-color='gray'>
      <header>
        <Link
          href='/'
          className='rt-reset-button rt-reset-a rt-BaseButton rt-Button rt-variant-ghost rounded p-2'
          data-accent-color='crimson'
        >
          <HomeIcon width='16' height='16' />
        </Link>
      </header>
      <footer>
        <Link
          href='https://github.com/apriltaoyvr/slime-rancher-api'
          className='rt-reset-button rt-reset-a rt-BaseButton rt-Button rt-variant-ghost rounded p-2'
          data-accent-color='crimson'
        >
          <GitHubLogoIcon width='16' height='16' />
        </Link>
      </footer>
    </nav>
  );
}
