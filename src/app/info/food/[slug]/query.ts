import gql from 'gql-tag';
import type { IFoodGallery } from '../foodFetch';

export interface IFood extends IFoodGallery {
  locations: { id: string; name: string }[];
  slimepedia: {
    about: string;
    ranch: string;
  };
}

export interface IFetchRes {
  data: {
    foods: IFood[];
  };
}

export const singleFoodQuery = gql`
  query Food($foodId: String) {
    foods(foodId: $foodId) {
      name
      id
      image
      type
      favouredBy {
        id
        name
      }
      locations {
        id
        name
      }
      slimepedia {
        about
        ranch
      }
    }
  }
`;
