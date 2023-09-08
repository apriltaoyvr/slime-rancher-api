import gql from 'gql-tag';
import { ISlimeDirectory } from '../../slimeFetch';

export interface ISlime extends ISlimeDirectory {
  locations: { id: string; name: string }[];
  slimepedia: {
    slimeology: string;
    risks: string;
    plortonomics: string;
  };
  properties: string[];
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
