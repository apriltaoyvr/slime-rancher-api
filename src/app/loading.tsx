'use client';
export default function Loading() {
  return (
    <figure
      className='min-w-screen bg-accent-5 fixed top-0 z-50 h-[5px] animate-pulse'
      aria-hidden
      aria-label='Loading...'
    />
  );
}
