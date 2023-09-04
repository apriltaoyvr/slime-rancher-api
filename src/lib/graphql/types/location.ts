import { objectType } from "nexus";
import { foods, slimes } from "@/lib/data";
import { Slime } from "./slime";
import { Food } from "./food";

export const Location = objectType({
  name: 'Location',
  description: 'A location on Rainbow Island',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.nonNull.list.field('slimes', {
      type: Slime,
      description: 'Slimes that can be found at this location',
      resolve(source) {
        return slimes.filter((slime) => slime.locations.includes(source.id));
      },
    });
    t.nonNull.list.field('foods', {
      type: Food,
      description: 'Foods that can be found at this location',
      resolve(source) {
        return foods.filter((food) => food.locations.includes(source.id));
      },
    });
  },
});
