import { foods, slimes } from '@/lib/data';
import { LocationRef, SlimepediaRef, SlimeRef, FoodRef } from './refs';

export const Location = LocationRef.implement({
  description: 'A location in Slime Rancher',
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    image: t.exposeString('image'),
    games: t.exposeIntList('games', {
      description: 'The games this location appears in',
    }),
    slimepedia: t.expose('slimepedia', {
      type: SlimepediaRef,
      description: "A location's slimepedia entry",
    }),
    slimes: t.field({
      type: [SlimeRef],
      nullable: true,
      description: 'Slimes that can be found at this location',
      resolve: (parent) =>
        slimes.filter((slime) => slime.locations.includes(parent.id)),
    }),
    foods: t.field({
      type: [FoodRef],
      nullable: true,
      description: 'Foods that can be found at this location',
      resolve: (parent) =>
        foods.filter((food) => food.locations.includes(parent.id)),
    }),
  }),
});
