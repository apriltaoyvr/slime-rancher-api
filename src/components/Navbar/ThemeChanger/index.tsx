import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant='ghost'
      m='2'
      className='p-2'
      onClick={() => {
        isLight ? setTheme('dark') : setTheme('light');
      }}
    >
      {isLight ? (
        <MoonIcon width='16' height='16' />
      ) : (
        <SunIcon width='16' height='16' />
      )}
    </Button>
  );
};

export default ThemeChanger;
