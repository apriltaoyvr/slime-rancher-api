import type { Config } from 'tailwindcss'
import { radixThemePreset } from 'radix-themes-tw';

const config: Config = {
  ...radixThemePreset,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
export default config
