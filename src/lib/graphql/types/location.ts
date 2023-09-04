import { objectType } from "nexus";
import { foods, slimes } from "@/lib/data";
import { Slime } from "./slime";
import { Food } from "./food";

export const Location = objectType({
  name: 'Location',
  description: 'A location on The Far, Far Range',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
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
