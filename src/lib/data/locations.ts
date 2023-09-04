export interface Location {
  id: string;
  name: string;
  slimes: string[];
  foods: string[];
}
export const locations: Location[] = [
  {
    id: 'reef',
    name: 'The Dry Reef',
    slimes: ['pink', 'phosphor', 'rock', 'tabby', 'puddle'],
    foods: ['stonyhen', 'roostro', 'cuberry', 'beet'],
  },
  {
    id: 'blanket',
    name: 'The Moss Blanket',
    slimes: ['pink', 'phosphor', 'tabby', 'puddle', 'boom', 'hunter', 'honey'],
    foods: ['stonyhen', 'briarhen', 'roostro', 'cuberry', 'mango'],
  },
  {
    id: 'quarry',
    name: 'The Indigo Quarry',
    slimes: ['pink', 'phosphor', 'rock', 'puddle', 'boom', 'rad', 'crystal'],
    foods: ['stonyhen', 'roostro', 'beet', 'oca', 'onion'],
  },
  {
    id: 'ruins',
    name: 'The Ancient Ruins',
    slimes: ['pink', 'phosphor', 'rock', 'tabby', 'puddle', 'quantum'],
    foods: ['stonyhen', 'roostro', 'cuberry', 'beet', 'lemon'],
  },
  {
    id: 'desert',
    name: 'The Glass Desert',
    slimes: [
      'pink',
      'phosphor',
      'rock',
      'tabby',
      'puddle',
      'hunter',
      'quantum',
      'dervish',
      'fire',
      'tangle',
      'mosaic',
    ],
    foods: [
      'stonyhen',
      'roostro',
      'cuberry',
      'beet',
      'pear',
      'paintedhen',
      'parsnip',
    ],
  },
  {
    id: 'wilds',
    name: 'The Wilds',
    slimes: ['pink', 'phosphor', 'rock', 'tabby', 'rad', 'hunter', 'saber'],
    foods: ['stonyhen', 'roostro', 'cuberry', 'beet'],
  },
];

export type LocationType = typeof locations;
