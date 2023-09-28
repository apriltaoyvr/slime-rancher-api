import { objectType } from 'nexus';
import { FoodType, Slime, Location, Slimepedia } from '.';
import { locations, slimes } from '@/lib/data';

export const Food = objectType({
  name: 'Food',
  description: 'Food that can be eaten by slimes',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.nonNull.string('image');
    t.nonNull.field('type', {
      type: FoodType,
      description: 'The type of food it is',
    });
    t.field('favouredBy', {
      type: Slime,
      description: 'The slime whose favourite food it is',
      resolve(food) {
        return slimes.find((slime) => slime.favouriteFoodId === food.id);
      },
    });
    t.list.field('locations', {
      type: Location,
      description: 'Locations where this food can be found',
      resolve(food) {
        return locations.filter((location) =>
          food.locationIds.includes(location.id),
        );
      },
    });
    t.nonNull.field('slimepedia', {
      type: Slimepedia,
      description: "A food's Slimepedia entry",
    });
  },
});
