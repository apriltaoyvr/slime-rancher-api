'use client';

export default function Loading() {
  return (
    <figure
      className='min-w-screen z-50 h-[5px] animate-pulse bg-accent-5'
      aria-hidden
      aria-label='Loading...'
      data-accent-color='blue'
    />
  );
}
