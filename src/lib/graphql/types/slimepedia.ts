import { objectType } from 'nexus';

export const Slimepedia = objectType({
  name: 'Slimepedia',
  description: 'A Slimepedia entry',
  definition(t) {
    // General
    t.string('about', { description: 'A general slimepedia entry' });
    // Slime
    t.string('slimeology', { description: "A slime's slimeology" });
    t.string('risks', { description: "A slime's risks" });
    t.string('plortonomics', { description: "A slime's plortonomics" });
    // Food
    t.string('ranch', { description: "A food's ranch entry" });
  },
});
