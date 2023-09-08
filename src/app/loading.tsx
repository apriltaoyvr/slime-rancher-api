'use client';
export default function Loading() {
  return (
    <figure
      className='min-w-screen z-50 h-[5px] animate-pulse bg-blue-400'
      aria-hidden
      aria-label='Loading...'
    />
  );
}
