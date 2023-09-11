import gql from 'gql-tag';
import { ISlimeGallery } from '../slimeFetch';

export interface ISlime extends ISlimeGallery {
  locations: { id: string; name: string }[];
  slimepedia: {
    slimeology: string;
    risks: string;
    plortonomics: string;
  };
  properties: string[];
}

export interface IFetchRes {
  data: {
    slimes: ISlime[];
  };
}

export const singleSlimeQuery = gql`
  query Slime($slimeId: String) {
    slimes(slimeId: $slimeId) {
      id
      name
      image
      type
      diet
      games
      favouriteToy {
        name
      }
      favouriteFood {
        name
      }
      locations {
        name
      }
      slimepedia {
        slimeology
        risks
        plortonomics
      }
      properties
    }
  }
`;
