import { locations, slimes } from '@/lib/data';
import { FoodType as FoodTypeEnum } from './enums';
import { FoodRef, SlimepediaRef, SlimeRef, LocationRef } from './refs';

export const Food = FoodRef.implement({
  description: 'Food that can be eaten by slimes',
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    image: t.exposeString('image'),
    type: t.expose('type', {
      type: FoodTypeEnum,
      description: 'The type of food it is',
    }),
    favouredBy: t.field({
      type: SlimeRef,
      nullable: true,
      description: 'The slime whose favourite food it is',
      resolve: (food) => slimes.find((slime) => slime.favouriteFood === food.id),
    }),
    locations: t.field({
      type: [LocationRef],
      nullable: true,
      description: 'Locations where this food can be found',
      resolve: (food) =>
        locations.filter((location) => food.locations.includes(location.id)),
    }),
    slimepedia: t.expose('slimepedia', {
      type: SlimepediaRef,
      description: "A food's Slimepedia entry",
    }),
  }),
});
