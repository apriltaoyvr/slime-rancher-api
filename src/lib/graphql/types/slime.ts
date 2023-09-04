import { toys, foods, locations } from "@/lib/data";
import { objectType } from "nexus";
import { DietEnum, Toys, Food, SlimeDisposition, Slimepedia, Location } from ".";

export const Slime = objectType({
  name: 'Slime',
  description: 'Bouncy and cute little guys',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.string('image');
    t.nonNull.field('diet', { type: DietEnum });
    t.field('favouriteToy', {
      type: Toys,
      description: "The slime's favourite toy",
      resolve(slime) {
        return toys.find((toy) => toy.id === slime.favouriteToy);
      },
    });
    t.field('favouriteFood', {
      type: Food,
      description: "The slime's favourite food for the slime",
      resolve(slime) {
        return foods.find((food) => food.id === slime.favouriteFood);
      },
    });
    t.nonNull.field('type', {
      type: SlimeDisposition,
      description: "The slime's disposition",
    });
    t.nonNull.field('slimepedia', { type: Slimepedia });
    t.nonNull.list.field('locations', {
      type: Location,
      resolve(slime) {
        return locations.filter((location) =>
          slime.locations.includes(location.id)
        );
      },
    });
    t.list.string('properties');
  },
});
