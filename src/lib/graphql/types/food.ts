import { objectType } from "nexus";
import { DietEnum, Slime, Location } from ".";
import { locations, slimes } from "@/lib/data";

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
    t.field('favouredBy', {
      type: Slime,
      description: 'The slime whose favourite food it is',
      resolve(food) {
        return slimes.find((slime) => slime.favouriteFood === food.id);
      },
    });
    t.nonNull.list.field('locations', {
      type: Location,
      description: 'Locations where this food can be found',
      resolve(food) {
        return locations.filter((location) => food.locations.includes(location.id));
      },
    });
  },
});
