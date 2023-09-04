import { objectType } from "nexus";
import { Slime } from ".";
import { slimes } from "@/lib/data";

export const Toy = objectType({
  name: 'Toy',
  description: 'Slime toy',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.field('favouredBy', {
      type: Slime,
      description: 'The slime whose favourite toy it is',
      resolve(toy) {
        return slimes.find((slime) => slime.favouriteToy === toy.id);
      },
    });
    t.nonNull.string('description', {description: 'A description of a toy'});
    t.nonNull.int('price', {description: 'The cost of a toy'});
  },
});
