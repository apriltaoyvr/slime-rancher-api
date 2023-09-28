import { toys, foods, locations } from '@/lib/data';
import { objectType } from 'nexus';
import { FoodType, Toy, Food, SlimeType, Slimepedia, Location } from '.';

export const Slime = objectType({
  name: 'Slime',
  description: 'Bouncy and cute little guys',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.nonNull.string('image');
    t.nonNull.field('diet', {
      type: FoodType,
      description: 'What a slime can eat',
    });
    t.field('favouriteToy', {
      type: Toy,
      description: "The slime's favourite toy",
      resolve(slime) {
        return toys.find((toy) => toy.id === slime.favouriteToy);
      },
    });
    t.field('favouriteFood', {
      type: Food,
      description: "The slime's favourite food",
      resolve(slime) {
        return foods.find((food) => food.id === slime.favouriteFood);
      },
    });
    t.nonNull.field('type', {
      type: SlimeType,
      description: "The slime's type",
    });
    t.nonNull.field('slimepedia', {
      type: Slimepedia,
      description: "The slime's Slimepedia entries",
    });
    t.list.field('locations', {
      type: Location,
      description: 'Locations where this slime appears',
      resolve(slime) {
        return locations.filter((location) =>
          slime.locations.includes(location.id),
        );
      },
    });
    t.list.string('properties');
    t.nonNull.list.nonNull.int('games', {
      description: 'The games the slime appears in',
    });
  },
});
