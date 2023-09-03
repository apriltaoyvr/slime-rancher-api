export interface Slime {
  id: string;
  name: string;
  image: string;
  diet: string;
  favouriteToy: string | null;
  favouriteFood: string | null;
  type: string;
  slimepedia: {
    slimeology: string;
    risks: string;
    plortonomics: string;
  };
  locations: string[];
  properties?: string[] | null;
}

export interface Location {
  id: string;
  name: string;
  slimes: string[];
  foods: string[];
}

export interface Toy {
  id: string;
  name: string;
  slime: string;
  description: string;
  price: number;
}

export interface Food {
  id: string;
  name: string;
  type: string;
  slime: string;
  locations: string[];
}
