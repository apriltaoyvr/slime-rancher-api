import type { Diet } from "./enums";

export interface Food {
  id: string;
  name: string;
  type: Diet;
  slime: string | null;
  locations: string[];
}

export const foods: Food[] = [
  {
    id: 'roostro',
    name: 'Roostro',
    type: 'meat',
    slime: 'hunter',
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'elderroostro',
    name: 'Elder Roostro',
    type: 'meat',
    slime: null,
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'hen',
    name: 'Hen Hen',
    type: 'meat',
    slime: null,
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'elderhen',
    name: 'Elder Hen',
    type: 'meat',
    slime: null,
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'stonyhen',
    name: 'Stony Hen',
    type: 'meat',
    slime: 'tabby',
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'briarhen',
    name: 'Briar Hen',
    type: 'meat',
    slime: 'boom',
    locations: ['blanket'],
  },
  {
    id: 'paintedhen',
    name: 'Painted Hen',
    type: 'meat',
    slime: 'tangle',
    locations: ['desert'],
  },
  {
    id: 'chickadoo',
    name: 'Chickadoo',
    type: 'meat',
    slime: null,
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'stonychickadoo',
    name: 'Stony Chickadoo',
    type: 'meat',
    slime: null,
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'briarchickadoo',
    name: 'Briar Chickadoo',
    type: 'meat',
    slime: null,
    locations: ['blanket'],
  },
  {
    id: 'paintedchickadoo',
    name: 'Painted Chickadoo',
    type: 'meat',
    slime: null,
    locations: ['desert'],
  },
  {
    id: 'pogo',
    name: 'Pogo Fruit',
    type: 'fruit',
    slime: null,
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'carrot',
    name: 'Carrot',
    type: 'veggie',
    slime: null,
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'beet',
    name: 'Heart Beet',
    type: 'veggie',
    slime: 'rock',
    locations: ['reef', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'cuberry',
    name: 'Cuberry',
    type: 'fruit',
    slime: 'phosphor',
    locations: ['reef', 'blanket', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'mango',
    name: 'Mint Mango',
    type: 'fruit',
    slime: 'honey',
    locations: ['blanket'],
  },
  {
    id: 'oca',
    name: 'Oca Oca',
    type: 'veggie',
    slime: 'rad',
    locations: ['quarry'],
  },
  {
    id: 'onion',
    name: 'Odd Onion',
    type: 'veggie',
    slime: 'crystal',
    locations: ['quarry'],
  },
  {
    id: 'lemon',
    name: 'Quantum Lemon',
    type: 'fruit',
    slime: 'quantum',
    locations: ['ruins'],
  },
  {
    id: 'pear',
    name: 'Prickle Pear',
    type: 'fruit',
    slime: 'dervish',
    locations: ['desert'],
  },
  {
    id: 'parsnip',
    name: 'Silver Parsnip',
    type: 'veggie',
    slime: 'mosaic',
    locations: ['desert'],
  },
  {
    id: 'ginger',
    name: 'Gilded Ginger',
    type: 'veggie',
    slime: 'golden',
    locations: ['desert'],
  },
  {
    id: 'kookadoba',
    name: 'Kookadoba',
    type: 'fruit',
    slime: null,
    locations: ['wilds'],
  },
];
