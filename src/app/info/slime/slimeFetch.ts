import { SlimeType } from '@/lib/data';
import { Diet } from '@/lib/data/enums';
import gql from 'gql-tag';

export interface ISlimeGallery {
  id: string;
  name: string;
  image: string;
  type: SlimeType;
  diet: Diet;
  favouriteToy?: { id: string; name: string };
  favouriteFood?: {
    id: string;
    name: string;
  };
  games: number[];
}

export interface ISlimeGalleryFetch {
  data: {
    slimes: ISlimeGallery[];
  };
}

export const allSlimesQuery = gql`
  query Slimes {
    slimes {
      id
      name
      image
      type
      diet
      favouriteToy {
        id
        name
      }
      favouriteFood {
        id
        name
      }
      games
    }
  }
`;
