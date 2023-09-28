import type { Location } from '@/lib/data';
import gql from 'gql-tag';

export interface ILocationGallery extends Location {
  slimes: {
    id: string;
    name: string;
  }[]
  foods: {
    id: string;
    name: string;
  }[]
}

export interface ILocationGalleryFetch {
  data: {
    locations: ILocationGallery[];
  };
}

export const allLocationsQuery = gql`
  query Locations {
    locations {
      id
      name
      image
      slimepedia {
        about
      }
      slimes {
        id
        name
      }
      foods {
        id
        name
      }
      games
    }
  }
`;
