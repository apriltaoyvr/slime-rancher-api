import { toys, foods, locations } from '@/lib/data';
import { FoodType as FoodTypeEnum, SlimeType as SlimeTypeEnum } from './enums';
import { SlimeRef, SlimepediaRef, ToyRef, FoodRef, LocationRef } from './refs';

export const Slime = SlimeRef.implement({
  description: 'Bouncy and cute little guys',
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    image: t.exposeString('image'),
    diet: t.expose('diet', {
      type: FoodTypeEnum,
      description: 'What a slime can eat',
    }),
    favouriteToy: t.field({
      type: ToyRef,
      nullable: true,
      description: "The slime's favourite toy",
      resolve: (slime) => toys.find((toy) => toy.id === slime.favouriteToy),
    }),
    favouriteFood: t.field({
      type: FoodRef,
      nullable: true,
      description: "The slime's favourite food",
      resolve: (slime) => foods.find((food) => food.id === slime.favouriteFood),
    }),
    type: t.expose('type', {
      type: SlimeTypeEnum,
      description: "The slime's type",
    }),
    slimepedia: t.expose('slimepedia', {
      type: SlimepediaRef,
      description: "The slime's Slimepedia entries",
    }),
    locations: t.field({
      type: [LocationRef],
      nullable: true,
      description: 'Locations where this slime appears',
      resolve: (slime) =>
        locations.filter((location) => slime.locations.includes(location.id)),
    }),
    properties: t.exposeStringList('properties', { nullable: true }),
    games: t.exposeIntList('games', {
      description: 'The games the slime appears in',
    }),
  }),
});
