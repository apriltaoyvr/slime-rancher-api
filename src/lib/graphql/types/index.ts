import { objectType, queryType, enumType } from 'nexus';
import { slimes, locations, foods, toys } from '@/lib/data';

export const Slime = objectType({
  name: 'Slime',
  description: 'Bouncy and cute little guys',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.string('image');
    t.nonNull.field('diet', { type: DietEnum });
    t.nonNull.string('favouriteToy');
    t.nonNull.field('favouriteFood', { type: Food });
    t.nonNull.field('slimepedia', { type: Slimepedia });
    t.nonNull.list.field('locations', {
      type: Location,
      resolve(parent, args, ctx) {
        return locations.filter((location) =>
          location.slimes.includes(parent.id)
        );
      },
    });
  },
});

export const Location = objectType({
  name: 'Location',
  description: 'A location on Rainbow Island',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.nonNull.list.field('slimes', {
      type: Slime,
      description: 'Slimes that can be found at this location',
      resolve(parent) {
        return slimes.filter((slime) => slime.locations.includes(parent.id));
      },
    });
    t.nonNull.list.field('foods', {
      type: Food,
      description: 'Foods that can be found at this location',
      resolve(parent) {
        return foods.filter((food) =>
          food.locations.includes(parent.id)
        );
      },
    });
  },
});

export const Food = objectType({
  name: 'Food',
  description: 'Food that can be eaten by slimes',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.nonNull.field('type', {
      type: DietEnum,
      description: 'The type of food it is',
    });
    t.nonNull.field('favouredBy', {
      type: Slime,
      description: 'The slime whose favourite food it is',
      resolve(parent) {
        return slimes.filter((slime) => slime.favouriteFood === parent.id)[0];
      },
    });
    t.nonNull.list.field('locations', {
      type: Location,
      description: 'Locations where this food can be found',
      resolve(parent) {
        return locations.filter((location) =>
          location.foods.includes(parent.id)
        );
      },
    });
  },
});

export const Toys = objectType({
  name: 'Toy',
  description: 'Slime toy',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.nonNull.field('favouredBy', {
      type: Slime,
      description: 'The slime whose favourite toy it is',
      resolve(parent) {
        return slimes.filter((slime) => slime.favouriteToy === parent.id)[0];
      },
    });
    t.nonNull.string('description');
    t.nonNull.int('price');
  },
});
export const DietEnum = enumType({
  name: 'Diet',
  members: ['veggie', 'fruit', 'meat', 'all'],
  description: 'The type of diet for a slime',
});

export const Slimepedia = objectType({
  name: 'Slimepedia',
  description: "A slime's Slimepedia entry",
  definition(t) {
    t.string('slimeology');
    t.string('risks');
    t.string('plortonomics');
  },
});

export const Query = queryType({
  definition(t) {
    t.nonNull.list.field('slimes', {
      type: 'Slime',
      description: 'A list of slimes',
      resolve() {
        return slimes;
      },
    });
    t.nonNull.list.field('locations', {
      type: 'Location',
      description: 'A list of locations',
      resolve() {
        return locations;
      },
    });
    t.nonNull.list.field('foods', {
      type: 'Food',
      description: 'A list of slime foods',
      resolve() {
        return foods;
      },
    });
    t.nonNull.list.field('toys', {
      type: 'Toy',
      description: 'A list of slime toys',
      resolve() {
        return toys;
      },
    });
  },
});
