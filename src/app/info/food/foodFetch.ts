import { Diet } from '@/lib/data/enums';
import gql from 'gql-tag';

export interface IFoodGallery {
  id: string;
  name: string;
  image: string;
  type: Diet;
  favouredBy: {
    id: string | null;
    name: string | null;
  };
}

export interface IFoodGalleryFetch {
  data: {
    foods: IFoodGallery[];
  };
}

export const allFoodsQuery = gql`
  query Foods {
    foods {
      name
      id
      image
      type
      favouredBy {
        id
        name
      }
    }
  }
`;
