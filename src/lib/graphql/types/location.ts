import { objectType } from 'nexus';
import { foods, slimes } from '@/lib/data';
import { Slime } from './slime';
import { Food } from './food';
import { Slimepedia } from './slimepedia';

export const Location = objectType({
  name: 'Location',
  description: 'A location in Slime Rancher',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.nonNull.string('image');
    t.nonNull.list.nonNull.int('games', {
      description: 'The games this location appears in',
    });
    t.nonNull.field('slimepedia', {
      type: Slimepedia,
      description: "A location's slimepedia entry",
    });
    t.list.field('slimes', {
      type: Slime,
      description: 'Slimes that can be found at this location',
      resolve(parent) {
        return slimes.filter((slime) => slime.locations.includes(parent.id));
      },
    });
    t.list.field('foods', {
      type: Food,
      description: 'Foods that can be found at this location',
      resolve(parent) {
        return foods.filter((food) => food.locations.includes(parent.id));
      },
    });
  },
});
