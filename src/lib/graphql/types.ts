import { makeSchema, objectType, queryType, enumType } from 'nexus';
import slimes from '../data/slimes';
import locations from '../data/locations';

export const Slime = objectType({
  name: 'Slime',
  description: 'Bouncy and cute little guys',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.string('image');
    t.nonNull.field('diet', { type: DietEnum });
    t.nonNull.string('favouriteToy');
    t.nonNull.string('favouriteFood');
    t.field('slimepedia', { type: Slimepedia });
    t.list.field('locations', {
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
    t.nonNull.list.field('slimes', { type: Slime, resolve(parent) {
      return slimes.filter((slime) => slime.locations.includes(parent.id))
    } });
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
  },
});
