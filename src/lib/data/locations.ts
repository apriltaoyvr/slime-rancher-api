export interface Location {
  id: string;
  name: string;
}
export const locations: Location[] = [
  {
    id: 'reef',
    name: 'The Dry Reef',
  },
  {
    id: 'blanket',
    name: 'The Moss Blanket',
  },
  {
    id: 'quarry',
    name: 'The Indigo Quarry',
  },
  {
    id: 'ruins',
    name: 'The Ancient Ruins',
  },
  {
    id: 'desert',
    name: 'The Glass Desert',
  },
  {
    id: 'wilds',
    name: 'The Wilds',
  },
  {
    id: 'valley',
    name: 'Nimble Valley',
  },
  {
    id: 'slimeulation',
    name: 'The Slimeulation',
  },
];

export type LocationType = typeof locations;
