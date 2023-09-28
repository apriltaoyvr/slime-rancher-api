import gql from 'gql-tag';
import { ILocationGallery } from '../locationFetch';

export interface ILocation extends ILocationGallery {}

export interface IFetchRes {
  data: {
    locations: ILocation[];
  };
}

export const singleLocationQuery = gql`
  query Query($locationId: String) {
    locations(locationId: $locationId) {
      id
      name
      image
      games
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
    }
  }
`;
